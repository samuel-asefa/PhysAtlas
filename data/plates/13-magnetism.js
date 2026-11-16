Atlas.plate(String.raw`
# XIII | magnetism | Magnetic Fields and Forces
: Moving charges make magnetic fields, and magnetic fields push sideways on moving charges. Always sideways.

## Magnetic force

= Force on a moving charge
$ \vec F_B = q\,\vec v \times \vec B, \qquad |\vec F_B| = |q|\,v B\sin\theta
- q: charge [C]
- \vec v: velocity [m/s]
- \vec B: magnetic field [T]
- \theta: angle between $\vec v$ and $\vec B$
> Perpendicular to both $\vec v$ and $\vec B$, so it never does work. It bends paths but can't change speed.
! The right-hand rule gives the direction for a positive charge. Flip it for electrons.
@ P2* CE*
? magnetic force, right-hand rule

= Lorentz force
$ \vec F = q\left(\vec E + \vec v\times\vec B\right)
@ CE OLY

= Radius of circular motion in a field
$ r = \frac{m v}{|q| B}
> From $|q|vB = mv^2/r$. The basis of the mass spectrometer.
@ P2 CE
? mass spectrometer

= Cyclotron frequency
$ \omega = \frac{|q| B}{m}, \qquad f = \frac{|q| B}{2\pi m}
> Independent of speed: faster particles travel bigger circles in the same time.
@ CE OLY

= Velocity selector
$ v = \frac{E}{B}
> With crossed $\vec E$ and $\vec B$, only particles at exactly this speed pass straight through.
@ P2 CE
? crossed fields

= Force on a current-carrying wire
$ \vec F = I\,\vec\ell\times\vec B, \qquad |\vec F| = I\ell B\sin\theta
$ \vec F = \int I\,d\vec\ell\times\vec B
- I: current [A]
- \vec\ell: length of wire, pointing along the current [m]
@ P2* CE*

= Magnetic dipole moment
$ \vec\mu = N I \vec A
- N: number of turns [—]
- \vec A: loop area, normal by the right-hand rule [m²]
@ CE OLY

= Torque and energy of a current loop
$ \vec\tau = \vec\mu\times\vec B, \qquad U = -\vec\mu\cdot\vec B
> The physics of every electric motor.
@ CE OLY
? motor

= Hall voltage
$ \Delta V_H = \frac{I B}{n q t}
- n: carrier density [m⁻³]
- t: thickness of the strip along $\vec B$ [m]
> The sign of $\Delta V_H$ reveals the sign of the charge carriers.
@ CE OLY
? hall effect

## Sources of magnetic field

= Biot–Savart law
$ d\vec B = \frac{\mu_0}{4\pi}\,\frac{I\,d\vec\ell\times\hat r}{r^2}
- \mu_0: permeability of free space, $4\pi\times10^{-7}$ [T·m/A]
> The magnetic version of Coulomb's law for a little piece of current.
@ CE*

= Ampère's law
$ \oint\vec B\cdot d\vec\ell = \mu_0 I_\text{enc}
> Gauss's law's magnetic cousin: always true, only useful with symmetry. Long wires, solenoids and toroids.
@ CE* OLY
? amperian loop

= Long straight wire
$ B = \frac{\mu_0 I}{2\pi r}
- r: distance from the wire [m]
> The field circles the wire. Right thumb along the current; fingers curl the way $\vec B$ points.
@ P2* CE

= Center of a circular loop
$ B = \frac{\mu_0 I}{2R}
- R: loop radius [m]
@ P2 CE

= Circular loop, on its axis
$ B = \frac{\mu_0 I R^2}{2\left(R^2 + z^2\right)^{3/2}}
- z: distance from the center along the axis [m]
@ CE OLY

= Arc of current
$ B = \frac{\mu_0 I\,\phi}{4\pi R}
- \phi: angle subtended by the arc [rad]
> At the arc's center. A full loop ($\phi = 2\pi$) gives back $\mu_0 I/2R$.
@ CE OLY

= Finite straight segment
$ B = \frac{\mu_0 I}{4\pi d}\left(\sin\theta_1 + \sin\theta_2\right)
- d: perpendicular distance from the line of the wire [m]
- \theta_1, \theta_2: angles to each end, measured from the perpendicular
> Both ends at $90^\circ$ recovers the infinite wire.
@ OLY

= Ideal solenoid
$ B = \mu_0 n I
- n: turns per unit length [m⁻¹]
> Uniform inside, nearly zero outside, independent of the radius.
@ P2 CE*

= Toroid
$ B = \frac{\mu_0 N I}{2\pi r}
- N: total turns [—]
- r: distance from the center of the toroid [m]
@ CE OLY

= Force between parallel wires
$ \frac{F}{\ell} = \frac{\mu_0 I_1 I_2}{2\pi d}
- d: separation [m]
> Parallel currents attract and antiparallel currents repel, the opposite of what charges do.
@ P2 CE OLY

= Field of a moving point charge
$ \vec B = \frac{\mu_0}{4\pi}\,\frac{q\,\vec v\times\hat r}{r^2}
@ OLY
`);
