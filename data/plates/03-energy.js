Atlas.plate(String.raw`
# III | energy | Work, Energy and Power
: Energy bookkeeping. When a problem asks about speeds and positions but never about time, this is usually the short way through.

## Work

= Work by a constant force
$ W = F_\parallel d = F d \cos\theta
- W: work done by the force [J]
- F: magnitude of the force [N]
- d: magnitude of the displacement [m]
- \theta: angle between the force and the displacement
> Only the component along the motion does work. A normal force on a level floor, or tension in uniform circular motion, does none.
@ P1* CM
? dot product

= Work by a variable force
$ W = \int_a^b \vec F \cdot d\vec r
> In one dimension, the area under a force–position graph.
@ P1 CM*
? integral, area under force graph

= Work–energy theorem
$ W_\text{net} = \Delta K
- W_\text{net}: total work by all forces [J]
- \Delta K: change in kinetic energy [J]
> Holds for every force, conservative or not.
@ P1 CM

= Kinetic energy
$ K = \tfrac{1}{2} m v^2 = \frac{p^2}{2m}
- K: kinetic energy [J]
- m: mass [kg]
- v: speed [m/s]
- p: momentum [kg·m/s]
> The $p^2/2m$ form is handy right after a collision, when you know momentum but not speed.
@ P1* CM*

## Potential energy

= Gravitational potential energy near Earth
$ \Delta U_g = m g \Delta y
- \Delta y: change in height [m]
> Only differences matter. Put $y = 0$ wherever makes the algebra easiest.
@ P1* CM*
? mgh

= Elastic potential energy
$ U_s = \tfrac{1}{2} k\,(\Delta x)^2
- k: spring constant [N/m]
- \Delta x: stretch or compression from natural length [m]
@ P1* CM*
? spring potential energy

= Force from potential energy
$ F_x = -\frac{dU}{dx}
- U: potential energy as a function of position [J]
> Force points downhill on a $U(x)$ graph. Where the slope is zero, the object is in equilibrium.
@ CM* OLY
? conservative force, gradient, potential energy curve

= Potential energy from force
$ \Delta U = -\int_a^b \vec F_\text{c} \cdot d\vec r
- \vec F_\text{c}: a conservative force [N]
> Defined only for conservative forces: gravity, springs, electric forces. Friction has no potential energy.
@ CM*

= Stability of equilibrium
$ \left.\frac{dU}{dx}\right|_{x_0} = 0, \qquad \left.\frac{d^2U}{dx^2}\right|_{x_0} > 0 \;\text{(stable)}
- x_0: equilibrium position [m]
> Stable at minima of $U(x)$, unstable at maxima. The curvature at a minimum also sets how fast small oscillations go (see Oscillations).
@ CM OLY
? equilibrium, potential well

## Conservation

= Conservation of mechanical energy
$ K_i + U_i = K_f + U_f
> Valid when only conservative forces do work. Pick two moments, write out both energies, set them equal.
@ P1 CM
? energy conservation

= Energy with non-conservative work
$ K_i + U_i + W_\text{nc} = K_f + U_f
- W_\text{nc}: work by non-conservative forces such as friction or a push [J]
> Friction makes $W_\text{nc}$ negative. That energy doesn't vanish; it becomes thermal energy.
@ P1 CM
? work by friction

= Energy transferred into a system
$ \Delta E_\text{sys} = W_\text{ext}
- W_\text{ext}: work done on the system by forces from outside it [J]
> Draw the system boundary first. Gravity is "internal" if Earth is in the system (use $U_g$) and "external" if it isn't (count its work instead). Never both.
@ P1 CM
? system, energy transfer

= Thermal energy from friction
$ \Delta E_\text{th} = F_{f,k}\, d
- F_{f,k}: kinetic friction force [N]
- d: sliding distance (path length) [m]
@ P1 CM

## Power

= Average power
$ P_\text{avg} = \frac{W}{\Delta t} = \frac{\Delta E}{\Delta t}
- P: power [W]
@ P1* CM*

= Instantaneous power
$ P = \frac{dW}{dt} = \vec F \cdot \vec v = F v \cos\theta
- \vec F: the force doing work [N]
- \vec v: velocity of the object [m/s]
> Why cars have a top speed: at fixed engine power, the available force drops as speed rises.
@ P1* CM*

= Efficiency
$ \eta = \frac{P_\text{out}}{P_\text{in}} = \frac{E_\text{useful}}{E_\text{in}}
- \eta: efficiency, between 0 and 1 [—]
@ P1 P2
`);
