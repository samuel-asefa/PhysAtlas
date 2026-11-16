Atlas.plate(String.raw`
# II | dynamics | Forces and Newton's Laws
: Why things accelerate. Draw the free-body diagram first; nearly all of the algebra falls out of it.

## Newton's laws

= Newton's second law
$ \vec a = \frac{\sum \vec F}{m}, \qquad \sum \vec F = m\vec a
- \vec a: acceleration of the object or system [m/s²]
- \sum \vec F: net external force [N]
- m: mass of the object or system [kg]
> Apply it one axis at a time. Pointing an axis along the acceleration usually saves work.
! Only external forces count. Forces between parts of the same system cancel in pairs.
@ P1* CM*
? f=ma, net force

= Newton's second law, momentum form
$ \sum \vec F = \frac{d\vec p}{dt}
- \vec p: momentum of the system [kg·m/s]
> The general version. You need it whenever mass changes: rockets, conveyor belts, sand pouring into a moving cart.
@ P1 CM* OLY
? variable mass

= Newton's third law
$ \vec F_{A\,\text{on}\,B} = -\vec F_{B\,\text{on}\,A}
> Equal and opposite, same type of force, acting on different objects. That last part is why a third-law pair never cancels on a single free-body diagram.
@ P1 CM
? action reaction

= Weight
$ F_g = m g
- F_g: gravitational force near Earth's surface [N]
- m: mass [kg]
- g: gravitational field strength, $9.8$ [N/kg]
> $g$ is a field strength (N/kg) as much as an acceleration (m/s²). The units are identical.
@ P1 CM
? gravity force, mg

## Contact forces

= Static friction
$ |F_{f,s}| \le \mu_s |F_N|
- F_{f,s}: static friction force, along the surface [N]
- \mu_s: coefficient of static friction [—]
- F_N: normal force [N]
> Static friction is whatever it needs to be to prevent slipping, up to a maximum of $\mu_s F_N$. Only at the edge of slipping is it equal.
! The normal force is not always $mg$. Inclines, elevators and angled pushes all change it.
@ P1* CM*
? coefficient of friction

= Kinetic friction
$ |F_{f,k}| = \mu_k |F_N|
- F_{f,k}: kinetic friction force, opposing the sliding [N]
- \mu_k: coefficient of kinetic friction [—]
- F_N: normal force [N]
> Fixed once sliding starts, independent of speed and contact area. Usually $\mu_k < \mu_s$, which is why things lurch when they start moving.
@ P1* CM*
? sliding friction

= Hooke's law
$ \vec F_s = -k\,\Delta\vec x
- F_s: spring force [N]
- k: spring constant (stiffness) [N/m]
- \Delta x: displacement from the spring's natural length [m]
> The minus sign means the force always points back toward the natural length.
@ P1* CM*
? spring force, spring constant

= Springs in series and parallel
$ k_\text{series} = \left(\frac{1}{k_1} + \frac{1}{k_2}\right)^{-1}, \qquad k_\text{parallel} = k_1 + k_2
- k_1, k_2: individual spring constants [N/m]
> The reverse of resistors. Springs in series share the force and add their stretches (softer). Springs in parallel share the stretch and add their forces (stiffer).
@ P1 CM OLY
? effective spring constant

= Forces on an incline
$ F_{g\parallel} = m g \sin\theta, \qquad F_{g\perp} = m g \cos\theta
- \theta: angle of the incline above horizontal
- F_{g\parallel}: component of gravity down the slope [N]
- F_{g\perp}: component of gravity into the slope [N]
> With nothing else pressing on the block, $F_N = mg\cos\theta$. Sanity check: at $\theta = 0$ the downhill part vanishes.
@ P1 CM
? ramp, slope, inclined plane

= Angle of repose
$ \tan\theta_\text{max} = \mu_s
- \theta_\text{max}: steepest incline a block can rest on [—]
> Tilt the ramp until the block just starts to slide, and you've measured $\mu_s$.
@ P1 CM OLY
? critical angle friction

= Atwood machine
$ a = \frac{(m_1 - m_2)\,g}{m_1 + m_2}, \qquad F_T = \frac{2 m_1 m_2\, g}{m_1 + m_2}
- m_1, m_2: hanging masses, $m_1 > m_2$ [kg]
- a: acceleration of either mass [m/s²]
- F_T: string tension [N]
> Ideal pulley and string. Treat both masses as one system pulled by $(m_1 - m_2)g$ and $a$ takes one line.
@ P1 CM OLY
? pulley

## Circular dynamics

= Centripetal force
$ \sum F_\text{radial} = \frac{m v^2}{r}
- \sum F_\text{radial}: net force toward the center [N]
> Not a new kind of force. It's the net inward push or pull from tension, gravity, friction or a normal force.
! Never draw "$F_c$" on a free-body diagram as a separate force.
@ P1 CM
? net radial force

= Maximum speed on a flat curve
$ v_\text{max} = \sqrt{\mu_s g r}
- \mu_s: coefficient of static friction [—]
- r: radius of the curve [m]
> Static, not kinetic: the tires aren't sliding sideways. Independent of the car's mass.
@ P1 CM
? unbanked curve

= Banked curve without friction
$ \tan\theta = \frac{v^2}{r g}
- \theta: banking angle
- v: design speed [m/s]
- r: radius of the curve [m]
> The one speed at which the normal force alone turns the car.
@ P1 CM OLY

= Minimum speed at the top of a loop
$ v_\text{min} = \sqrt{g r}
- r: radius of the loop [m]
> At this speed gravity alone supplies the centripetal force and the track's normal force drops to zero.
@ P1 CM
? vertical circle, loop the loop

= Conical pendulum
$ \tan\theta = \frac{v^2}{r g}, \qquad T = 2\pi\sqrt{\frac{L\cos\theta}{g}}
- \theta: angle of the string from vertical
- L: string length [m]
- T: period [s]
@ CM OLY

## Drag

= Linear drag
$ \vec F_d = -b\,\vec v
- b: drag constant [kg/s]
> A good model for small, slow objects in a viscous fluid.
@ CM
? air resistance, viscous drag

= Falling with linear drag
$ v(t) = v_T\left(1 - e^{-t/\tau}\right), \qquad v_T = \frac{mg}{b}, \quad \tau = \frac{m}{b}
- v_T: terminal velocity [m/s]
- \tau: time constant [s]
> Released from rest. After $3\tau$ the object is within 5% of terminal velocity. Same exponential as a charging capacitor.
@ CM
? terminal velocity

= Quadratic drag
$ F_d = \tfrac{1}{2} C \rho A v^2, \qquad v_T = \sqrt{\frac{2 m g}{C \rho A}}
- C: drag coefficient, set by shape [—]
- \rho: density of the fluid [kg/m³]
- A: cross-sectional area [m²]
> Large, fast objects in air: baseballs, skydivers, cars.
@ CM OLY
? air resistance, terminal velocity

## Non-inertial frames

= Apparent weight in an elevator
$ F_N = m(g + a)
- F_N: normal force, what the scale reads [N]
- a: elevator's acceleration, up positive [m/s²]
> A scale reads the normal force, not your weight. In free fall ($a = -g$) it reads zero.
@ P1 CM
? elevator, scale reading, weightlessness

= Fictitious (inertial) force
$ \vec F_\text{fict} = -m\,\vec a_\text{frame}
- \vec a_\text{frame}: acceleration of your reference frame [m/s²]
> Ride along with an accelerating frame: add this force to every object, then treat the frame as inertial. Often turns a dynamics problem into a statics problem, with effective gravity $\vec g - \vec a_\text{frame}$.
@ OLY
? pseudo force, effective gravity, d'alembert

= Centrifugal and Coriolis forces
$ \vec F_\text{cf} = m\,\omega^2 \vec r_\perp, \qquad \vec F_\text{Cor} = -2m\,\vec\omega \times \vec v
- \vec r_\perp: position measured perpendicular from the rotation axis [m]
- \vec\omega: angular velocity of the rotating frame [rad/s]
- \vec v: velocity measured in the rotating frame [m/s]
> Only in a rotating frame. Centrifugal acts on everything; Coriolis acts only on things moving in that frame.
@ OLY
? rotating frame
`);
