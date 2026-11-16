Atlas.plate(String.raw`
# XVIII | olympiad | Olympiad Toolkit
: Results you could derive from scratch but would rather have ready on F=ma and USAPhO. None of them appear on an AP exam; all of them save minutes.

## Two bodies and central forces

= Reduced mass
$ \mu = \frac{m_1 m_2}{m_1 + m_2}
- \mu: reduced mass [kg]
> Turns a two-body problem into one body of mass $\mu$ moving around a fixed center. Always smaller than either mass.
@ OLY
? two-body problem

= Effective potential
$ U_\text{eff}(r) = U(r) + \frac{L^2}{2 m r^2}
- L: angular momentum [kg·m²/s]
> Radial motion under a central force acts one-dimensional in this potential. Circular orbits sit at its minimum; turning points are where $E = U_\text{eff}$.
@ OLY
? centrifugal barrier

= Virial theorem
$ 2\langle K\rangle = n\langle U\rangle \quad\text{for } U \propto r^n
> Gravity ($n = -1$): $\langle K\rangle = -\tfrac12\langle U\rangle$. Spring ($n = 2$): $\langle K\rangle = \langle U\rangle$.
@ OLY

## Friction, ropes and launches

= Capstan equation
$ T_\text{load} = T_\text{hold}\, e^{\mu\theta}
- \theta: total angle the rope wraps around the post [rad]
- \mu: coefficient of friction [—]
> Why two or three turns of rope around a bollard let one person hold a ship.
@ OLY
? rope around a cylinder, belt friction

= Best angle to drag a block
$ F_\text{min} = \frac{\mu m g}{\sqrt{1 + \mu^2}}, \qquad \tan\theta_\text{opt} = \mu
- \theta_\text{opt}: optimal pulling angle above horizontal
> Pulling slightly upward reduces the normal force and therefore friction. The optimum is $\arctan\mu$, not zero.
@ OLY
? minimum force

= Maximum range up an incline
$ R_\text{max} = \frac{v_0^2}{g\left(1 + \sin\alpha\right)}
- \alpha: incline angle
- R_\text{max}: distance measured along the incline [m]
> The best launch direction bisects the angle between the incline and the vertical.
@ OLY
? projectile on incline

## Centers of mass of common shapes
: Measured along the axis of symmetry: from the center for curved shapes, from the base for the cone and triangle.

= Semicircular wire
$ \bar y = \frac{2R}{\pi}
@ OLY
? semicircular arc, center of mass

= Semicircular disk
$ \bar y = \frac{4R}{3\pi}
@ OLY
? half disk, center of mass

= Solid hemisphere
$ \bar y = \frac{3R}{8}
@ OLY
? center of mass

= Hemispherical shell
$ \bar y = \frac{R}{2}
@ OLY
? center of mass

= Solid cone
$ \bar y = \frac{h}{4}
- h: height of the cone [m]
> Measured up from the base.
@ OLY
? center of mass

= Triangle
$ \bar y = \frac{h}{3}
> Measured up from the base. The centroid is where the medians cross: the average of the three vertices.
@ OLY
? centroid, center of mass

## Mechanics shortcuts

= Instantaneous center of rotation
$ \vec v_P = \vec\omega\times\vec r_{P/\text{IC}}
- \vec r_{P/\text{IC}}: position of point P relative to the instantaneous center [m]
> Every point of a rolling or tumbling rigid body moves as if rotating about one point at that instant. For rolling, it's the contact point.
@ OLY
? instantaneous axis

= Kinetic energy about the contact point
$ K = \tfrac{1}{2} I_P\,\omega^2, \qquad I_P = I_\text{cm} + MR^2
> One term instead of two for anything rolling without slipping.
@ OLY

= Lagrangian mechanics
$ \mathcal{L} = T - U, \qquad \frac{d}{dt}\frac{\partial\mathcal{L}}{\partial\dot q} = \frac{\partial\mathcal{L}}{\partial q}
- T: kinetic energy [J]
- U: potential energy [J]
- q: any coordinate that describes the system
> Never required, sometimes much faster. Write $T$ and $U$ in one convenient coordinate and turn the crank: no constraint forces needed.
@ OLY
? euler-lagrange equation

= Dimensional analysis
$ [F] = \mathsf{M\,L\,T^{-2}}, \qquad [E] = \mathsf{M\,L^{2}\,T^{-2}}, \qquad [P] = \mathsf{M\,L^{-1}\,T^{-2}}
> Match the powers of mass, length and time to guess a formula up to a constant. The pendulum's $T \propto \sqrt{\ell/g}$ falls straight out.
@ OLY P1 CM
? units, scaling, buckingham pi

## Circuit shortcuts

= Thévenin equivalent
$ V_\text{th} = V_\text{open}, \qquad R_\text{th} = \frac{V_\text{open}}{I_\text{short}}
- V_\text{open}: voltage across the terminals with nothing connected [V]
- I_\text{short}: current if the terminals are shorted together [A]
> Any linear network, seen from two terminals, is just one battery and one resistor.
@ OLY
? thevenin

= Maximum power transfer
$ R_\text{load} = r \;\Rightarrow\; P_\text{max} = \frac{\varepsilon^2}{4r}
- r: internal (or Thévenin) resistance [Ω]
> At that point the efficiency is only 50%, so power grids deliberately don't do this.
@ OLY
? impedance matching
`);
