Atlas.plate(String.raw`
# X | electrostatics | Electric Charge, Field and Potential
: Charges at rest. Coulomb's law is gravity with a sign; Gauss's law is the shortcut whenever the symmetry is good enough.

## Charge and Coulomb's law

= Coulomb's law
$ |\vec F_E| = \frac{1}{4\pi\varepsilon_0}\frac{|q_1 q_2|}{r^2} = k\frac{|q_1 q_2|}{r^2}
- k: Coulomb constant, $8.99\times10^{9}$ [N·m²/C²]
- \varepsilon_0: permittivity of free space [C²/(N·m²)]
- q_1, q_2: the two charges [C]
- r: separation [m]
> Like charges repel, unlike attract. Use magnitudes for the size and a diagram for the direction.
@ P2* CE*
? electric force, electrostatic force

= Charge quantization
$ q = n e
- e: elementary charge, $1.60\times10^{-19}$ [C]
- n: an integer [—]
@ P2 CE

= Superposition
$ \vec F_\text{net} = \sum_i \vec F_i, \qquad \vec E_\text{net} = \sum_i \vec E_i
> Add forces and fields as vectors, never as plain numbers. Look for symmetry that cancels components before you compute anything.
@ P2 CE

## Electric field

= Electric field
$ \vec E = \frac{\vec F_E}{q}
- \vec E: electric field [N/C = V/m]
- q: small positive test charge [C]
@ P2* CE*

= Field of a point charge
$ |\vec E| = \frac{1}{4\pi\varepsilon_0}\frac{|q|}{r^2}
> Points away from positive charges and toward negative ones.
@ P2* CE*

= Field of a continuous charge distribution
$ \vec E = \frac{1}{4\pi\varepsilon_0}\int \frac{dq}{r^2}\,\hat r
> Write $dq = \lambda\,dx$, $\sigma\,dA$ or $\rho\,dV$. Let symmetry kill components before you integrate.
@ CE*

= Charge densities
$ \lambda = \frac{Q}{L}, \qquad \sigma = \frac{Q}{A}, \qquad \rho = \frac{Q}{V}
- \lambda: linear charge density [C/m]
- \sigma: surface charge density [C/m²]
- \rho: volume charge density [C/m³]
@ CE

= Infinite line of charge
$ E = \frac{\lambda}{2\pi\varepsilon_0 r}
- r: perpendicular distance from the line [m]
@ CE OLY

= Infinite sheet of charge
$ E = \frac{\sigma}{2\varepsilon_0}
> Doesn't depend on distance. Two opposite sheets (a capacitor) give $\sigma/\varepsilon_0$ between them and zero outside.
@ P2 CE OLY
? infinite plane

= Ring of charge, on its axis
$ E = \frac{1}{4\pi\varepsilon_0}\frac{Q z}{\left(z^2 + R^2\right)^{3/2}}
- z: distance along the axis from the ring's center [m]
- R: ring radius [m]
> Zero at the center, like a point charge far away.
@ CE OLY

= Uniformly charged solid sphere
$ E = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}\;(r \ge R), \qquad E = \frac{1}{4\pi\varepsilon_0}\frac{Q r}{R^3}\;(r < R)
> Inside, only the enclosed charge counts, and it grows like $r^3$.
@ CE OLY
? insulating sphere

= Electric dipole moment
$ \vec p = q\,\vec d
- \vec d: displacement from $-q$ to $+q$ [m]
@ CE OLY

= Torque and energy of a dipole
$ \vec\tau = \vec p \times \vec E, \qquad U = -\vec p\cdot\vec E
> Lowest energy when the dipole lines up with the field.
@ CE OLY

= Field of a dipole, far away
$ E_\text{axis} \approx \frac{1}{4\pi\varepsilon_0}\frac{2p}{r^3}, \qquad E_\perp \approx \frac{1}{4\pi\varepsilon_0}\frac{p}{r^3}
> Falls off as $1/r^3$, one power faster than a single charge.
@ CE OLY

## Gauss's law

= Electric flux
$ \Phi_E = \int \vec E\cdot d\vec A, \qquad \Phi_E = EA\cos\theta \;\text{(uniform field)}
- \Phi_E: electric flux [N·m²/C]
- \theta: angle between the field and the surface's normal
@ P2 CE*

= Gauss's law
$ \oint \vec E\cdot d\vec A = \frac{Q_\text{enc}}{\varepsilon_0}
- Q_\text{enc}: charge inside the closed surface [C]
> Always true, but only useful with spherical, cylindrical or planar symmetry. Choose a surface on which $E$ is constant and either parallel or perpendicular to it.
@ CE* OLY
? gaussian surface

## Electric potential and energy

= Electric potential energy of two charges
$ U_E = \frac{1}{4\pi\varepsilon_0}\frac{q_1 q_2}{r}
> Keep the signs. Negative $U$ means the pair is bound together.
@ P2* CE*

= Potential of a point charge
$ V = \frac{1}{4\pi\varepsilon_0}\frac{q}{r}
- V: electric potential [V]
> A scalar. Add potentials from several charges with no components to worry about.
@ P2* CE*

= Potential of many charges
$ V = \frac{1}{4\pi\varepsilon_0}\sum_i \frac{q_i}{r_i}, \qquad V = \frac{1}{4\pi\varepsilon_0}\int\frac{dq}{r}
@ P2 CE*

= Potential difference and energy
$ \Delta U_E = q\,\Delta V
> A positive charge loses potential energy moving toward lower potential. A negative charge does the opposite.
@ P2* CE*

= Potential from field
$ \Delta V = -\int_a^b \vec E\cdot d\vec r
@ CE*

= Field from potential
$ E_x = -\frac{dV}{dx}, \qquad |\vec E| = \left|\frac{\Delta V}{\Delta r}\right|
> The field points from high to low potential and crosses equipotentials at right angles.
@ P2* CE*
? gradient, equipotential

= Potential difference in a uniform field
$ |\Delta V| = E d
- d: distance along the field [m]
@ P2 CE

= Energy of a system of charges
$ U = \frac{1}{4\pi\varepsilon_0}\sum_{i<j}\frac{q_i q_j}{r_{ij}}
> One term per pair: three charges, three terms; four charges, six.
@ P2 CE OLY
? assembly energy

= Electron-volt
$ 1\ \text{eV} = 1.602\times10^{-19}\ \text{J}
> The energy one elementary charge gains crossing one volt.
@ P2 CE MOD

= Self-energy of a charged sphere
$ U_\text{shell} = \frac{Q^2}{8\pi\varepsilon_0 R}, \qquad U_\text{solid} = \frac{3 Q^2}{20\pi\varepsilon_0 R}
- R: sphere radius [m]
> Energy needed to assemble the charge from infinity.
@ OLY

= Method of images
$ F = \frac{1}{4\pi\varepsilon_0}\frac{q^2}{(2d)^2}
- d: distance from the charge to a grounded conducting plane [m]
> The plane acts like an image charge $-q$ a distance $d$ behind it. Works for the field above the plane too.
@ OLY
? image charge, grounded plane
`);
