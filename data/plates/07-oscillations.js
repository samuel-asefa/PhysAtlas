Atlas.plate(String.raw`
# VII | oscillations | Oscillations
: Nudge anything away from a stable equilibrium and it wiggles. Learn the mass on a spring properly and you get the pendulum, the LC circuit and the vibrating molecule for free.

## Simple harmonic motion

= Defining equation of SHM
$ \frac{d^2x}{dt^2} = -\omega^2 x
- \omega: angular frequency [rad/s]
> If you can massage an equation of motion into this shape, whatever multiplies $x$ is $\omega^2$. That's the whole method.
@ CM OLY
? differential equation, restoring force

= Position in SHM
$ x(t) = A\cos(\omega t + \varphi)
$ x = A\cos(2\pi f t)
- A: amplitude [m]
- \omega: angular frequency [rad/s]
- \varphi: phase constant [rad]
- f: frequency [Hz]
> Starting from rest at maximum displacement means $\varphi = 0$. Starting at equilibrium with a push, use sine instead.
@ P1* CM*
? harmonic motion, sinusoid

= Velocity and acceleration in SHM
$ v(t) = -A\omega\sin(\omega t + \varphi), \qquad a(t) = -A\omega^2\cos(\omega t + \varphi)
> $v_\text{max} = A\omega$ when passing through equilibrium; $a_\text{max} = A\omega^2$ at the turning points.
@ P1 CM
? maximum speed, maximum acceleration

= Speed at a given position
$ v = \omega\sqrt{A^2 - x^2}
- x: displacement from equilibrium [m]
> Straight from energy conservation. No clock required.
@ P1 CM OLY

= Period, frequency and angular frequency
$ T = \frac{1}{f} = \frac{2\pi}{\omega}
- T: period [s]
- f: frequency [Hz]
- \omega: angular frequency [rad/s]
@ P1* CM*

## Oscillating systems

= Mass on a spring
$ T_s = 2\pi\sqrt{\frac{m}{k}}, \qquad \omega = \sqrt{\frac{k}{m}}
- m: oscillating mass [kg]
- k: spring constant [N/m]
> Independent of amplitude and of gravity. Hang the spring vertically and the period is the same; only the equilibrium point moves.
@ P1* CM*
? spring period

= Vertical spring equilibrium
$ \Delta y_0 = \frac{m g}{k}
- \Delta y_0: stretch at the new equilibrium [m]
> Measure displacement from this new equilibrium and gravity disappears from the problem.
@ P1 CM

= Simple pendulum
$ T_p = 2\pi\sqrt{\frac{\ell}{g}}
- \ell: length to the bob's center [m]
> Small angles only, roughly under 15°. Independent of mass and amplitude.
@ P1* CM*
? pendulum period

= Physical pendulum
$ T = 2\pi\sqrt{\frac{I}{m g d}}
- I: moment of inertia about the pivot [kg·m²]
- d: distance from pivot to center of mass [m]
> A simple pendulum is the special case $I = m\ell^2$, $d = \ell$.
@ CM* OLY
? compound pendulum

= Torsion pendulum
$ T = 2\pi\sqrt{\frac{I}{\kappa}}
- \kappa: torsion constant of the wire [N·m/rad]
@ CM OLY

= Large-amplitude pendulum
$ T \approx 2\pi\sqrt{\frac{\ell}{g}}\left(1 + \frac{\theta_0^2}{16}\right)
- \theta_0: amplitude in radians
> First correction to the small-angle period. Even at $30^\circ$ it's only about 1.7% longer.
@ OLY

## Energy in SHM

= Total energy of an oscillator
$ E = \tfrac{1}{2} k A^2 = \tfrac{1}{2} m v_\text{max}^2
> All potential at the turning points, all kinetic at equilibrium.
@ P1 CM

= Energy at any point
$ \tfrac{1}{2} m v^2 + \tfrac{1}{2} k x^2 = \tfrac{1}{2} k A^2
@ P1 CM

## Beyond the ideal spring

= Small oscillations about any minimum
$ \omega = \sqrt{\frac{U''(x_0)}{m}}
- U''(x_0): second derivative of potential energy at the minimum [N/m]
> Taylor-expand around the minimum: $U \approx U_0 + \tfrac12 U''(x_0)(x - x_0)^2$, so $k_\text{eff} = U''(x_0)$. With an awkward coordinate, $\omega^2 = k_\text{eff}/m_\text{eff}$.
@ CM OLY
? effective spring constant, taylor expansion

= Damped oscillator
$ x(t) = A e^{-bt/2m}\cos(\omega_d t + \varphi)
$ \omega_d = \sqrt{\omega_0^2 - \left(\frac{b}{2m}\right)^2}
- b: damping constant [kg/s]
- \omega_0: undamped angular frequency [rad/s]
- \omega_d: damped angular frequency [rad/s]
> Light damping. Amplitude decays exponentially; energy decays twice as fast.
@ CM OLY
? damping

= Quality factor
$ Q = \frac{\omega_0 m}{b} \approx 2\pi\,\frac{E_\text{stored}}{E_\text{lost per cycle}}
- Q: quality factor [—]
> High $Q$: a sharp resonance and many swings before the motion dies out.
@ OLY

= Driven oscillator amplitude
$ A(\omega) = \frac{F_0/m}{\sqrt{\left(\omega_0^2 - \omega^2\right)^2 + \left(b\omega/m\right)^2}}
- F_0: amplitude of the driving force [N]
- \omega: driving frequency [rad/s]
> Peaks near $\omega = \omega_0$. That peak is resonance.
@ OLY
? resonance, forced oscillation
`);
