/*
 * PhysAtlas: application
 *
 * Renders the frontispiece, routes and plates; wires up search, the course
 * lens and the sheet filter; and runs a tiny hash router for the other
 * views (Gazetteer, Symbols, Constants, Field Kit).
 *
 * Routes:  #/                 the atlas
 *          #/plate/<id>[/<section>]
 *          #/e/<plate>/<entry>
 *          #/route/<course>   set the course lens, jump to the plates
 *          #/index  #/symbols  #/constants  #/kit
 */
(function () {
  'use strict';

  const A = window.Atlas;
  A.finalize();

  const ORDER = A.COURSE_ORDER;
  const COURSES = A.courses;
  const TOTAL = A.entries.length;
  const plateById = new Map(A.plates.map((p) => [p.id, p]));

  // ------------------------------------------------------------- helpers
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ESC[c]);
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const headH = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--head-h')) || 64;

  const store = {
    get(key, fallback) {
      try {
        const v = localStorage.getItem('physatlas:' + key);
        return v == null ? fallback : JSON.parse(v);
      } catch (_) {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem('physatlas:' + key, JSON.stringify(value));
      } catch (_) {
        /* private mode: settings just won't stick */
      }
    },
  };

  const GREEK_ORDER = ['alpha', 'beta', 'gamma', 'Gamma', 'delta', 'Delta', 'epsilon', 'varepsilon', 'zeta', 'eta', 'theta', 'Theta', 'kappa', 'lambda', 'Lambda', 'mu', 'nu', 'xi', 'pi', 'rho', 'sigma', 'Sigma', 'tau', 'phi', 'varphi', 'Phi', 'chi', 'psi', 'Psi', 'omega', 'Omega'];
  const GREEK = {
    alpha: 'α', beta: 'β', gamma: 'γ', Gamma: 'Γ', delta: 'δ', Delta: 'Δ', epsilon: 'ε', varepsilon: 'ε',
    zeta: 'ζ', eta: 'η', theta: 'θ', Theta: 'Θ', kappa: 'κ', lambda: 'λ', Lambda: 'Λ', mu: 'μ', nu: 'ν',
    xi: 'ξ', pi: 'π', rho: 'ρ', sigma: 'σ', Sigma: 'Σ', tau: 'τ', phi: 'φ', varphi: 'φ', Phi: 'Φ',
    chi: 'χ', psi: 'ψ', Psi: 'Ψ', omega: 'ω', Omega: 'Ω', hbar: 'ħ',
  };

  // Text -> " word word word " for word-start matching. TeX commands become
  // words (and Greek letters gain their symbol), so "omega" and "ω" both hit.
  function searchable(s) {
    const words = String(s)
      .replace(/\\([a-zA-Z]+)/g, (_, w) => ` ${w} ${GREEK[w] || ''} `)
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/([Ͱ-Ͽħ])/g, ' $1 ') // Greek letters and ħ stand alone
      .replace(/(\p{L})(\p{N})/gu, '$1 $2') // "v0" and "ε0" -> "v 0", "ε 0"
      .replace(/[^\p{L}\p{N}]+/gu, ' ')
      .trim();
    return ` ${words} `;
  }

  // -------------------------------------------------------------- icons
  const I = {
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.2s-6.6-6.1-6.6-11.3a6.6 6.6 0 0 1 13.2 0c0 5.2-6.6 11.3-6.6 11.3Z"/><circle cx="12" cy="9.9" r="2.4"/></svg>',
    copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8.5" y="8.5" width="11" height="11" rx="1.5"/><path d="M15.5 8.5V6a1.5 1.5 0 0 0-1.5-1.5H6A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h2.5"/></svg>',
    link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 14a4.2 4.2 0 0 0 6 0l3-3a4.2 4.2 0 0 0-6-6l-1 1"/><path d="M14 10a4.2 4.2 0 0 0-6 0l-3 3a4.2 4.2 0 0 0 6 6l1-1"/></svg>',
    print: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 9V3.5h10V9"/><rect x="3.5" y="9" width="17" height="8" rx="1.5"/><path d="M7 14h10v6.5H7z"/></svg>',
    trash: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 6.5h15M9.5 6.5V4h5v2.5M6.5 6.5l1 13.5h9l1-13.5"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    wander: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8z"/></svg>',
  };

  function compassRose() {
    let ticks = '';
    for (let a = 0; a < 360; a += 5) {
      const r2 = a % 45 === 0 ? 80 : a % 15 === 0 ? 83.5 : 85.5;
      const rad = (a * Math.PI) / 180;
      const s = Math.sin(rad);
      const c = -Math.cos(rad);
      ticks += `<line x1="${(88 * s).toFixed(1)}" y1="${(88 * c).toFixed(1)}" x2="${(r2 * s).toFixed(1)}" y2="${(r2 * c).toFixed(1)}"/>`;
    }
    const point = (angle, len, w) =>
      `<g transform="rotate(${angle})"><path class="cr-lt" d="M0 ${-len}L${w} ${-w}L0 0Z"/><path class="cr-dk" d="M0 ${-len}L${-w} ${-w}L0 0Z"/></g>`;
    const label = (t, x, y) => `<text x="${x}" y="${y}">${t}</text>`;
    return `<svg class="compass" viewBox="-112 -112 224 224" aria-hidden="true">
      <circle class="cr-ring" r="92"/><circle class="cr-ring cr-hair" r="88"/><circle class="cr-ring cr-hair" r="58"/>
      <g class="cr-ticks">${ticks}</g>
      ${[45, 135, 225, 315].map((a) => point(a, 50, 8)).join('')}
      ${[0, 90, 180, 270].map((a) => point(a, 78, 11)).join('')}
      <circle class="cr-hub" r="3.6"/>
      <g class="cr-labels">${label('N', 0, -100)}${label('E', 101, 0)}${label('S', 0, 101)}${label('W', -101, 0)}</g>
    </svg>`;
  }

  // -------------------------------------------------------------- state
  const state = {
    view: 'atlas',
    query: '',
    lens: COURSES[store.get('lens', 'all')] ? store.get('lens', 'all') : 'all',
    sheet: store.get('sheet', 'any'),
    density: store.get('density', 'detailed'),
    kit: new Set(store.get('kit', []).filter((id) => A.byId.has(id))),
  };

  const sheetApplies = () => state.lens === 'all' || COURSES[state.lens].sheet;
  const sheetActive = () => state.sheet !== 'any' && sheetApplies();
  const onSheet = (e) => (state.lens === 'all' ? e.sheet.length > 0 : e.sheet.includes(state.lens));

  // --------------------------------------------------------------- math
  const mathSpan = (tex) => `<span class="m" data-tex="${esc(tex)}">${esc(tex)}</span>`;

  // Escape prose and turn $...$ into inline math.
  function rich(text) {
    return String(text)
      .split(/(\$[^$]+\$)/g)
      .map((part) => (part.length > 2 && part[0] === '$' && part.at(-1) === '$' ? mathSpan(part.slice(1, -1)) : esc(part)))
      .join('');
  }

  const KATEX_OPTS = { throwOnError: false, strict: 'ignore' };

  // Split "A, \qquad B" into ["A", "B"], ignoring \qquad inside braces.
  function splitParts(tex) {
    const parts = [];
    let depth = 0;
    let last = 0;
    for (let i = 0; i < tex.length; i++) {
      const ch = tex[i];
      if (ch === '\\' && tex.startsWith('\\qquad', i) && depth === 0 && !/[a-zA-Z]/.test(tex[i + 6] || '')) {
        parts.push(tex.slice(last, i));
        last = i + 6;
        i += 5;
      } else if (ch === '\\') i++;
      else if (ch === '{') depth++;
      else if (ch === '}') depth--;
    }
    parts.push(tex.slice(last));
    return parts.map((p) => p.trim().replace(/,$/, '').trim()).filter(Boolean);
  }

  // Draw one element's math. Equations that could be stacked are flagged
  // for fit(), which runs after a whole batch so layout is measured once.
  function typeset(el) {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    if (!window.katex) {
      el.classList.add('tex-raw');
      return;
    }
    const display = el.classList.contains('eq');
    try {
      window.katex.render(el.dataset.tex, el, { ...KATEX_OPTS, displayMode: display });
      if (display) el.dataset.fit = 'check';
    } catch (err) {
      el.textContent = el.dataset.tex;
      el.classList.add('tex-raw');
    }
  }

  // Make display equations fit their card. First choice: stack the parts of
  // "A, \qquad B" as centred lines. Last resort: shrink, but never below
  // 70%. Reads and writes are grouped so a batch costs a couple of layouts.
  // Equations in hidden cards stay flagged until they're shown.
  function fit(els) {
    const shown = els.filter((el) => el.offsetParent);
    const wide = shown.filter((el) => el.scrollWidth > el.clientWidth + 1);
    wide.forEach((el) => {
      const parts = splitParts(el.dataset.tex);
      if (parts.length > 1) {
        window.katex.render(`\\begin{gathered}${parts.join(' \\\\[3pt] ')}\\end{gathered}`, el, { ...KATEX_OPTS, displayMode: true });
        el.dataset.stacked = '1';
      }
    });
    const ratios = wide.map((el) => el.scrollWidth / el.clientWidth);
    wide.forEach((el, i) => {
      if (ratios[i] > 1.005) el.style.fontSize = `${Math.max(0.7, 0.99 / ratios[i]).toFixed(3)}em`;
    });
    shown.forEach((el) => (el.dataset.fit = 'ok'));
  }
  const fitWithin = (root) => fit($$('.eq[data-fit="check"]', root));

  // Cards change width with the window or the density toggle: put every
  // equation back to its natural one-line form and fit again.
  let fitWidth = window.innerWidth;
  let fitTimer = 0;
  function refit(force) {
    clearTimeout(fitTimer);
    fitTimer = setTimeout(() => {
      if (!force && Math.abs(window.innerWidth - fitWidth) < 30) return;
      fitWidth = window.innerWidth;
      const els = $$('.eq[data-fit]');
      els.forEach((el) => {
        if (el.dataset.stacked) {
          window.katex.render(el.dataset.tex, el, { ...KATEX_OPTS, displayMode: true });
          delete el.dataset.stacked;
        }
        el.style.fontSize = '';
        el.dataset.fit = 'check';
      });
      fit(els);
    }, force ? 0 : 200);
  }
  const typesetWithin = (root) => {
    $$('[data-tex]:not([data-done])', root).forEach(typeset);
    fitWithin(root);
  };

  // Render math only as cards approach the viewport.
  const lazy =
    'IntersectionObserver' in window
      ? new IntersectionObserver(
          (items) =>
            items.forEach((it) => {
              if (!it.isIntersecting) return;
              typesetWithin(it.target);
              lazy.unobserve(it.target);
            }),
          { rootMargin: '800px 0px' }
        )
      : null;
  const typesetLater = (el) => (lazy ? lazy.observe(el) : typesetWithin(el));

  // Then quietly typeset everything else when the browser is idle, so fast
  // scrolling never catches a card before its math is ready.
  function typesetInBackground(entries, done) {
    const queue = entries.slice();
    const idle = window.requestIdleCallback || ((fn) => setTimeout(() => fn({ timeRemaining: () => 8 }), 60));
    const step = (deadline) => {
      const batch = [];
      while (queue.length && deadline.timeRemaining() > 3) {
        const e = queue.shift();
        $$('[data-tex]:not([data-done])', e._el).forEach(typeset);
        if (lazy) lazy.unobserve(e._el);
        batch.push(e._el);
      }
      fit(batch.flatMap((el) => $$('.eq[data-fit="check"]', el)));
      if (queue.length) idle(step);
      else if (done) done();
    };
    idle(step);
  }

  // ---------------------------------------------------------- fragments
  function chip(code, sheet) {
    const c = COURSES[code];
    const title = sheet ? `${c.name}: printed on the reference sheet` : c.name;
    return `<span class="chip" data-c="${code}" title="${esc(title)}"><i class="sw"></i>${esc(c.abbr)}${sheet ? '<i class="tri" aria-label="on sheet"></i>' : ''}</span>`;
  }

  const domId = (e) => 'e-' + e.id.replace('/', '--');

  function entryHTML(e) {
    const forms = e.forms
      .map((f, i) => `<div class="eq${i ? ' eq--alt' : ''}" data-tex="${esc(f)}">${esc(f)}</div>`)
      .join('');
    const legend = e.vars.length
      ? `<dl class="legend">${e.vars
          .map(
            (v) =>
              `<div class="legend__row"><dt>${mathSpan(v.sym)}</dt><dd>${rich(v.meaning)}</dd><dd class="unit">${esc(v.unit)}</dd></div>`
          )
          .join('')}</dl>`
      : '';
    const notes = e.notes.map((n) => `<p class="note">${rich(n)}</p>`).join('');
    const traps = e.traps.map((t) => `<p class="trap"><b>Trap</b>${rich(t)}</p>`).join('');
    const more = legend + notes + traps;
    const pinned = state.kit.has(e.id);
    return `<article class="entry" id="${domId(e)}" data-id="${e.id}">
      <header class="entry__head">
        <a class="entry__code" href="#/e/${e.id}" title="Permalink to ${e.code}">${e.code}</a>
        <h4 class="entry__name">${esc(e.name)}</h4>
        <button class="pin" type="button" data-act="pin" aria-pressed="${pinned}" title="${pinned ? 'Remove from' : 'Add to'} Field Kit" aria-label="Pin ${esc(e.name)} to Field Kit">${I.pin}</button>
      </header>
      <div class="entry__forms">${forms}</div>
      ${more ? `<div class="entry__more">${more}</div>` : ''}
      <footer class="entry__foot">
        <span class="chips">${e.courses.map((c) => chip(c, e.sheet.includes(c))).join('')}</span>
        <span class="entry__tools">
          <button type="button" data-act="copy" title="Copy LaTeX">${I.copy}<span>TeX</span></button>
          <button type="button" data-act="link" title="Copy link">${I.link}<span>Link</span></button>
        </span>
      </footer>
    </article>`;
  }

  // Every plate header shows a different window onto the same terrain.
  function topoBox(n) {
    const w = 760, h = 250;
    return `${(n * 389) % (1600 - w)} ${(n * 271) % (1200 - h)} ${w} ${h}`;
  }

  function plateHTML(p) {
    const courses = ORDER.filter((c) => p.entries.some((e) => e.courses.includes(c)));
    return `<section class="plate" id="plate-${p.id}" data-plate="${p.id}">
      <header class="plate__head">
        <svg class="topo" viewBox="${topoBox(p.order)}" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><use href="#contour-map"/></svg>
        <div class="plate__num" style="--len:${p.numeral.length}"><span>Plate</span><b>${p.numeral}</b></div>
        <div class="plate__intro">
          <h2 class="plate__title">${esc(p.title)}</h2>
          <p class="plate__blurb">${rich(p.blurb)}</p>
          <ol class="plate__toc">${p.sections
            .map((s) => `<li><a href="#/plate/${p.id}/${s.slug}">${esc(s.title)}</a></li>`)
            .join('')}</ol>
        </div>
        <div class="plate__meta">
          <span class="plate__count"><b data-count>${p.entries.length}</b> <span data-noun>entries</span></span>
          <span class="chips">${courses.map((c) => chip(c, false)).join('')}</span>
        </div>
      </header>
      ${p.sections
        .map(
          (s) => `<section class="sect" id="${s.id}">
          <h3 class="sect__title"><span>${esc(s.title)}</span><i></i><small data-count>${s.entries.length}</small></h3>
          ${s.blurb ? `<p class="sect__blurb">${rich(s.blurb)}</p>` : ''}
          <div class="entries">${s.entries.map(entryHTML).join('')}</div>
        </section>`
        )
        .join('')}
    </section>`;
  }

  // ------------------------------------------------------- frontispiece
  function renderFrontis() {
    const sheetCount = A.entries.filter((e) => e.sheet.length).length;
    const letters = 'ABCDEFGH'.split('').map((l) => `<span>${l}</span>`).join('');
    const nums = '1234'.split('').map((n) => `<span>${n}</span>`).join('');
    $('#frontis').innerHTML = `
      <div class="frame">
        <div class="frame__inner">
          <svg class="topo topo--hero" viewBox="180 260 1300 620" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><use href="#contour-map"/></svg>
          <div class="graticule" aria-hidden="true"><div class="graticule__x">${letters}</div><div class="graticule__y">${nums}</div></div>
          <div class="frontis__grid">
            <div class="frontis__title">
              <p class="kicker">A field atlas of physics equations</p>
              <h1 class="wordmark"><i>Phys</i>Atlas</h1>
              <p class="lede">Every equation from AP Physics 1, 2 and both C courses, the core of a first modern-physics course, and the extra tools that keep turning up on F=ma and USAPhO. Each comes with what its symbols mean, when it actually applies, and the mistake people usually make with it.</p>
              <dl class="stats">
                <div><dt>Entries</dt><dd>${TOTAL}</dd></div>
                <div><dt>Plates</dt><dd>${A.plates.length}</dd></div>
                <div><dt>On an AP sheet</dt><dd>${sheetCount}</dd></div>
              </dl>
              <div class="frontis__actions">
                <a class="btn" href="#/plate/${A.plates[0].id}">Open at Plate I</a>
                <button class="btn btn--ghost" type="button" data-act="wander">${I.wander}Wander somewhere</button>
              </div>
            </div>
            <aside class="legendbox" aria-label="How to read this atlas">
              <h2 class="legendbox__title"><span>Legend</span></h2>
              <ul class="legendbox__list">
                <li><span class="lg-key"><span class="entry__code">V·12</span></span><span><b>Reference.</b> Plate V, entry 12. Type one into the search to jump straight to it.</span></li>
                <li><span class="lg-key lg-swatches">${ORDER.map((c) => `<i class="sw" data-c="${c}"></i>`).join('')}</span><span><b>Routes.</b> Which courses use the entry. Each has its own colour and hatching, like regions on a map.</span></li>
                <li><span class="lg-key">${chip('P2', true)}</span><span><b>Survey mark.</b> The triangle means it is printed on that course's AP reference sheet. No triangle: plan on knowing it.</span></li>
                <li><span class="lg-key lg-note">Margin note</span><span><b>Notes</b> say when the equation applies. <span class="lg-trap">Trap</span> notes flag the classic mistake.</span></li>
                <li><span class="lg-key"><span class="pin pin--demo" aria-hidden="true">${I.pin}</span></span><span><b>Pin</b> entries to build a Field Kit: your own printable formula sheet.</span></li>
              </ul>
            </aside>
          </div>
          ${compassRose()}
        </div>
      </div>`;
  }

  function renderRoutes() {
    const stopLinks = (targets) => {
      const seen = new Set();
      return targets
        .map((t) => {
          const [pid, slug] = t.split(':');
          const p = plateById.get(pid);
          if (!p || seen.has(p.numeral)) return '';
          seen.add(p.numeral);
          const href = slug ? `#/plate/${pid}/${slug}` : `#/plate/${pid}`;
          const sect = slug ? p.sections.find((s) => s.slug === slug) : null;
          return `<a href="${href}" title="${esc(p.title + (sect ? ' · ' + sect.title : ''))}">${p.numeral}</a>`;
        })
        .filter(Boolean)
        .join('');
    };
    $('#routes').innerHTML = `
      <header class="routes__head">
        <div>
          <p class="kicker">Routes</p>
          <h2 class="routes__title">Six ways through the atlas</h2>
        </div>
        <p class="routes__lede">Each course takes its own path through the plates. Follow one and the atlas hides everything off that route; switch back to all courses from the sidebar whenever you like.</p>
      </header>
      <div class="routes__grid">
        ${ORDER.map((code) => {
          const c = COURSES[code];
          const count = A.entries.filter((e) => e.courses.includes(code)).length;
          const sheet = A.entries.filter((e) => e.sheet.includes(code)).length;
          return `<article class="route" data-c="${code}">
            <div class="route__band" aria-hidden="true"></div>
            <header class="route__head">
              <h3 class="route__name">${esc(c.name)}</h3>
              <p class="route__sub">${esc(c.sub)}</p>
            </header>
            <ol class="route__stops">
              ${c.stops
                .map(([n, title, targets]) => `<li><span class="route__unit">${esc(n)}</span><span class="route__stop">${esc(title)}</span><span class="route__plates">${stopLinks(targets)}</span></li>`)
                .join('')}
            </ol>
            <footer class="route__foot">
              <span class="route__stat"><b>${count}</b> entries${c.sheet ? ` · <b>${sheet}</b> on the sheet` : ''}</span>
              <a class="route__go" href="#/route/${code}">Follow route <span aria-hidden="true">→</span></a>
            </footer>
          </article>`;
        }).join('')}
      </div>`;
  }

  // ------------------------------------------------------------ sidebar
  function renderSidebar() {
    const count = (code) => A.entries.filter((e) => e.courses.includes(code)).length;
    $('#sidebar-inner').innerHTML = `
      <section class="side-block">
        <h2 class="side-h">Course lens</h2>
        <div class="lens" role="radiogroup" aria-label="Course lens">
          <button type="button" role="radio" data-lens="all" data-c="all"><i class="sw"></i><span>All courses</span><small>${TOTAL}</small></button>
          ${ORDER.map((code) => `<button type="button" role="radio" data-lens="${code}" data-c="${code}"><i class="sw"></i><span>${esc(COURSES[code].label)}</span><small>${count(code)}</small></button>`).join('')}
        </div>
      </section>
      <section class="side-block">
        <h2 class="side-h">AP reference sheet</h2>
        <div class="seg" id="sheet-seg" role="radiogroup" aria-label="Reference sheet filter">
          <button type="button" role="radio" data-sheet="any">Any</button>
          <button type="button" role="radio" data-sheet="on">On sheet</button>
          <button type="button" role="radio" data-sheet="off">Memorize</button>
        </div>
        <p class="side-hint" id="sheet-hint"></p>
      </section>
      <nav class="side-block" aria-label="Plates">
        <h2 class="side-h">Plates</h2>
        <ol class="toc">
          ${A.plates
            .map(
              (p) => `<li><a href="#/plate/${p.id}" data-toc="${p.id}"><span class="toc__num">${p.numeral}</span><span class="toc__title">${esc(p.title)}</span><span class="toc__count">${p.entries.length}</span></a></li>`
            )
            .join('')}
        </ol>
      </nav>`;
  }

  function syncControls() {
    $$('[data-lens]').forEach((b) => b.setAttribute('aria-checked', String(b.dataset.lens === state.lens)));
    $$('[data-sheet]').forEach((b) => b.setAttribute('aria-checked', String(b.dataset.sheet === state.sheet)));
    const seg = $('#sheet-seg');
    const ok = sheetApplies();
    seg.setAttribute('aria-disabled', String(!ok));
    $('#sheet-hint').textContent = ok
      ? state.sheet === 'off'
        ? 'Showing what the sheet leaves out: the ones to learn by heart.'
        : state.sheet === 'on'
        ? 'Showing only what the College Board prints for you.'
        : 'Triangles mark equations printed on the AP sheet.'
      : `${COURSES[state.lens].name} has no official sheet.`;
    $$('button[data-density]').forEach((b) => b.setAttribute('aria-checked', String(b.dataset.density === state.density)));
    document.body.dataset.density = state.density;
  }

  // ------------------------------------------------------------- search
  function index(e) {
    e._h = {
      name: searchable(e.name),
      keys: searchable(e.keys.join(' ')),
      vars: searchable(e.vars.map((v) => `${v.sym} ${v.meaning}`).join(' ')),
      tex: searchable(e.forms.join(' ')),
      text: searchable([...e.notes, ...e.traps, e.section.title, e.plate.title].join(' ')),
    };
  }

  const tokenize = (q) => searchable(q).trim().split(' ').filter(Boolean);

  // Every token must match somewhere (AND); where it matches sets the score.
  // Words match by prefix so results appear while typing, but one- and
  // two-letter tokens ("f", "ma", "ε") have to match whole words in the
  // equations and notes, or every "m" would match "mass" and "magnetic".
  function score(e, tokens) {
    let total = 0;
    for (const t of tokens) {
      const word = ' ' + t + ' ';
      const pre = ' ' + t;
      const head = t.length === 1 ? word : pre; // names and aliases
      const body = t.length <= 2 ? word : pre; // symbols, TeX, notes
      let s = 0;
      if (e._h.name.includes(head)) s += e._h.name.includes(word) ? 12 : 10;
      if (e._h.keys.includes(head)) s += e._h.keys.includes(word) ? 8 : 6;
      if (e._h.vars.includes(body)) s += 3;
      if (e._h.tex.includes(body)) s += 2;
      if (e._h.text.includes(body)) s += 1;
      if (!s) return 0;
      total += s;
    }
    return total;
  }

  // "V·12", "v.12", "xviii 3" -> an entry
  function codeLookup(q) {
    const m = q.trim().match(/^([ivxl]+)\s*[·.\-\s]\s*(\d+)$/i);
    if (!m) return null;
    const code = `${m[1].toUpperCase()}·${Number(m[2])}`;
    return A.entries.find((e) => e.code === code) || null;
  }

  function highlight(name, allTokens) {
    const tokens = allTokens.filter((t) => t.length > 1);
    if (!tokens.length) return esc(name);
    const re = new RegExp(`(^|[^\\p{L}\\p{N}])(${tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'giu');
    let out = '';
    let last = 0;
    for (const m of name.matchAll(re)) {
      const start = m.index + m[1].length;
      out += esc(name.slice(last, start)) + '<mark>' + esc(m[2]) + '</mark>';
      last = start + m[2].length;
    }
    return out + esc(name.slice(last));
  }

  // ------------------------------------------------------------- filter
  function apply() {
    const q = state.query.trim();
    const byCode = codeLookup(q);
    const tokens = byCode ? [] : tokenize(q);
    let shown = 0;
    const ranked = [];

    for (const e of A.entries) {
      let ok = state.lens === 'all' || e.courses.includes(state.lens);
      if (ok && sheetActive()) ok = state.sheet === 'on' ? onSheet(e) : !onSheet(e);
      if (ok && byCode) ok = e === byCode;
      else if (ok && tokens.length) {
        const s = score(e, tokens);
        ok = s > 0;
        if (ok) ranked.push([s, e]);
      }
      e._visible = ok;
      e._el.hidden = !ok;
      const hl = ok && tokens.length ? tokens.join(' ') : '';
      if (hl !== e._hl) {
        e._nameEl.innerHTML = highlight(e.name, ok ? tokens : []);
        e._hl = hl;
      }
      if (ok) shown++;
    }

    for (const p of A.plates) {
      let pc = 0;
      for (const s of p.sections) {
        const n = s.entries.reduce((k, e) => k + (e._visible ? 1 : 0), 0);
        s._el.hidden = n === 0;
        s._count.textContent = n;
        pc += n;
      }
      p._el.hidden = pc === 0;
      p._count.textContent = pc;
      p._noun.textContent = pc === 1 ? 'entry' : 'entries';
      p._toc.classList.toggle('is-empty', pc === 0);
      p._tocCount.textContent = pc;
    }

    // Plates keep their order while filtering, so the strongest few hits
    // also get a shortcut row. Enter jumps to the first of them.
    ranked.sort((a, b) => b[0] - a[0]);
    state.best = byCode ? [byCode] : ranked.slice(0, 6).map(([, e]) => e);
    const best = $('#best');
    best.hidden = !tokens.length || shown < 2;
    if (!best.hidden) {
      best.innerHTML =
        `<span class="best__label">Best matches</span>` +
        state.best.map((e) => `<a href="#/e/${e.id}"><span class="entry__code">${e.code}</span>${esc(e.name)}</a>`).join('');
    }

    $('#no-results').hidden = shown > 0;
    renderStatus(shown);
    spy();
    fitWithin($('#plates')); // cards that were hidden may need stacking now
  }

  function renderStatus(shown) {
    const pills = [];
    if (state.lens !== 'all') {
      pills.push(`<span class="pill" data-c="${state.lens}"><i class="sw"></i>${esc(COURSES[state.lens].name)}<button type="button" data-clear="lens" aria-label="Show all courses">${I.close}</button></span>`);
    }
    if (sheetActive()) {
      pills.push(`<span class="pill">${state.sheet === 'on' ? 'On the sheet' : 'Not on the sheet'}<button type="button" data-clear="sheet" aria-label="Clear sheet filter">${I.close}</button></span>`);
    }
    if (state.query.trim()) {
      pills.push(`<span class="pill pill--q">“${esc(state.query.trim())}”<button type="button" data-clear="query" aria-label="Clear search">${I.close}</button></span>`);
    }
    $('#status').innerHTML =
      (shown === TOTAL ? `All <b>${TOTAL}</b> entries` : `<b>${shown}</b> of ${TOTAL} entries`) +
      (pills.length ? `<span class="pills">${pills.join('')}</span>` : '');
  }

  function setLens(code) {
    state.lens = COURSES[code] ? code : 'all';
    store.set('lens', state.lens);
    syncControls();
    apply();
  }

  function setSheet(v) {
    state.sheet = v;
    store.set('sheet', v);
    syncControls();
    apply();
  }

  function setQuery(q, { reveal = true } = {}) {
    const was = state.query.trim();
    state.query = q;
    const input = $('#q');
    if (input.value !== q) input.value = q;
    if (state.view !== 'atlas') {
      history.replaceState(null, '', '#/');
      show('atlas');
    }
    apply();
    if (reveal && q.trim()) revealResults(!was);
  }

  function clearFilters() {
    state.lens = 'all';
    state.sheet = 'any';
    store.set('lens', 'all');
    store.set('sheet', 'any');
    state.query = '';
    $('#q').value = '';
    syncControls();
    apply();
  }

  // Keep the first result in view while typing.
  function revealResults(smooth) {
    const bar = $('#atlas-bar');
    const y = bar.getBoundingClientRect().top + window.scrollY - headH();
    const off = window.scrollY - y;
    if (off < -4 || off > 4) {
      window.scrollTo({ top: y, behavior: smooth && !reducedMotion() ? 'smooth' : 'auto' });
    }
  }

  // ----------------------------------------------------- scroll spy etc
  let spyQueued = false;
  function spy() {
    if (spyQueued) return;
    spyQueued = true;
    requestAnimationFrame(() => {
      spyQueued = false;
      if (state.view !== 'atlas') return;
      const line = headH() + 140;
      let current = null;
      for (const p of A.plates) {
        if (p._el.hidden) continue;
        if (p._el.getBoundingClientRect().top <= line) current = p;
        else break;
      }
      for (const p of A.plates) p._toc.classList.toggle('is-active', p === current);
    });
  }

  // A deep link opened cold has to survive the page settling underneath it:
  // fonts arrive and math gets drawn above the target, which moves it (and
  // Safari has no scroll anchoring). Until things settle, jump instantly and
  // re-pin the target afterwards, unless the reader has started scrolling.
  let settling = true;
  let anchor = null;
  const repin = () => anchor && anchor.el.scrollIntoView({ block: anchor.block });
  function settled() {
    repin();
    settling = false;
    anchor = null;
  }
  ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach((type) =>
    window.addEventListener(type, () => (anchor = null), { passive: true })
  );

  function scrollToEl(el, block = 'start') {
    if (settling) {
      el.scrollIntoView({ block });
      anchor = { el, block };
      return;
    }
    el.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block });
  }

  function ensureVisible(el, label) {
    if (!el || !el.closest('[hidden]')) return;
    clearFilters();
    toast(`Cleared filters to show ${label}`);
  }

  function scrollToPlate(id, slug) {
    const p = plateById.get(id);
    if (!p) return;
    const target = (slug && document.getElementById(`${id}--${slug}`)) || p._el;
    ensureVisible(target, `Plate ${p.numeral}`);
    scrollToEl(target);
    closeDrawer();
  }

  function focusEntry(id) {
    const e = A.byId.get(id);
    if (!e) return toast('That entry has moved or no longer exists.');
    ensureVisible(e._el, e.code);
    typesetWithin(e._el);
    scrollToEl(e._el, 'center');
    e._el.classList.remove('is-flash');
    void e._el.offsetWidth; // restart the animation
    e._el.classList.add('is-flash');
  }

  // --------------------------------------------------------------- kit
  function togglePin(id) {
    const e = A.byId.get(id);
    if (!e) return;
    const on = !state.kit.has(id);
    if (on) state.kit.add(id);
    else state.kit.delete(id);
    store.set('kit', [...state.kit]);
    const pin = e._el && $('.pin', e._el);
    if (pin) {
      pin.setAttribute('aria-pressed', String(on));
      pin.title = `${on ? 'Remove from' : 'Add to'} Field Kit`;
    }
    updateKitBadge();
    if (state.view === 'kit') renderKit();
    toast(on ? `Pinned ${e.code} to your Field Kit` : `Removed ${e.code} from your Field Kit`);
  }

  function updateKitBadge() {
    $$('[data-kit-count]').forEach((b) => {
      b.textContent = state.kit.size;
      b.hidden = state.kit.size === 0;
    });
  }

  function renderKit() {
    const pinned = A.entries.filter((e) => state.kit.has(e.id));
    const body = $('#kit-body');
    $('#kit-count').textContent = pinned.length ? `${pinned.length} pinned ${pinned.length === 1 ? 'entry' : 'entries'}` : 'Nothing pinned yet';
    $$('[data-kit-action]').forEach((b) => (b.disabled = !pinned.length));
    if (!pinned.length) {
      body.innerHTML = `<div class="empty empty--kit">
        <p class="empty__title">Your kit is empty.</p>
        <p>Pin entries with the ${I.pin} button on any card and they collect here, in plate order, ready to print as a sheet that's actually yours.</p>
        <a class="btn btn--ghost" href="#/">Back to the atlas</a>
      </div>`;
      return;
    }
    const groups = A.plates
      .map((p) => ({ p, list: pinned.filter((e) => e.plate === p) }))
      .filter((g) => g.list.length);
    body.innerHTML = groups
      .map(
        ({ p, list }) => `<section class="kit-plate">
          <h3 class="kit-plate__title"><span>${p.numeral}</span>${esc(p.title)}</h3>
          <div class="kit-grid">${list
            .map(
              (e) => `<article class="kit-card">
                <header>
                  <a class="entry__code" href="#/e/${e.id}">${e.code}</a>
                  <h4>${esc(e.name)}</h4>
                  <button type="button" class="kit-card__x" data-unpin="${e.id}" aria-label="Remove ${esc(e.name)}" title="Remove">${I.close}</button>
                </header>
                ${e.forms.map((f, i) => `<div class="eq${i ? ' eq--alt' : ''}" data-tex="${esc(f)}">${esc(f)}</div>`).join('')}
              </article>`
            )
            .join('')}</div>
        </section>`
      )
      .join('');
    typesetWithin(body);
  }

  // --------------------------------------------------------- gazetteer
  let gazetteerBuilt = false;
  function buildGazetteer() {
    if (gazetteerBuilt) return;
    gazetteerBuilt = true;
    const items = new Map();
    const add = (label, e, alias) => {
      const k = label.toLowerCase();
      if (!items.has(k)) items.set(k, { label, alias, entries: [] });
      const item = items.get(k);
      if (!alias) {
        item.alias = false;
        item.label = label;
      }
      if (!item.entries.includes(e)) item.entries.push(e);
    };
    A.entries.forEach((e) => {
      add(e.name, e, false);
      e.keys.forEach((k) => add(cap(k), e, true));
    });
    const sortKey = (s) =>
      s.normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/^(the|a|an)\s+/i, '').replace(/[^a-z0-9 ]/gi, '').toLowerCase();
    const sorted = [...items.values()].sort((a, b) => sortKey(a.label).localeCompare(sortKey(b.label)));
    const groups = new Map();
    sorted.forEach((it) => {
      const ch = sortKey(it.label).charAt(0).toUpperCase();
      const letter = /[A-Z]/.test(ch) ? ch : '#';
      if (!groups.has(letter)) groups.set(letter, []);
      groups.get(letter).push(it);
    });
    const letters = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    $('#gz-letters').innerHTML = letters
      .map((l) => (groups.has(l) ? `<a href="#gz-${l}" data-letter="${l}">${l}</a>` : `<span class="is-off">${l}</span>`))
      .join('');
    $('#gz-body').innerHTML = [...groups.entries()]
      .map(
        ([letter, list]) => `<section class="gz-group" id="gz-${letter}" data-letter="${letter}">
          <h2 class="gz-letter">${letter}</h2>
          ${list
            .map(
              (it) => `<div class="gz-item${it.alias ? ' is-alias' : ''}" data-s="${esc(searchable(it.label + ' ' + it.entries.map((e) => e.name).join(' ')))}">
                <a class="gz-label" href="#/e/${it.entries[0].id}" title="${esc(it.entries.map((e) => `${e.code} ${e.name}`).join(' · '))}">${esc(it.label)}</a>
                <span class="gz-lead" aria-hidden="true"></span>
                <span class="gz-codes">${it.entries.map((e) => `<a href="#/e/${e.id}" title="${esc(e.name)}">${e.code}</a>`).join(', ')}</span>
              </div>`
            )
            .join('')}
        </section>`
      )
      .join('');
    $('#gz-count').textContent = `${sorted.length} headings`;
  }

  function filterList(input, itemSel, groupSel) {
    const tokens = tokenize(input.value);
    const view = input.closest('[data-view-panel]');
    $$(itemSel, view).forEach((el) => {
      el.hidden = tokens.length > 0 && !tokens.every((t) => el.dataset.s.includes(' ' + t));
    });
    $$(groupSel, view).forEach((g) => {
      g.hidden = !$$(itemSel, g).some((el) => !el.hidden);
    });
  }

  // ----------------------------------------------------------- symbols
  let symbolsBuilt = false;
  function buildSymbols() {
    if (symbolsBuilt) return;
    symbolsBuilt = true;
    const map = new Map();
    A.entries.forEach((e) =>
      e.vars.forEach((v) => {
        const key = v.sym.replace(/\s+/g, ' ').trim();
        if (!map.has(key)) map.set(key, { sym: v.sym, meanings: new Map(), units: new Map(), entries: [] });
        const rec = map.get(key);
        const m = v.meaning.replace(/\$[^$]*\$/g, '').split(/[,;(]/)[0].trim();
        if (m) rec.meanings.set(m, (rec.meanings.get(m) || 0) + 1);
        if (v.unit && v.unit !== '—') rec.units.set(v.unit, (rec.units.get(v.unit) || 0) + 1);
        if (!rec.entries.includes(e)) rec.entries.push(e);
      })
    );

    const strip = (s) => s.replace(/\\(vec|bar|hat|overline|Delta|sum|mathcal|left|right|big)\b/g, '').replace(/[{}\s|]/g, '');
    const classify = (rec) => {
      const s = strip(rec.sym);
      const g = s.match(/^\\([a-zA-Z]+)/);
      if (g && GREEK_ORDER.includes(g[1])) return { group: 'Greek', key: String(GREEK_ORDER.indexOf(g[1])).padStart(2, '0') + s };
      if (/^[a-zA-Z]/.test(s)) return { group: 'Latin', key: s[0].toLowerCase() + (s[0] === s[0].toLowerCase() ? '0' : '1') + s };
      return { group: 'Other', key: s };
    };
    const byCount = (m) => [...m.entries()].sort((a, b) => b[1] - a[1]).map(([k]) => k);

    // "constant acceleration", "instantaneous acceleration" and
    // "acceleration as a function of time" are all votes for acceleration,
    // so rank meanings by their most popular content word, then by count,
    // then by brevity.
    const STOP = new Set(['the', 'of', 'a', 'an', 'and', 'or', 'from', 'at', 'in', 'on', 'to', 'its', 'one', 'each', 'per', 'for', 'with', 'by', 'that', 'is']);
    const contentWords = (m) => m.toLowerCase().split(/[^a-z]+/).filter((w) => w.length > 2 && !STOP.has(w));
    function rankMeanings(meanings) {
      const freq = new Map();
      meanings.forEach((count, m) => new Set(contentWords(m)).forEach((w) => freq.set(w, (freq.get(w) || 0) + count)));
      const strength = (m) => Math.max(0, ...contentWords(m).map((w) => freq.get(w) || 0));
      return [...meanings.entries()]
        .sort((a, b) => strength(b[0]) - strength(a[0]) || b[1] - a[1] || a[0].length - b[0].length)
        .map(([m]) => m);
    }
    const groups = { Latin: [], Greek: [], Other: [] };
    map.forEach((rec) => {
      const c = classify(rec);
      groups[c.group].push({ ...rec, sortKey: c.key });
    });

    const titles = { Latin: 'Latin letters', Greek: 'Greek letters', Other: 'Everything else' };
    let total = 0;
    $('#sym-body').innerHTML = Object.entries(groups)
      .filter(([, list]) => list.length)
      .map(([g, list]) => {
        list.sort((a, b) => a.sortKey.localeCompare(b.sortKey));
        total += list.length;
        return `<section class="sym-group">
          <h2 class="sym-group__title"><span>${titles[g]}</span><small>${list.length}</small></h2>
          <div class="sym-rows">${list
            .map((rec) => {
              const meanings = rankMeanings(rec.meanings);
              const units = byCount(rec.units);
              const shownEntries = rec.entries.slice(0, 8);
              return `<div class="sym-row" data-s="${esc(searchable(rec.sym + ' ' + meanings.join(' ') + ' ' + rec.entries.map((e) => e.name).join(' ')))}">
                <div class="sym-row__sym">${mathSpan(rec.sym)}</div>
                <div class="sym-row__what">
                  <p class="sym-row__main">${rich(cap(meanings[0] || '—'))}</p>
                  ${meanings.length > 1 ? `<p class="sym-row__also">also ${meanings.slice(1, 4).map((m) => rich(m)).join('; ')}</p>` : ''}
                </div>
                <div class="sym-row__unit">${esc(units[0] || '')}</div>
                <div class="sym-row__where">${shownEntries.map((e) => `<a href="#/e/${e.id}" title="${esc(e.name)}">${e.code}</a>`).join('')}${rec.entries.length > 8 ? `<span>+${rec.entries.length - 8}</span>` : ''}</div>
              </div>`;
            })
            .join('')}</div>
        </section>`;
      })
      .join('');
    $('#sym-count').textContent = `${total} symbols`;
    typesetWithin($('#sym-body'));
  }

  // --------------------------------------------------------- constants
  let constantsBuilt = false;
  const sciTeX = (v) => {
    const m = String(v).match(/^(-?[\d.]+)e(-?\d+)$/i);
    return m ? `${m[1]} \\times 10^{${m[2]}}` : /^-?[\d.]+$/.test(v) ? String(v) : null;
  };
  function buildConstants() {
    if (constantsBuilt) return;
    constantsBuilt = true;
    const tables = A.constants
      .map(
        (g) => `<section class="ctab">
          <h2 class="ctab__title">${esc(g.title)}</h2>
          <table>
            <thead><tr><th>Quantity</th><th>Symbol</th><th>Value</th><th>Unit</th><th>Exam value</th></tr></thead>
            <tbody>${g.rows
              .map(([name, sym, value, unit, exam, note]) => {
                const examTeX = sciTeX(exam);
                return `<tr>
                  <td class="ctab__name">${esc(name)}${note ? `<span class="ctab__note">${esc(note)}</span>` : ''}</td>
                  <td class="ctab__sym">${mathSpan(sym)}</td>
                  <td class="ctab__val"><button type="button" data-copy="${esc(value)}" title="Copy ${esc(value)}">${mathSpan(sciTeX(value) || value)}</button></td>
                  <td class="ctab__unit">${esc(unit)}</td>
                  <td class="ctab__exam">${examTeX ? mathSpan(examTeX) : esc(exam)}</td>
                </tr>`;
              })
              .join('')}</tbody>
          </table>
        </section>`
      )
      .join('');
    const prefixes = `<section class="ctab ctab--half">
        <h2 class="ctab__title">SI prefixes</h2>
        <table><thead><tr><th>Prefix</th><th>Symbol</th><th>Factor</th></tr></thead>
        <tbody>${A.prefixes.map(([n, s, p]) => `<tr><td>${n}</td><td class="ctab__mono">${s}</td><td>${mathSpan(`10^{${p}}`)}</td></tr>`).join('')}</tbody></table>
      </section>`;
    const units = `<section class="ctab ctab--half">
        <h2 class="ctab__title">Derived units</h2>
        <table><thead><tr><th>Unit</th><th>Symbol</th><th>In base units</th><th>Also</th></tr></thead>
        <tbody>${A.units.map(([n, s, b, also]) => `<tr><td>${n}</td><td class="ctab__mono">${s}</td><td class="ctab__mono">${b}</td><td class="ctab__mono">${also}</td></tr>`).join('')}</tbody></table>
      </section>`;
    $('#const-body').innerHTML = tables + `<div class="ctab-pair">${prefixes}${units}</div>`;
    typesetWithin($('#const-body'));
  }

  // ------------------------------------------------------------ router
  function show(view) {
    state.view = view;
    document.body.dataset.view = view;
    $$('[data-view-panel]').forEach((p) => (p.hidden = p.dataset.viewPanel !== view));
    $$('[data-view-link]').forEach((a) => {
      if (a.dataset.viewLink === view) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    if (view === 'index') buildGazetteer();
    if (view === 'symbols') buildSymbols();
    if (view === 'constants') buildConstants();
    if (view === 'kit') renderKit();
    document.body.classList.remove('menu-open');
    const titles = { atlas: '', index: 'Gazetteer · ', symbols: 'Symbols · ', constants: 'Constants · ', kit: 'Field Kit · ' };
    document.title = `${titles[view] || ''}PhysAtlas: an atlas of physics equations`;
  }

  function route() {
    const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
    const [head = '', ...rest] = parts;
    switch (head) {
      case 'plate':
        show('atlas');
        requestAnimationFrame(() => scrollToPlate(rest[0], rest[1]));
        break;
      case 'e':
        show('atlas');
        requestAnimationFrame(() => focusEntry(rest.join('/')));
        break;
      case 'route':
        show('atlas');
        setLens(rest[0]);
        state.query = '';
        $('#q').value = '';
        apply();
        requestAnimationFrame(() => scrollToEl($('#atlas-bar')));
        toast(COURSES[rest[0]] ? `Following ${COURSES[rest[0]].name}` : 'Showing all courses');
        break;
      case 'index':
      case 'symbols':
      case 'constants':
      case 'kit':
        show(head);
        window.scrollTo(0, 0);
        break;
      default:
        if (head && head.startsWith('gz-')) return; // in-page letter jumps
        show('atlas');
        if (routed) window.scrollTo(0, 0);
    }
    routed = true;
  }
  let routed = false;

  function go(hash) {
    if (location.hash === hash) route();
    else location.hash = hash;
  }

  // ------------------------------------------------------------- misc UI
  let toastTimer = 0;
  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-on'), 2200);
  }

  async function copy(text, done) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (_) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    toast(done);
  }

  const permalink = (e) => `${location.href.split('#')[0]}#/e/${e.id}`;

  function openDrawer() {
    document.body.classList.add('drawer-open');
  }
  function closeDrawer() {
    document.body.classList.remove('drawer-open');
  }

  function currentTheme() {
    return document.documentElement.dataset.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  function syncTheme() {
    const dark = currentTheme() === 'dark';
    $('#edition').textContent = dark ? 'Celestial edition' : 'Terrestrial edition';
    $('#theme-btn').setAttribute('aria-label', dark ? 'Switch to the light, terrestrial edition' : 'Switch to the dark, celestial edition');
    $('#theme-btn').title = dark ? 'Terrestrial edition (light)' : 'Celestial edition (dark)';
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.content = dark ? '#0c121c' : '#f2ecdf';
  }

  function wander() {
    const pool = A.entries.filter((e) => e._visible);
    const list = pool.length ? pool : A.entries;
    const e = list[Math.floor(Math.random() * list.length)];
    go(`#/e/${e.id}`);
  }

  // ------------------------------------------------------------- events
  function bind() {
    const input = $('#q');
    input.addEventListener('input', () => setQuery(input.value));
    input.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape') {
        setQuery('', { reveal: false });
        input.blur();
      } else if (ev.key === 'Enter') {
        const first = (state.best && state.best[0]) || A.entries.find((e) => e._visible);
        if (first && state.query.trim()) {
          input.blur();
          focusEntry(first.id);
        }
      }
    });

    document.addEventListener('keydown', (ev) => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
      if ((ev.key === '/' && !typing) || (ev.key.toLowerCase() === 'k' && (ev.metaKey || ev.ctrlKey))) {
        ev.preventDefault();
        input.focus();
        input.select();
      } else if (ev.key === 'Escape') {
        closeDrawer();
        document.body.classList.remove('menu-open');
      }
    });

    document.addEventListener('click', (ev) => {
      const t = ev.target;

      // Gazetteer letter jumps scroll in place without touching the router.
      const letter = t.closest('a[href^="#gz-"]');
      if (letter) {
        ev.preventDefault();
        const group = document.getElementById(letter.getAttribute('href').slice(1));
        if (group) scrollToEl(group);
        return;
      }

      // In-app links go through the router, even when the hash is unchanged.
      const link = t.closest('a[href^="#/"]');
      if (link && !ev.metaKey && !ev.ctrlKey && !ev.shiftKey) {
        ev.preventDefault();
        closeDrawer();
        go(link.getAttribute('href'));
        return;
      }

      // Scoped to buttons: <body> itself carries data-density.
      const lensBtn = t.closest('button[data-lens]');
      if (lensBtn) {
        setLens(lensBtn.dataset.lens);
        if (window.innerWidth <= 960) closeDrawer();
        return;
      }
      const sheetBtn = t.closest('button[data-sheet]');
      if (sheetBtn) return setSheet(sheetBtn.dataset.sheet);
      const densityBtn = t.closest('button[data-density]');
      if (densityBtn) {
        state.density = densityBtn.dataset.density;
        store.set('density', state.density);
        syncControls();
        return refit(true);
      }
      const clearBtn = t.closest('[data-clear]');
      if (clearBtn) {
        const what = clearBtn.dataset.clear;
        if (what === 'lens') setLens('all');
        else if (what === 'sheet') setSheet('any');
        else if (what === 'query') setQuery('', { reveal: false });
        else if (what === 'all') clearFilters();
        return;
      }

      const act = t.closest('[data-act]');
      if (act) {
        const card = act.closest('.entry');
        const e = card && A.byId.get(card.dataset.id);
        switch (act.dataset.act) {
          case 'pin':
            return e && togglePin(e.id);
          case 'copy':
            return e && copy(e.forms.join('\n'), `Copied LaTeX for ${e.code}`);
          case 'link':
            return e && copy(permalink(e), `Copied link to ${e.code}`);
          case 'wander':
            return wander();
          case 'theme': {
            const next = currentTheme() === 'dark' ? 'light' : 'dark';
            document.documentElement.dataset.theme = next;
            store.set('theme', next);
            return syncTheme();
          }
          case 'menu':
            return document.body.classList.toggle('menu-open');
          case 'drawer':
            return openDrawer();
          case 'close-drawer':
            return closeDrawer();
          case 'print':
            return window.print();
          case 'kit-copy': {
            const text = A.entries
              .filter((x) => state.kit.has(x.id))
              .map((x) => `% ${x.code} ${x.name}\n${x.forms.join('\n')}`)
              .join('\n\n');
            return copy(text, 'Copied your kit as LaTeX');
          }
          case 'kit-clear':
            if (window.confirm('Remove every entry from your Field Kit?')) {
              state.kit.clear();
              store.set('kit', []);
              $$('.entry .pin').forEach((p) => p.setAttribute('aria-pressed', 'false'));
              updateKitBadge();
              renderKit();
            }
            return;
        }
      }

      const unpin = t.closest('[data-unpin]');
      if (unpin) return togglePin(unpin.dataset.unpin);

      const val = t.closest('[data-copy]');
      if (val) return copy(val.dataset.copy, `Copied ${val.dataset.copy}`);

      if (document.body.classList.contains('menu-open') && !t.closest('.masthead')) {
        document.body.classList.remove('menu-open');
      }
    });

    $('#gz-filter').addEventListener('input', (ev) => filterList(ev.target, '.gz-item', '.gz-group'));
    $('#sym-filter').addEventListener('input', (ev) => filterList(ev.target, '.sym-row', '.sym-group'));

    window.addEventListener('hashchange', route);
    window.addEventListener('scroll', spy, { passive: true });
    window.addEventListener('resize', spy, { passive: true });
    window.addEventListener('resize', refit, { passive: true });
    window.addEventListener('beforeprint', () => {
      const panel = $(`[data-view-panel="${state.view}"]`);
      if (panel) typesetWithin(panel);
    });
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', syncTheme);
  }

  // --------------------------------------------------------------- boot
  function mountContours() {
    const c = A.contours;
    if (!c) return;
    document.body.insertAdjacentHTML(
      'afterbegin',
      `<svg class="defs" width="0" height="0" aria-hidden="true" focusable="false"><defs><g id="contour-map"><path class="ct-thin" d="${c.thin}"/><path class="ct-thick" d="${c.thick}"/></g></defs></svg>`
    );
  }

  function boot() {
    // The router decides where the page sits, not the browser's memory.
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    mountContours();
    renderFrontis();
    renderRoutes();
    renderSidebar();

    const plates = $('#plates');
    plates.innerHTML =
      A.plates.map(plateHTML).join('') +
      `<div class="empty" id="no-results" hidden>
        <p class="empty__title">Nothing on the map matches.</p>
        <p>Try a broader word, a symbol name such as “omega”, or a reference like “V·12”.</p>
        <button class="btn btn--ghost" type="button" data-clear="all">Clear search and filters</button>
      </div>`;

    for (const p of A.plates) {
      p._el = document.getElementById(`plate-${p.id}`);
      p._count = $('.plate__count [data-count]', p._el);
      p._noun = $('.plate__count [data-noun]', p._el);
      p._toc = $(`[data-toc="${p.id}"]`);
      p._tocCount = $('.toc__count', p._toc);
      for (const s of p.sections) {
        s._el = document.getElementById(s.id);
        s._count = $('.sect__title [data-count]', s._el);
      }
    }
    for (const e of A.entries) {
      e._el = document.getElementById(domId(e));
      e._nameEl = $('.entry__name', e._el);
      e._hl = '';
      index(e);
      typesetLater(e._el);
    }

    $('#scale').innerHTML = scaleBar();
    syncControls();
    syncTheme();
    updateKitBadge();
    bind();
    apply();
    route();
    document.body.classList.add('is-ready');

    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
    const mathReady = new Promise((resolve) => (window.katex ? typesetInBackground(A.entries, resolve) : resolve()));
    fontsReady.then(repin);
    Promise.race([Promise.all([fontsReady, mathReady]), new Promise((r) => setTimeout(r, 6000))]).then(settled);
  }

  // A map needs a scale bar. One segment = 100 equations.
  function scaleBar() {
    const n = Math.ceil(TOTAL / 100);
    const segs = Array.from({ length: n }, () => '<i></i>').join('');
    const labels = Array.from({ length: n + 1 }, (_, i) => `<span style="left:${(i / n) * 100}%">${i * 100}</span>`).join('');
    return `<div class="scalebar__bar">${segs}</div><div class="scalebar__labels">${labels}</div><p class="scalebar__cap">Scale: one segment, one hundred equations. This edition charts ${TOTAL}.</p>`;
  }

  boot();
})();
