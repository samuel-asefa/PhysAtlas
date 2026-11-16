Atlas.plate(String.raw`
# IV | momentum | Momentum and Collisions
: Momentum survives collisions, explosions and anything else too fast or too messy to follow force by force.

## Momentum and impulse

= Linear momentum
$ \vec p = m\vec v
- \vec p: momentum [kg·m/s]
- m: mass [kg]
- \vec v: velocity [m/s]
> A vector. Conserve each component separately.
@ P1* CM*

= Impulse
$ \vec J = \int \vec F\,dt = \Delta \vec p
$ \vec J = \vec F_\text{avg}\,\Delta t
- \vec J: impulse [N·s]
- \vec F_\text{avg}: average force during the interaction [N]
- \Delta t: duration of the interaction [s]
> The area under a force–time graph. Airbags and crumple zones keep $\Delta p$ the same and stretch out $\Delta t$, which shrinks the force.
@ P1* CM*
? impulse-momentum theorem

## Collisions

= Conservation of momentum
$ \sum \vec p_\text{before} = \sum \vec p_\text{after}
> Holds when the net external force on the system is zero, or negligible during a short collision.
@ P1 CM
? momentum conservation, explosion

= Perfectly inelastic collision
$ v_f = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}
- v_f: common final velocity [m/s]
- m_1, m_2: masses [kg]
- v_1, v_2: initial velocities, with signs [m/s]
> The objects stick. Momentum is conserved; kinetic energy is not. The final velocity is just the center-of-mass velocity.
@ P1 CM
? sticky collision, objects stick together

= Elastic collision in one dimension
$ v_1' = \frac{m_1 - m_2}{m_1 + m_2}\,v_1 + \frac{2 m_2}{m_1 + m_2}\,v_2
$ v_2' = \frac{2 m_1}{m_1 + m_2}\,v_1 + \frac{m_2 - m_1}{m_1 + m_2}\,v_2
- v_1, v_2: velocities before [m/s]
- v_1', v_2': velocities after [m/s]
> Equal masses swap velocities. A light ball off a very heavy one bounces back at the same speed.
@ P1 CM OLY
? bouncy collision

= Relative speed in an elastic collision
$ v_1 - v_2 = -\left(v_1' - v_2'\right)
> Elastic collisions reverse the relative velocity. Pair this with momentum conservation instead of the kinetic-energy equation: two linear equations instead of a quadratic.
@ P1 CM OLY
? velocity of approach, velocity of separation

= Coefficient of restitution
$ e = \frac{\left|v_2' - v_1'\right|}{\left|v_1 - v_2\right|}
- e: coefficient of restitution, 0 to 1 [—]
> $e = 1$ elastic, $e = 0$ perfectly inelastic. A ball dropped from height $h$ rebounds to $e^2 h$.
@ OLY
? bounce height

= Energy lost in a perfectly inelastic collision
$ \Delta K = \tfrac{1}{2}\,\mu\,v_\text{rel}^2, \qquad \mu = \frac{m_1 m_2}{m_1 + m_2}
- \mu: reduced mass [kg]
- v_\text{rel}: relative speed before the collision [m/s]
> Exactly the kinetic energy in the center-of-mass frame. That's the energy available for crumpling.
@ OLY
? reduced mass

## Center of mass

= Center of mass of point masses
$ x_\text{cm} = \frac{\sum m_i x_i}{\sum m_i}
- x_\text{cm}: center-of-mass position [m]
- m_i, x_i: each mass and its position [kg, m]
> Do $x$, $y$ and $z$ separately. A symmetric object has its center of mass on every line of symmetry.
@ P1* CM*
? centroid, center of gravity

= Center of mass of a continuous body
$ \vec r_\text{cm} = \frac{1}{M}\int \vec r\,dm
> For a rod with linear density $\lambda(x)$: $x_\text{cm} = \int x\,\lambda\,dx \big/ \int \lambda\,dx$.
@ CM*

= Velocity of the center of mass
$ \vec v_\text{cm} = \frac{\sum m_i \vec v_i}{\sum m_i} = \frac{\vec p_\text{total}}{M}
- M: total mass [kg]
@ P1* CM

= Motion of the center of mass
$ \sum \vec F_\text{ext} = M\,\vec a_\text{cm}
> The center of mass moves as if all the mass sat there and every external force acted there. A firework that bursts mid-flight keeps its center of mass on the original parabola.
@ P1 CM

= Kinetic energy split (König's theorem)
$ K = \tfrac{1}{2} M v_\text{cm}^2 + K_\text{rel}
- K_\text{rel}: kinetic energy of motion relative to the center of mass [J]
> Total kinetic energy = motion of the center of mass + motion about it. A rolling wheel is the classic example.
@ OLY

## Variable mass

= Rocket thrust
$ F_\text{thrust} = v_\text{ex}\left|\frac{dm}{dt}\right|
- v_\text{ex}: exhaust speed relative to the rocket [m/s]
- dm/dt: rate at which mass is ejected [kg/s]
@ CM OLY

= Rocket equation (Tsiolkovsky)
$ \Delta v = v_\text{ex}\ln\frac{m_0}{m_f}
- m_0: initial mass, fuel included [kg]
- m_f: final mass [kg]
> No gravity, no drag. The logarithm is brutal: doubling $\Delta v$ squares the mass ratio you need.
@ CM OLY
? tsiolkovsky
`);
