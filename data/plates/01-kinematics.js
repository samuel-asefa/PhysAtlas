Atlas.plate(String.raw`
# I | kinematics | Kinematics
: Position, velocity and acceleration: how things move, before anyone asks why. Every other mechanics plate leans on this one.

## Describing motion

= Average velocity
$ \bar v = \frac{\Delta x}{\Delta t}
- \bar v: average velocity [m/s]
- \Delta x: displacement, final minus initial position [m]
- \Delta t: elapsed time [s]
> Displacement, not distance. A full lap of the track has zero average velocity and plenty of average speed.
@ P1 CM
? average speed, mean velocity

= Average acceleration
$ \bar a = \frac{\Delta v}{\Delta t}
- \bar a: average acceleration [m/s²]
- \Delta v: change in velocity [m/s]
- \Delta t: elapsed time [s]
> The slope of the straight line joining two points on a velocity–time graph.
@ P1 CM

= Instantaneous velocity and acceleration
$ v = \frac{dx}{dt}, \qquad a = \frac{dv}{dt} = \frac{d^2x}{dt^2}
- x: position [m]
- v: instantaneous velocity [m/s]
- a: instantaneous acceleration [m/s²]
> On graphs: velocity is the slope of $x(t)$, acceleration is the slope of $v(t)$. AP 1 reads slopes; C takes derivatives.
@ P1 CM*
? derivative, slope of tangent

= Displacement and velocity change from graphs
$ \Delta x = \int_{t_1}^{t_2} v\,dt
$ \Delta v = \int_{t_1}^{t_2} a\,dt
- \Delta x: displacement [m]
- v: velocity as a function of time [m/s]
- a: acceleration as a function of time [m/s²]
> Signed area under a $v$–$t$ graph is displacement; area under an $a$–$t$ graph is the change in velocity. Area below the axis counts as negative.
@ P1 CM*
? area under the curve, integral

= Acceleration as a function of position
$ a = v\,\frac{dv}{dx}
- a: acceleration [m/s²]
- v: velocity [m/s]
- x: position [m]
> Chain-rule trick for forces that depend on position rather than time. Separate and integrate: $\int v\,dv = \int a(x)\,dx$.
@ CM OLY
? chain rule, a(x), separation of variables

## Constant acceleration
: The "big four." Every one of them assumes acceleration is constant, so check that first. Each is missing one variable; pick the one missing the quantity you neither know nor need.

= Velocity–time relation
$ v_x = v_{x0} + a_x t
- v_x: velocity at time $t$ [m/s]
- v_{x0}: initial velocity [m/s]
- a_x: constant acceleration [m/s²]
- t: elapsed time [s]
> Missing: displacement.
@ P1* CM*
? suvat, big four, kinematic equations

= Position–time relation
$ x = x_0 + v_{x0} t + \tfrac{1}{2} a_x t^2
- x: position at time $t$ [m]
- x_0: initial position [m]
- v_{x0}: initial velocity [m/s]
- a_x: constant acceleration [m/s²]
- t: elapsed time [s]
> Missing: final velocity. The go-to for "how long until it lands?", usually ending in a quadratic.
@ P1* CM*
? suvat, big four, kinematic equations

= Velocity–position relation
$ v_x^2 = v_{x0}^2 + 2a_x\,(x - x_0)
- v_x: final velocity [m/s]
- v_{x0}: initial velocity [m/s]
- a_x: constant acceleration [m/s²]
- x - x_0: displacement [m]
> Missing: time. The fastest route whenever a problem never mentions how long anything took.
@ P1* CM*
? suvat, big four, timeless equation

= Average-velocity relation
$ \Delta x = \tfrac{1}{2}\left(v_0 + v\right) t
- \Delta x: displacement [m]
- v_0: initial velocity [m/s]
- v: final velocity [m/s]
- t: elapsed time [s]
> Missing: acceleration. Works because, with constant $a$, the average velocity is just the mean of the two endpoints.
@ P1 CM
? suvat, big four

= Displacement from final velocity
$ \Delta x = v t - \tfrac{1}{2} a t^2
- \Delta x: displacement [m]
- v: final velocity [m/s]
- a: constant acceleration [m/s²]
- t: elapsed time [s]
> Missing: initial velocity. Rarely taught; occasionally the one-line answer, such as for a car braking to a stop (run the clip backwards).
@ OLY
? suvat

## Free fall and projectiles
: Treat horizontal and vertical motion as two separate problems that share a clock.

= Free fall
$ y = y_0 + v_0 t - \tfrac{1}{2} g t^2, \qquad v = v_0 - g t
- y: height [m]
- v_0: initial vertical velocity, up positive [m/s]
- g: gravitational acceleration, $9.8$ [m/s²]
- t: time [s]
> Up is positive here, so gravity enters with a minus sign. Choose a sign convention and stick to it for the whole problem.
! At the top of the flight $v = 0$, but $a$ is still $-g$. The ball never stops accelerating.
@ P1 CM
? falling, dropped object, thrown upward

= Projectile components
$ x = (v_0\cos\theta)\,t, \qquad y = (v_0\sin\theta)\,t - \tfrac{1}{2} g t^2
- v_0: launch speed [m/s]
- \theta: launch angle above the horizontal
- g: gravitational acceleration [m/s²]
- t: time since launch [s]
> With no air resistance the horizontal velocity never changes. Time is the only quantity both directions share, so solve for it in one and use it in the other.
@ P1 CM
? projectile motion, launch

= Time of flight on level ground
$ T = \frac{2 v_0 \sin\theta}{g}
- T: total time in the air [s]
- v_0: launch speed [m/s]
- \theta: launch angle
> Only when the launch and landing heights are the same.
@ P1 CM OLY

= Range on level ground
$ R = \frac{v_0^2 \sin 2\theta}{g}
- R: horizontal range [m]
- v_0: launch speed [m/s]
- \theta: launch angle
> Maximum at $45^\circ$. Complementary angles (say $30^\circ$ and $60^\circ$) land at the same spot.
! Level ground only. Off a cliff, go back to the components.
@ P1 CM OLY
? maximum range, 45 degrees

= Maximum height of a projectile
$ H = \frac{v_0^2 \sin^2\theta}{2g}
- H: peak height above the launch point [m]
> From $v_y^2 = v_{0y}^2 - 2gH$ with $v_y = 0$ at the top.
@ P1 CM OLY
? apex, peak

= Trajectory equation
$ y = x\tan\theta - \frac{g\,x^2}{2 v_0^2 \cos^2\theta}
- x, y: horizontal and vertical position from the launch point [m]
> The path is a parabola. Reach for this when a problem names a target at a known $(x, y)$ and asks for the speed or angle that hits it.
@ CM OLY
? parabola, path of projectile

## Relative motion

= Relative velocity
$ \vec v_{A/C} = \vec v_{A/B} + \vec v_{B/C}
- \vec v_{A/C}: velocity of A relative to C [m/s]
- \vec v_{A/B}: velocity of A relative to B [m/s]
- \vec v_{B/C}: velocity of B relative to C [m/s]
> The inner subscripts "cancel." Boat-crossing-a-river and rain-on-a-moving-car problems are this equation drawn as a vector triangle.
@ P1 CM
? reference frame, boat river, galilean transformation

## Circular motion

= Centripetal acceleration
$ a_c = \frac{v^2}{r} = \omega^2 r
- a_c: centripetal acceleration, pointing to the center [m/s²]
- v: speed [m/s]
- r: radius of the circle [m]
- \omega: angular speed [rad/s]
> Present even at constant speed, because the direction of the velocity keeps changing.
@ P1* CM*
? radial acceleration, uniform circular motion

= Speed in uniform circular motion
$ v = \frac{2\pi r}{T} = \omega r
- v: speed [m/s]
- r: radius [m]
- T: period of one revolution [s]
- \omega: angular speed [rad/s]
@ P1 CM
? period, circumference

= Acceleration in nonuniform circular motion
$ a = \sqrt{a_c^2 + a_t^2}, \qquad a_t = \frac{dv}{dt}
- a_c: centripetal (radial) acceleration [m/s²]
- a_t: tangential acceleration [m/s²]
> Speeding up around a curve gives both components. They are perpendicular, so they add in quadrature.
@ CM OLY
? tangential acceleration
`);
