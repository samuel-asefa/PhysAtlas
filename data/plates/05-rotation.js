Atlas.plate(String.raw`
# V | rotation | Rotation
: Rigid bodies spinning, rolling and balancing. Every linear quantity has an angular twin, so most of this plate is familiar physics in new letters.

## Angular kinematics

= Linear–angular dictionary
$ x \to \theta, \qquad v \to \omega, \qquad a \to \alpha
$ m \to I, \qquad F \to \tau, \qquad p \to L
> Swap the symbols and every linear equation has a rotational twin: $F = ma$ becomes $\tau = I\alpha$, and $\tfrac12 mv^2$ becomes $\tfrac12 I\omega^2$.
@ P1 CM
? analogy, rotational analog

= Angular velocity and acceleration
$ \omega = \frac{d\theta}{dt}, \qquad \alpha = \frac{d\omega}{dt}
- \theta: angular position [rad]
- \omega: angular velocity [rad/s]
- \alpha: angular acceleration [rad/s²]
@ P1 CM

= Angular velocity–time
$ \omega = \omega_0 + \alpha t
- \omega_0: initial angular velocity [rad/s]
- \alpha: constant angular acceleration [rad/s²]
@ P1* CM*
? rotational kinematics

= Angular position–time
$ \theta = \theta_0 + \omega_0 t + \tfrac{1}{2}\alpha t^2
@ P1* CM*
? rotational kinematics

= Angular velocity–position
$ \omega^2 = \omega_0^2 + 2\alpha\left(\theta - \theta_0\right)
@ P1* CM*
? rotational kinematics

= Linking linear and angular motion
$ \Delta s = r\,\Delta\theta, \qquad v = r\omega, \qquad a_t = r\alpha
- r: distance from the rotation axis [m]
- \Delta s: arc length traveled [m]
- a_t: tangential acceleration [m/s²]
> Radians only. These tie a point on the body, or a rolling wheel's center, to the rotation.
@ P1* CM*
? arc length, tangential speed

## Torque and statics

= Torque
$ \tau = r_\perp F = r F \sin\theta
- r: distance from the axis to where the force acts [m]
- \theta: angle between $\vec r$ and $\vec F$
- r_\perp: lever arm, the perpendicular distance from the axis to the force's line of action [m]
> Same torque, two pictures: the whole force times the lever arm, or the whole distance times the perpendicular part of the force.
@ P1* CM*
? moment, lever arm

= Torque as a cross product
$ \vec \tau = \vec r \times \vec F
> Right-hand rule. Counterclockwise in the page points out of the page.
@ CM*

= Rotational form of Newton's second law
$ \alpha = \frac{\sum \tau}{I}
- I: moment of inertia about the same axis [kg·m²]
> Torques and $I$ must use the same axis. A fixed axis or the center of mass always works.
@ P1* CM*
? newton's second law for rotation

= Static equilibrium
$ \sum \vec F = 0, \qquad \sum \tau = 0
> In statics you may take torques about any point you like. Choose the one where the most unknown forces act; they drop out.
@ P1 CM
? ladder, beam, balance, seesaw

## Moment of inertia

= Moment of inertia of point masses
$ I = \sum m_i r_i^2
- r_i: perpendicular distance of each mass from the axis [m]
> Mass far from the axis counts quadratically more. That's why a figure skater spins faster with arms tucked in.
@ P1* CM*
? rotational inertia

= Moment of inertia of a continuous body
$ I = \int r^2\,dm
> Write $dm = \lambda\,dr$, $\sigma\,dA$ or $\rho\,dV$, and integrate over the body.
@ CM*

= Parallel-axis theorem
$ I = I_\text{cm} + M d^2
- I_\text{cm}: moment of inertia about a parallel axis through the center of mass [kg·m²]
- d: distance between the two axes [m]
> One of the axes must pass through the center of mass. $I$ is always smallest about the center of mass.
@ P1* CM*
? steiner

= Perpendicular-axis theorem
$ I_z = I_x + I_y
> Flat objects only, with $x$ and $y$ in the plane. A disk has $I_z = \tfrac12 MR^2$, so each diameter gets $\tfrac14 MR^2$.
@ OLY

## Common moments of inertia
: About the axis named; $M$ is mass, $R$ radius, $L$ length.

= Thin hoop or ring, central axis
$ I = M R^2
@ P1 CM
? cylindrical shell

= Solid disk or cylinder, central axis
$ I = \tfrac{1}{2} M R^2
@ P1 CM

= Thick-walled cylinder, central axis
$ I = \tfrac{1}{2} M\left(R_1^2 + R_2^2\right)
- R_1, R_2: inner and outer radii [m]
@ CM OLY
? annulus, washer

= Solid sphere, about a diameter
$ I = \tfrac{2}{5} M R^2
@ P1 CM
? ball

= Thin spherical shell, about a diameter
$ I = \tfrac{2}{3} M R^2
@ P1 CM
? hollow sphere

= Thin rod, about its center
$ I = \tfrac{1}{12} M L^2
> Axis perpendicular to the rod.
@ P1 CM

= Thin rod, about one end
$ I = \tfrac{1}{3} M L^2
> Parallel-axis check: $\tfrac{1}{12}ML^2 + M\left(\tfrac{L}{2}\right)^2 = \tfrac13 ML^2$.
@ P1 CM

= Rectangular plate, about its center
$ I = \tfrac{1}{12} M\left(a^2 + b^2\right)
- a, b: side lengths [m]
> Axis perpendicular to the plate.
@ CM OLY

= Thin hoop, about a diameter
$ I = \tfrac{1}{2} M R^2
@ OLY

= Solid cone, about its axis
$ I = \tfrac{3}{10} M R^2
@ OLY

## Rotational energy and rolling

= Rotational kinetic energy
$ K = \tfrac{1}{2} I \omega^2
@ P1* CM*

= Rolling without slipping
$ v_\text{cm} = R\omega, \qquad a_\text{cm} = R\alpha
- R: radius of the rolling object [m]
> The contact point is momentarily at rest. Static friction acts there but does no work.
@ P1 CM
? rolling condition

= Kinetic energy of a rolling object
$ K = \tfrac{1}{2} M v_\text{cm}^2 + \tfrac{1}{2} I_\text{cm}\omega^2
> Or, equivalently, pure rotation about the contact point: $K = \tfrac12 I_P\,\omega^2$.
@ P1 CM

= Rolling down an incline
$ a = \frac{g\sin\theta}{1 + I_\text{cm}/(M R^2)}
- \theta: incline angle
> Shape matters; mass and radius don't. Race order: solid sphere ($\tfrac25$), then disk ($\tfrac12$), then hoop ($1$).
@ P1 CM OLY
? race down a ramp

= Rotational work
$ W = \tau\,\Delta\theta
$ W = \int \tau\,d\theta
@ P1* CM*

= Rotational power
$ P = \tau\omega
@ CM

## Angular momentum

= Angular momentum of a rigid body
$ L = I\omega
- L: angular momentum [kg·m²/s]
@ P1* CM*

= Angular momentum of a particle
$ \vec L = \vec r \times \vec p, \qquad |\vec L| = r m v \sin\theta
> A particle moving in a straight line still has angular momentum about any point off its path.
@ P1* CM*

= Angular impulse
$ \Delta L = \tau\,\Delta t
$ \sum \vec\tau = \frac{d\vec L}{dt}
@ P1* CM*
? angular impulse-momentum theorem

= Conservation of angular momentum
$ I_i \omega_i = I_f \omega_f
> Holds with zero net external torque. A skater who pulls their arms in spins faster, and actually gains kinetic energy from the work their muscles do.
@ P1 CM
? skater, merry-go-round

= Gyroscopic precession
$ \Omega = \frac{M g r}{I\omega}
- \Omega: precession rate [rad/s]
- r: distance from pivot to center of mass [m]
- \omega: spin rate [rad/s]
> Fast-spin approximation. Gravity's torque turns the direction of $\vec L$ rather than its size.
@ OLY
? gyroscope, spinning top
`);
