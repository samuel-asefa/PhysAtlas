# PhysAtlas

An atlas of physics equations: every formula from AP Physics 1, AP Physics 2,
AP Physics C: Mechanics and AP Physics C: E&M, the core of a first modern-physics
course, and the extra results that keep coming up on the F=ma exam and USAPhO.

There are 397 entries on 19 plates. Each one has the equation (typeset with KaTeX),
what every symbol means and its unit, a short note on when it applies, and, where
there is one, the classic mistake.

## What's in it

- **Plates I–XIX**, organised by topic: kinematics through modern physics, plus an
  olympiad toolkit and a math toolkit. Every entry gets a reference like `V·13`.
- **Course lens.** Show only what AP 1, AP 2, C: Mechanics, C: E&M, Modern or
  Olympiad uses. The routes section maps each course's official units to plates.
- **Reference-sheet filter.** A small triangle on a course chip means the equation is
  printed on that course's AP reference sheet. The *Memorize* filter shows
  everything the sheet leaves out.
- **Search** across names, aliases, symbols (type `omega` or `ω`), notes, and
  reference codes. Press `/` or `⌘K` to jump to it; `Enter` opens the best match.
- **Gazetteer:** an A–Z index of every entry and alias.
- **Symbols:** every symbol used in the atlas, what it usually means, its unit, and
  where it appears. Generated from the entries, so it stays in sync.
- **Constants & units:** accepted values beside the rounded exam values, click to copy.
- **Field Kit:** pin entries to build your own formula sheet, then print it or copy
  it as LaTeX. Saved in your browser.
- Two editions: *Terrestrial* (light) and *Celestial* (dark). It follows your
  system setting until you pick one.

## Running it

It's a static site with no build step and no dependencies to install.

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 4173
```

then visit <http://localhost:4173>. Fonts (Google Fonts) and KaTeX load from CDNs,
so the first visit needs a connection.

To publish on GitHub Pages: Settings → Pages → deploy from the `main` branch, root
folder. Nothing else is required.

## Layout

```
index.html              page shell
css/atlas.css           all screen styles (tokens, layout, components)
css/print.css           print styles for the atlas and the Field Kit
js/core.js              namespace + the plate-file parser
js/app.js               rendering, search, filters, router, views
js/contours.js          generated contour map (see below)
data/courses.js         the six courses and their unit → plate routes
data/constants.js       constants, SI prefixes, derived units
data/plates/NN-*.js     one file per plate
scripts/make-contours.mjs  draws the topographic background
assets/favicon.svg
```

## Adding or fixing an equation

Plates are written in a small line-based format inside `String.raw`, so TeX
backslashes never need escaping. Each line starts with a marker:

```
# V | rotation | Rotation            plate: numeral | id | title
: Rigid bodies spinning...           blurb for the plate or section above
## Torque and statics                section
= Torque                             entry name
$ \tau = r F \sin\theta              equation (repeat the line for more forms)
- \tau: torque [N·m]                 symbol: meaning [unit]
> Same torque, two pictures...       margin note (consecutive lines join)
! The classic mistake.               trap
@ P1* CM* OLY                        courses; * = printed on that AP sheet
? lever arm, moment                  aliases for search and the gazetteer
% a comment                          ignored
```

Course codes are `P1`, `P2`, `CM`, `CE`, `MOD` and `OLY`. Inline math in notes
and meanings goes between `$…$`.

Reference numbers (`V·13`) are assigned by position, so inserting an entry
renumbers the ones after it on that plate. Links and pinned kits use the entry's
id (`rotation/parallel-axis-theorem`, built from its name), so those survive.

A quick way to check your edit parsed: open the browser console. The parser warns
about unknown markers, unknown course codes, or entries with no equation.

If two equations share one line, separate them with `\qquad`. When the card is too
narrow, the site stacks them onto separate lines instead of making you scroll.

## The contour lines

The topographic background is generated, not hand-drawn:

```bash
node scripts/make-contours.mjs        # default seed 1687, the year of the Principia
node scripts/make-contours.mjs 42     # a different landscape
```

It samples seeded Perlin noise, traces contours with marching squares, stitches
and simplifies them, and writes `js/contours.js`. Every plate header shows a
different window onto the same terrain.

## A note on accuracy

The reference-sheet triangles follow the 2024–25 AP reference tables as closely as
I could read them, and the course units follow the 2024–25 course frameworks. If
the atlas and a College Board document disagree, the College Board wins, and a
correction is very welcome.
