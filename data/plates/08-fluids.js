Atlas.plate(String.raw`
# VIII | fluids | Fluids
: Pressure, buoyancy and flow. Since the 2024 redesign, this is the final unit of AP Physics 1.

## Fluid statics

= Density
$ \rho = \frac{m}{V}
- \rho: density [kg/m³]
- m: mass [kg]
- V: volume [m³]
> Water is $1000\ \text{kg/m}^3$, or $1\ \text{g/cm}^3$.
@ P1*

= Pressure
$ P = \frac{F_\perp}{A}
- P: pressure [Pa]
- F_\perp: force perpendicular to the surface [N]
- A: area [m²]
@ P1*

= Pressure at depth
$ P = P_0 + \rho g h
- P_0: pressure at the surface, often $P_\text{atm}$ [Pa]
- \rho: fluid density [kg/m³]
- h: depth below the surface [m]
> Depends only on depth, not on the container's shape. Every 10 m of water adds about one atmosphere.
@ P1*
? hydrostatic pressure, absolute pressure

= Gauge pressure
$ P_\text{gauge} = P - P_\text{atm}
> What a tire gauge reads. Absolute pressure is gauge plus atmospheric.
@ P1

= Pascal's principle
$ \frac{F_1}{A_1} = \frac{F_2}{A_2}
> A hydraulic lift multiplies force, never energy: the small piston moves much farther than the big one.
@ P1
? hydraulic lift, hydraulic press

= Buoyant force
$ F_b = \rho_\text{fluid}\, V_\text{disp}\, g
- \rho_\text{fluid}: density of the fluid, not the object [kg/m³]
- V_\text{disp}: volume of fluid displaced, i.e. the submerged volume [m³]
> Archimedes: the buoyant force equals the weight of the displaced fluid.
! Use the fluid's density and the submerged volume. Mixing in the object's density is the most common error here.
@ P1*
? archimedes principle, upthrust

= Fraction submerged when floating
$ \frac{V_\text{sub}}{V} = \frac{\rho_\text{object}}{\rho_\text{fluid}}
> About 90% of an iceberg sits below the waterline.
@ P1 OLY
? floating, iceberg

## Fluid dynamics

= Continuity equation
$ A_1 v_1 = A_2 v_2
- A: cross-sectional area [m²]
- v: flow speed [m/s]
> For an incompressible fluid, whatever goes in must come out. Narrow the pipe and the flow speeds up.
@ P1*
? conservation of mass, flow

= Volume flow rate
$ Q = \frac{\Delta V}{\Delta t} = A v
- Q: volume flow rate [m³/s]
@ P1

= Bernoulli's equation
$ P_1 + \rho g y_1 + \tfrac{1}{2}\rho v_1^2 = P_2 + \rho g y_2 + \tfrac{1}{2}\rho v_2^2
- y: height [m]
- v: flow speed [m/s]
> Energy conservation per unit volume along a streamline. Where the flow is faster, the pressure is lower.
@ P1*
? bernoulli principle

= Torricelli's theorem
$ v = \sqrt{2 g h}
- h: depth of the hole below the water's surface [m]
> Efflux speed from a hole in a wide, open tank: the same speed as falling freely from height $h$.
@ P1
? efflux speed, tank draining

## Viscosity and surface tension

= Poiseuille's law
$ Q = \frac{\pi r^4\,\Delta P}{8 \eta L}
- r: pipe radius [m]
- \Delta P: pressure difference along the pipe [Pa]
- \eta: viscosity [Pa·s]
- L: pipe length [m]
> The $r^4$ is dramatic: halve the radius and the flow drops sixteenfold.
@ OLY
? viscous flow

= Stokes' drag
$ F_d = 6\pi \eta r v
- r: radius of the sphere [m]
> Small spheres moving slowly through a viscous fluid. Used in Millikan's oil-drop experiment.
@ OLY

= Surface tension force
$ F = \gamma L
- \gamma: surface tension [N/m]
- L: length of the edge the surface pulls on [m]
@ OLY

= Laplace pressure
$ \Delta P = \frac{2\gamma}{r}
- r: radius of the droplet [m]
> Extra pressure inside a droplet. A soap bubble has two surfaces, so $\Delta P = 4\gamma/r$.
@ OLY
? droplet, bubble

= Capillary rise
$ h = \frac{2\gamma\cos\theta}{\rho g r}
- \theta: contact angle
- r: tube radius [m]
@ OLY
? capillary action
`);
