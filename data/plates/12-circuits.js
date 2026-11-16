Atlas.plate(String.raw`
# XII | circuits | Electric Circuits
: Current, resistance and two rules: junctions conserve charge, loops conserve energy.

## Current and resistance

= Electric current
$ I = \frac{\Delta q}{\Delta t}, \qquad I = \frac{dq}{dt}
- I: current [A]
- q: charge passing a point [C]
> Conventional current runs the way positive charge would. In a metal wire the electrons actually go the other way.
@ P2* CE*

= Drift velocity
$ I = n q A v_d
- n: charge carriers per volume [m⁻³]
- A: cross-sectional area [m²]
- v_d: drift speed [m/s]
> Drift speeds are tiny, fractions of a millimetre per second. The signal is what travels near light speed.
@ P2 CE OLY

= Resistance of a wire
$ R = \frac{\rho\,\ell}{A}
- \rho: resistivity of the material [Ω·m]
- \ell: length [m]
- A: cross-sectional area [m²]
@ P2* CE*

= Ohm's law
$ I = \frac{\Delta V}{R}
> Ohmic materials only. A light-bulb filament's resistance climbs as it heats up.
@ P2* CE*
? v=ir

= Current density and resistivity
$ \vec J = \frac{I}{A}, \qquad \vec E = \rho\,\vec J
- \vec J: current density [A/m²]
@ CE*

= Resistivity and temperature
$ \rho = \rho_0\left[1 + \alpha\left(T - T_0\right)\right]
- \alpha: temperature coefficient of resistivity [K⁻¹]
@ OLY

= Electrical power
$ P = I\,\Delta V = I^2 R = \frac{(\Delta V)^2}{R}
> In series, the bigger resistor dissipates more ($I^2R$). In parallel, the smaller one does ($V^2/R$).
@ P2* CE*

## Combining resistors

= Resistors in series
$ R_\text{eq} = \sum_i R_i
> Same current through each.
@ P2* CE*

= Resistors in parallel
$ \frac{1}{R_\text{eq}} = \sum_i \frac{1}{R_i}
> Same voltage across each. For two: product over sum, $R_1R_2/(R_1 + R_2)$.
@ P2* CE*

= Voltage divider
$ V_\text{out} = V_\text{in}\,\frac{R_2}{R_1 + R_2}
@ P2 CE

= Delta–wye transformation
$ R_1 = \frac{R_b R_c}{R_a + R_b + R_c}
> For bridge networks that are neither series nor parallel. Each wye resistor is the product of the two delta resistors next to it, over the sum of all three.
@ OLY
? star-delta, bridge circuit

## Kirchhoff's rules

= Junction rule
$ \sum I_\text{in} = \sum I_\text{out}
> Charge is conserved: nothing piles up at a junction.
@ P2 CE
? kirchhoff's current law

= Loop rule
$ \sum_\text{loop} \Delta V = 0
> Through a battery from $-$ to $+$: $+\varepsilon$. Across a resistor in the direction of the current: $-IR$.
@ P2 CE
? kirchhoff's voltage law

= Terminal voltage of a real battery
$ \Delta V_\text{terminal} = \varepsilon - I r
- \varepsilon: emf [V]
- r: internal resistance [Ω]
@ P2 CE
? internal resistance, emf

## RC circuits

= RC time constant
$ \tau = RC
- \tau: time constant [s]
> After one $\tau$, a charging capacitor holds 63% of its final charge; a discharging one keeps 37%.
@ P2 CE*

= Charging a capacitor
$ q(t) = C\varepsilon\left(1 - e^{-t/RC}\right), \qquad I(t) = \frac{\varepsilon}{R}\,e^{-t/RC}
> An uncharged capacitor acts like a plain wire at $t = 0$, and like a broken wire once fully charged.
@ P2 CE

= Discharging a capacitor
$ q(t) = Q_0\, e^{-t/RC}, \qquad I(t) = \frac{Q_0}{RC}\,e^{-t/RC}
@ P2 CE
`);
