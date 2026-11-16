Atlas.plate(String.raw`
# VI | gravitation | Gravitation and Orbits
: Newton's inverse-square law and what it does at the scale of moons, planets and satellites.

## Newton's law of gravitation

= Universal gravitation
$ |\vec F_g| = \frac{G m_1 m_2}{r^2}
- G: gravitational constant, $6.67\times10^{-11}$ [N·m²/kg²]
- m_1, m_2: the two masses [kg]
- r: center-to-center distance [m]
> Uniform spheres act like point masses at their centers (the shell theorem).
@ P1* CM*
? newton's law of gravity, inverse square law

= Gravitational field strength
$ |\vec g| = \frac{G M}{r^2}
- M: mass creating the field [kg]
- r: distance from its center [m]
> At a planet's surface, $g = GM/R^2$. For planets of equal density $M \propto R^3$, so $g \propto R$.
@ P1 CM
? surface gravity

= Gravity inside a uniform sphere
$ g(r) = \frac{G M r}{R^3} \quad (r < R)
- R: radius of the sphere [m]
> Only the mass inside radius $r$ pulls; the shell outside cancels itself. Leads to the classic tunnel-through-the-Earth oscillation, period about 84 minutes.
@ CM OLY
? shell theorem, tunnel through earth

= Gravity inside a thin shell
$ g = 0
> Anywhere inside a uniform spherical shell, the pulls from every direction cancel exactly.
@ CM OLY
? shell theorem

## Gravitational energy

= Gravitational potential energy
$ U_G = -\frac{G m_1 m_2}{r}
> Zero at infinite separation and negative everywhere else. Close to the surface, differences reduce to $mg\,\Delta h$.
@ P1* CM*

= Gravitational potential
$ V_g = -\frac{G M}{r}
- V_g: potential energy per unit mass [J/kg]
@ CM OLY

= Escape velocity
$ v_\text{esc} = \sqrt{\frac{2 G M}{R}}
- R: launch distance from the planet's center [m]
> From $\tfrac12 mv^2 - GMm/R = 0$. The same for any launched mass and any direction (ignoring the atmosphere).
@ P1 CM
? escape speed

## Orbits

= Circular orbital speed
$ v = \sqrt{\frac{G M}{r}}
- r: orbital radius [m]
> From $GMm/r^2 = mv^2/r$. At the same radius, $v_\text{esc} = \sqrt{2}\,v_\text{orbit}$.
@ P1 CM
? satellite speed

= Kepler's third law
$ T^2 = \frac{4\pi^2}{G M}\,a^3
- T: orbital period [s]
- a: semi-major axis; the radius, for a circle [m]
> Holds for ellipses too. When the two bodies have comparable mass, replace $M$ with $M + m$.
@ P1 CM
? orbital period, law of periods

= Energy of a circular orbit
$ E = K + U_G = -\frac{G M m}{2 r}, \qquad K = -\tfrac{1}{2} U_G
> A lower orbit has more negative total energy but more kinetic energy. To catch something ahead of you in orbit, you fire backwards and drop lower.
@ CM OLY
? total orbital energy

= Energy of an elliptical orbit
$ E = -\frac{G M m}{2a}
> Depends only on the semi-major axis, not on how stretched the ellipse is.
@ CM OLY

= Vis-viva equation
$ v^2 = G M\left(\frac{2}{r} - \frac{1}{a}\right)
- r: current distance from the central body [m]
- a: semi-major axis [m]
> Speed anywhere on an elliptical orbit. Becomes the circular-orbit speed when $r = a$.
@ OLY
? orbital speed ellipse

= Kepler's second law
$ \frac{dA}{dt} = \frac{L}{2m} = \text{constant}
- dA/dt: area swept out per unit time [m²/s]
> Equal areas in equal times is conservation of angular momentum in disguise.
@ CM OLY
? law of areas

= Speeds at perihelion and aphelion
$ r_p v_p = r_a v_a
- r_p, v_p: closest distance and speed there [m, m/s]
- r_a, v_a: farthest distance and speed there [m, m/s]
> Angular momentum at the two apsides, where velocity is perpendicular to the radius.
@ CM OLY
? apsides, periapsis, apoapsis

= Ellipse geometry
$ r_p = a(1 - e), \qquad r_a = a(1 + e), \qquad a = \tfrac{1}{2}\left(r_p + r_a\right)
- e: eccentricity, 0 for a circle [—]
@ OLY
`);
