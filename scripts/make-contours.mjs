#!/usr/bin/env node
/*
 * Draws the topographic contour map that sits behind each plate header.
 *
 *   seeded gradient noise  ->  marching squares  ->  stitched polylines
 *   ->  Douglas–Peucker simplification  ->  smoothed quadratic paths
 *
 * Writes js/contours.js (a plain script, so the site still works when
 * opened straight from disk). Every plate shows a different window onto
 * the same terrain.
 *
 * Usage: node scripts/make-contours.mjs [seed]
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const W = 1600;
const H = 1200;
const STEP = 8; // grid spacing in map units
const LEVELS = 26;
const INDEX_EVERY = 5; // every 5th line is a heavier "index contour"
const SEED = Number(process.argv[2] || 1687); // the year of the Principia

// ---- seeded randomness ---------------------------------------------------
function mulberry32(a) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(SEED);

// ---- 2D gradient (Perlin) noise -------------------------------------------
const perm = new Uint8Array(512);
{
  const p = Array.from({ length: 256 }, (_, i) => i);
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
}
const GRAD = [[1, 1], [-1, 1], [1, -1], [-1, -1], [1, 0], [-1, 0], [0, 1], [0, -1]];
const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);

function noise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const X = xi & 255, Y = yi & 255;
  const dot = (ix, iy, dx, dy) => {
    const g = GRAD[perm[ix + perm[iy]] & 7];
    return g[0] * dx + g[1] * dy;
  };
  const u = fade(xf), v = fade(yf);
  const a = dot(X, Y, xf, yf) * (1 - u) + dot(X + 1, Y, xf - 1, yf) * u;
  const b = dot(X, Y + 1, xf, yf - 1) * (1 - u) + dot(X + 1, Y + 1, xf - 1, yf - 1) * u;
  return a * (1 - v) + b * v;
}

function fbm(x, y) {
  let sum = 0, amp = 1, freq = 1, norm = 0;
  for (let o = 0; o < 5; o++) {
    sum += amp * noise(x * freq, y * freq);
    norm += amp;
    amp *= 0.5;
    freq *= 2.03;
  }
  return sum / norm;
}

// Terrain height: domain-warped fBm, so ridges meander like real ones.
function height(px, py) {
  const s = 1 / 520;
  const wx = fbm(px * s + 11.3, py * s + 4.7) * 1.4;
  const wy = fbm(px * s - 7.1, py * s + 19.9) * 1.4;
  return fbm(px * s + wx, py * s + wy);
}

// ---- sample the field -------------------------------------------------------
const cols = W / STEP + 1;
const rows = H / STEP + 1;
const field = new Float64Array(cols * rows);
let lo = Infinity, hi = -Infinity;
for (let j = 0; j < rows; j++) {
  for (let i = 0; i < cols; i++) {
    const v = height(i * STEP, j * STEP);
    field[j * cols + i] = v;
    if (v < lo) lo = v;
    if (v > hi) hi = v;
  }
}

// ---- marching squares ------------------------------------------------------
// Corner order: a = top-left, b = top-right, c = bottom-right, d = bottom-left.
// Edge ids: 0 top, 1 right, 2 bottom, 3 left.
const CASES = {
  1: [[3, 2]], 2: [[2, 1]], 3: [[3, 1]], 4: [[0, 1]], 5: [[0, 1], [3, 2]],
  6: [[0, 2]], 7: [[3, 0]], 8: [[3, 0]], 9: [[0, 2]], 10: [[3, 0], [1, 2]],
  11: [[0, 1]], 12: [[3, 1]], 13: [[1, 2]], 14: [[3, 2]],
};

function contour(level) {
  const segs = [];
  for (let j = 0; j < rows - 1; j++) {
    for (let i = 0; i < cols - 1; i++) {
      const a = field[j * cols + i];
      const b = field[j * cols + i + 1];
      const c = field[(j + 1) * cols + i + 1];
      const d = field[(j + 1) * cols + i];
      const idx = ((a > level) << 3) | ((b > level) << 2) | ((c > level) << 1) | (d > level);
      const pairs = CASES[idx];
      if (!pairs) continue;
      const x0 = i * STEP, y0 = j * STEP, x1 = x0 + STEP, y1 = y0 + STEP;
      const at = (edge) => {
        switch (edge) {
          case 0: return [x0 + ((level - a) / (b - a)) * STEP, y0];
          case 1: return [x1, y0 + ((level - b) / (c - b)) * STEP];
          case 2: return [x0 + ((level - d) / (c - d)) * STEP, y1];
          default: return [x0, y0 + ((level - a) / (d - a)) * STEP];
        }
      };
      for (const [e1, e2] of pairs) segs.push([at(e1), at(e2)]);
    }
  }
  return stitch(segs);
}

// Join segments that share endpoints into long polylines.
function stitch(segs) {
  const key = (p) => `${p[0].toFixed(3)},${p[1].toFixed(3)}`;
  const ends = new Map();
  segs.forEach((s, n) => {
    for (const p of s) {
      const k = key(p);
      if (!ends.has(k)) ends.set(k, []);
      ends.get(k).push(n);
    }
  });
  const used = new Uint8Array(segs.length);
  const lines = [];
  const grow = (line, atEnd) => {
    for (;;) {
      const tip = atEnd ? line[line.length - 1] : line[0];
      const next = (ends.get(key(tip)) || []).find((n) => !used[n]);
      if (next === undefined) return;
      used[next] = 1;
      const [p, q] = segs[next];
      const far = key(p) === key(tip) ? q : p;
      atEnd ? line.push(far) : line.unshift(far);
    }
  };
  segs.forEach((s, n) => {
    if (used[n]) return;
    used[n] = 1;
    const line = [s[0], s[1]];
    grow(line, true);
    grow(line, false);
    lines.push(line);
  });
  return lines;
}

// ---- simplify + serialise --------------------------------------------------
function simplify(pts, eps) {
  if (pts.length < 3) return pts;
  const [ax, ay] = pts[0];
  const [bx, by] = pts[pts.length - 1];
  const dx = bx - ax, dy = by - ay;
  const len = Math.hypot(dx, dy) || 1;
  let worst = 0, at = 0;
  for (let i = 1; i < pts.length - 1; i++) {
    const d = Math.abs(dy * pts[i][0] - dx * pts[i][1] + bx * ay - by * ax) / len;
    if (d > worst) { worst = d; at = i; }
  }
  if (worst <= eps) return [pts[0], pts[pts.length - 1]];
  const left = simplify(pts.slice(0, at + 1), eps);
  return left.slice(0, -1).concat(simplify(pts.slice(at), eps));
}

// Smooth with quadratic curves through midpoints; relative integer coords
// (rounding is tracked so it never drifts).
function toPath(pts) {
  const r = Math.round;
  let cx = r(pts[0][0]), cy = r(pts[0][1]);
  let d = `M${cx} ${cy}`;
  if (pts.length === 2) return d + `l${r(pts[1][0]) - cx} ${r(pts[1][1]) - cy}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const qx = r(pts[i][0]), qy = r(pts[i][1]);
    const mx = r((pts[i][0] + pts[i + 1][0]) / 2), my = r((pts[i][1] + pts[i + 1][1]) / 2);
    d += `q${qx - cx} ${qy - cy} ${mx - cx} ${my - cy}`;
    cx = mx; cy = my;
  }
  const last = pts[pts.length - 1];
  return d + `l${r(last[0]) - cx} ${r(last[1]) - cy}`;
}

let thin = '';
let thick = '';
for (let n = 1; n <= LEVELS; n++) {
  const level = lo + ((hi - lo) * n) / (LEVELS + 1);
  const paths = contour(level)
    .map((line) => simplify(line, 1.1))
    .filter((line) => line.length > 3 || Math.hypot(line[0][0] - line.at(-1)[0], line[0][1] - line.at(-1)[1]) > 24)
    .map(toPath)
    .join('');
  if (n % INDEX_EVERY === 0) thick += paths;
  else thin += paths;
}

const out = `/* Generated by scripts/make-contours.mjs (seed ${SEED}). Don't edit by hand. */
window.Atlas = window.Atlas || {};
Atlas.contours = { width: ${W}, height: ${H}, thin: "${thin}", thick: "${thick}" };
`;
const target = join(dirname(fileURLToPath(import.meta.url)), '..', 'js', 'contours.js');
writeFileSync(target, out);
console.log(`wrote ${target} (${(out.length / 1024).toFixed(0)} KB, levels ${LEVELS}, seed ${SEED})`);
