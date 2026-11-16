/*
 * PhysAtlas: core
 *
 * Holds the global namespace and the parser for plate files.
 *
 * Plates live in data/plates/*.js and are written in a small line-based
 * format, so adding an equation means typing, not wrangling JSON:
 *
 *   # V | rotation | Rotation       plate:    numeral | id | title
 *   : One-line description.         blurb for the plate or section above it
 *   ## Torque and statics           section
 *   = Torque                        entry name
 *   $ \tau = r F \sin\theta         a form of the equation (repeatable)
 *   - \tau: torque [N·m]            variable  ->  symbol: meaning [unit]
 *   > When it applies.              margin note (consecutive lines join)
 *   ! The classic mistake.          trap
 *   @ P1* CM* OLY                   courses; * = printed on that AP sheet
 *   ? lever arm, moment             extra search terms / gazetteer aliases
 *   % anything                      comment, ignored
 *
 * Inline math in notes and meanings goes between $...$.
 * Course codes: P1, P2, CM (C: Mechanics), CE (C: E&M), MOD, OLY.
 */
(function () {
  'use strict';

  const Atlas = (window.Atlas = window.Atlas || {});
  Atlas.plates = [];
  Atlas.entries = [];
  Atlas.byId = new Map();
  Atlas.COURSE_ORDER = ['P1', 'P2', 'CM', 'CE', 'MOD', 'OLY'];

  const ROMAN = { I: 1, V: 5, X: 10, L: 50, C: 100 };

  function romanToInt(s) {
    let total = 0;
    for (let i = 0; i < s.length; i++) {
      const v = ROMAN[s[i]];
      const next = ROMAN[s[i + 1]] || 0;
      total += v < next ? -v : v;
    }
    return total;
  }

  function slugify(s) {
    return s
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/['’]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  Atlas.slugify = slugify;

  // "\vec v_0: initial velocity [m/s]"  ->  { sym, meaning, unit }
  function parseVar(raw) {
    const cut = raw.indexOf(': ');
    if (cut < 0) return { sym: raw.trim(), meaning: '', unit: '' };
    const sym = raw.slice(0, cut).trim();
    let meaning = raw.slice(cut + 2).trim();
    let unit = '';
    const m = meaning.match(/\[([^\]]*)\]\s*$/);
    if (m) {
      unit = m[1].trim();
      meaning = meaning.slice(0, m.index).trim();
    }
    return { sym, meaning, unit };
  }

  Atlas.plate = function (source) {
    let plate = null;
    let section = null;
    let entry = null;
    let last = '';

    const warn = (n, msg) =>
      console.warn(`[PhysAtlas] ${plate ? plate.id : '(no plate)'} line ${n}: ${msg}`);

    source.split(/\r?\n/).forEach((rawLine, i) => {
      const line = rawLine.trim();
      if (!line || line.startsWith('%')) {
        last = '';
        return;
      }
      const sp = line.indexOf(' ');
      const tag = sp < 0 ? line : line.slice(0, sp);
      const body = sp < 0 ? '' : line.slice(sp + 1).trim();

      if (tag !== '#' && !plate) return warn(i + 1, 'content before the plate header');
      if ('$->!@?'.includes(tag) && !entry) return warn(i + 1, `"${tag}" outside an entry`);

      switch (tag) {
        case '#': {
          const [numeral, id, title] = body.split('|').map((s) => s.trim());
          plate = { numeral, id, title, order: romanToInt(numeral), blurb: '', sections: [], entries: [] };
          section = entry = null;
          break;
        }
        case ':': {
          const target = section || plate;
          target.blurb = target.blurb ? target.blurb + ' ' + body : body;
          break;
        }
        case '##':
          section = { title: body, slug: slugify(body), blurb: '', entries: [], plate };
          plate.sections.push(section);
          entry = null;
          break;
        case '=':
          if (!section) {
            section = { title: plate.title, slug: 'main', blurb: '', entries: [], plate };
            plate.sections.push(section);
          }
          entry = { name: body, forms: [], vars: [], notes: [], traps: [], courses: [], sheet: [], keys: [], plate, section };
          section.entries.push(entry);
          break;
        case '$':
          entry.forms.push(body);
          break;
        case '-':
          entry.vars.push(parseVar(body));
          break;
        case '>':
          if (last === '>') entry.notes[entry.notes.length - 1] += ' ' + body;
          else entry.notes.push(body);
          break;
        case '!':
          if (last === '!') entry.traps[entry.traps.length - 1] += ' ' + body;
          else entry.traps.push(body);
          break;
        case '@':
          body.split(/\s+/).forEach((tok) => {
            const code = tok.replace('*', '');
            if (!Atlas.COURSE_ORDER.includes(code)) return warn(i + 1, `unknown course "${tok}"`);
            if (!entry.courses.includes(code)) entry.courses.push(code);
            if (tok.endsWith('*') && !entry.sheet.includes(code)) entry.sheet.push(code);
          });
          break;
        case '?':
          entry.keys.push(...body.split(',').map((s) => s.trim()).filter(Boolean));
          break;
        default:
          warn(i + 1, `unrecognised line "${line}"`);
      }
      last = tag;
    });

    if (plate) Atlas.plates.push(plate);
  };

  // Runs once, after every plate file has loaded: orders plates, numbers
  // entries (V·1, V·2 …) and gives each a stable id for links and the kit.
  Atlas.finalize = function () {
    if (Atlas._finalized) return;
    Atlas._finalized = true;
    const order = Atlas.COURSE_ORDER;
    Atlas.plates.sort((a, b) => a.order - b.order);
    Atlas.plates.forEach((plate) => {
      let n = 0;
      const used = new Set();
      plate.sections.forEach((section) => {
        section.id = `${plate.id}--${section.slug}`;
        section.entries.forEach((entry) => {
          n += 1;
          entry.n = n;
          entry.code = `${plate.numeral}·${n}`;
          const base = slugify(entry.name);
          let slug = base;
          for (let k = 2; used.has(slug); k++) slug = `${base}-${k}`;
          used.add(slug);
          entry.id = `${plate.id}/${slug}`;
          entry.courses.sort((a, b) => order.indexOf(a) - order.indexOf(b));
          if (!entry.courses.length) console.warn(`[PhysAtlas] ${entry.code} "${entry.name}" has no courses`);
          if (!entry.forms.length) console.warn(`[PhysAtlas] ${entry.code} "${entry.name}" has no equation`);
          plate.entries.push(entry);
          Atlas.entries.push(entry);
          Atlas.byId.set(entry.id, entry);
        });
      });
    });
  };
})();
