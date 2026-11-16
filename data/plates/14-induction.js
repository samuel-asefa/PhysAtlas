Atlas.plate(String.raw`
# XIV | induction | Electromagnetic Induction
: A changing magnetic flux makes an emf. Lenz's minus sign says nature pushes back against the change.

## Flux and Faraday's law

= Magnetic flux
$ \Phi_B = \vec B\cdot\vec A = BA\cos\theta, \qquad \Phi_B = \int\vec B\cdot d\vec A
- \Phi_B: magnetic flux [Wb = T·m²]
- \theta: angle between $\vec B$ and the loop's normal
@ P2* CE*

= Faraday's law
$ \varepsilon = -N\frac{d\Phi_B}{dt}
$ \varepsilon = -N\frac{\Delta\Phi_B}{\Delta t}
- \varepsilon: induced emf [V]
- N: number of turns [—]
> Flux can change three ways: the field changes, the area changes, or the angle changes.
> The minus sign is Lenz's law: the induced current makes a field that opposes the change in flux, not the flux itself.
@ P2* CE*
? lenz's law, induced emf

= Motional emf
$ \varepsilon = B\ell v
- \ell: length of the moving rod [m]
- v: speed, perpendicular to $\vec B$ [m/s]
> A rod sliding on rails. Keeping it at constant speed takes a force of $B^2\ell^2 v/R$.
@ P2* CE
? sliding rod, rails

= Rotating coil (generator)
$ \varepsilon(t) = N B A\,\omega\sin(\omega t)
- \omega: angular speed of the coil [rad/s]
@ CE OLY
? ac generator, alternator

= Induced electric field
$ \oint\vec E\cdot d\vec\ell = -\frac{d\Phi_B}{dt}
> Induced fields form closed loops, so they aren't conservative and "potential" stops meaning anything here.
@ CE* OLY

## Inductance

= Self-inductance
$ L = \frac{N\Phi_B}{I}, \qquad \varepsilon_L = -L\frac{dI}{dt}
- L: inductance [H]
> An inductor resists changes in current the way mass resists changes in velocity.
@ CE*

= Inductance of a solenoid
$ L = \frac{\mu_0 N^2 A}{\ell}
- A: cross-sectional area [m²]
- \ell: length [m]
@ CE OLY

= Energy stored in an inductor
$ U_L = \tfrac{1}{2} L I^2
@ CE*

= Energy density of a magnetic field
$ u_B = \frac{B^2}{2\mu_0}
- u_B: energy per volume [J/m³]
@ CE OLY

= Mutual inductance
$ \varepsilon_2 = -M\,\frac{dI_1}{dt}
- M: mutual inductance [H]
@ CE OLY

= Ideal transformer
$ \frac{V_s}{V_p} = \frac{N_s}{N_p} = \frac{I_p}{I_s}
- N_p, N_s: turns on the primary and secondary [—]
> Steps voltage up or down while (ideally) keeping power the same. AC only.
@ P2 OLY

## RL and LC circuits

= RL time constant
$ \tau = \frac{L}{R}
@ CE*

= Current growth in an RL circuit
$ I(t) = \frac{\varepsilon}{R}\left(1 - e^{-Rt/L}\right)
> At $t = 0$ an inductor acts like a broken wire; long afterwards, like a plain wire. Exactly the opposite of a capacitor.
@ CE

= Current decay in an RL circuit
$ I(t) = I_0\, e^{-Rt/L}
@ CE

= LC oscillations
$ \omega = \frac{1}{\sqrt{LC}}, \qquad q(t) = Q_0\cos(\omega t)
> The mass–spring analogy: $L \leftrightarrow m$, $1/C \leftrightarrow k$, $q \leftrightarrow x$, $I \leftrightarrow v$.
@ CE OLY
? lc circuit, resonant frequency

## Maxwell's equations

= Maxwell's equations
$ \oint\vec E\cdot d\vec A = \frac{Q_\text{enc}}{\varepsilon_0}, \qquad \oint\vec B\cdot d\vec A = 0
$ \oint\vec E\cdot d\vec\ell = -\frac{d\Phi_B}{dt}, \qquad \oint\vec B\cdot d\vec\ell = \mu_0 I_\text{enc} + \mu_0\varepsilon_0\frac{d\Phi_E}{dt}
> Gauss for $\vec E$; Gauss for $\vec B$ (no magnetic monopoles); Faraday; Ampère–Maxwell. Together they predict light.
@ CE OLY
? electromagnetism

= Displacement current
$ I_d = \varepsilon_0\,\frac{d\Phi_E}{dt}
> Rescues Ampère's law in the gap between the plates of a charging capacitor.
@ CE OLY
`);
