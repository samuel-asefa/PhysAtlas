Atlas.plate(String.raw`
# IX | thermodynamics | Thermodynamics
: Heat, temperature and the ideal gas. AP's sign convention writes $W$ as the work done on the gas; watch for it, because many textbooks do the opposite.

## Temperature and heat

= Kelvin temperature
$ T_\text{K} = T_\text{C} + 273.15
> Gas laws and radiation laws need kelvin. Temperature differences are the same in both scales.
@ P2
? absolute temperature, celsius

= Specific heat
$ Q = m c\,\Delta T
- Q: heat added [J]
- c: specific heat capacity [J/(kg·K)]
- \Delta T: temperature change [K]
> Water's $c$ is huge, about 4190 J/(kg·K), which is why coastal climates are mild.
@ P2
? calorimetry, heat capacity

= Latent heat
$ Q = m L
- L: latent heat of fusion or vaporization [J/kg]
> During a phase change the temperature stays put; all the heat goes into rearranging molecules.
@ P2
? phase change, melting, boiling

= Linear thermal expansion
$ \Delta L = \alpha L_0\,\Delta T
- \alpha: coefficient of linear expansion [K⁻¹]
- L_0: original length [m]
@ P2

= Volume thermal expansion
$ \Delta V = \beta V_0\,\Delta T, \qquad \beta \approx 3\alpha
- \beta: coefficient of volume expansion [K⁻¹]
@ P2 OLY

## Heat transfer

= Thermal conduction
$ \frac{Q}{\Delta t} = \frac{k A\,\Delta T}{L}
- k: thermal conductivity [W/(m·K)]
- A: cross-sectional area [m²]
- \Delta T: temperature difference across the slab [K]
- L: thickness of the slab [m]
@ P2*
? fourier's law, heat current

= Thermal resistance
$ R_\text{th} = \frac{L}{kA}, \qquad \frac{Q}{\Delta t} = \frac{\Delta T}{R_\text{th}}
> Layers in series add like resistors. That's the entire trick for walls made of several materials.
@ P2 OLY

= Stefan–Boltzmann law
$ P = e\sigma A T^4
- e: emissivity, 0 to 1 [—]
- \sigma: Stefan–Boltzmann constant, $5.67\times10^{-8}$ [W/(m²·K⁴)]
- A: surface area [m²]
- T: surface temperature [K]
> Net power with surroundings at $T_\text{env}$: $P = e\sigma A\left(T^4 - T_\text{env}^4\right)$.
@ P2 MOD OLY
? thermal radiation, blackbody

= Newton's law of cooling
$ \frac{dT}{dt} = -k\left(T - T_\text{env}\right)
> Exponential approach to room temperature. Same mathematics as a discharging capacitor.
@ OLY

## Kinetic theory

= Ideal gas law
$ PV = nRT = N k_B T
- n: amount of gas [mol]
- R: gas constant, $8.31$ [J/(mol·K)]
- N: number of molecules [—]
- k_B: Boltzmann constant, $1.38\times10^{-23}$ [J/K]
> $T$ in kelvin, always.
@ P2*
? gas law, pv=nrt

= Average translational kinetic energy
$ \bar K = \tfrac{3}{2} k_B T
- \bar K: average kinetic energy per molecule [J]
> Temperature is a measure of exactly this. Nothing more mysterious.
@ P2*
? temperature and kinetic energy

= Root-mean-square speed
$ v_\text{rms} = \sqrt{\frac{3 k_B T}{m}} = \sqrt{\frac{3RT}{M}}
- m: mass of one molecule [kg]
- M: molar mass [kg/mol]
! Use kg/mol for $M$. Plugging in g/mol makes the answer $\sqrt{1000}$ times too small.
@ P2 OLY
? rms speed

= Pressure from kinetic theory
$ P = \frac{1}{3}\,\frac{N}{V}\, m\,\overline{v^2}
@ P2 OLY

= Internal energy of an ideal gas
$ U = \frac{f}{2}\,n R T
- f: degrees of freedom: 3 monatomic, 5 diatomic at room temperature [—]
> Monatomic: $U = \tfrac32 nRT$. Depends only on temperature, so $\Delta U = 0$ for any isothermal process.
@ P2 OLY

= Equipartition theorem
$ \langle E \rangle = \tfrac{1}{2}k_B T
- \langle E \rangle: average energy in each quadratic degree of freedom [J]
> Each squared term in the energy ($\tfrac12 mv_x^2$, $\tfrac12 kx^2$, $\tfrac12 I\omega^2$) gets the same share.
@ OLY

= Maxwell–Boltzmann speeds
$ v_p = \sqrt{\frac{2k_BT}{m}}, \qquad \bar v = \sqrt{\frac{8 k_B T}{\pi m}}, \qquad v_\text{rms} = \sqrt{\frac{3k_BT}{m}}
> Most probable, mean, and rms speed, always in the order $v_p < \bar v < v_\text{rms}$.
@ OLY

= Mean free path
$ \lambda = \frac{1}{\sqrt{2}\, n\, \pi d^2}
- n: number of molecules per volume [m⁻³]
- d: molecular diameter [m]
@ OLY

## First law and processes

= First law of thermodynamics
$ \Delta U = Q + W
- \Delta U: change in internal energy [J]
- Q: heat added to the gas [J]
- W: work done on the gas [J]
> AP sign convention. Textbooks that write $\Delta U = Q - W$ mean work done by the gas: same physics, opposite sign on $W$.
@ P2* OLY
? energy conservation, sign convention

= Work done on a gas
$ W = -\int P\,dV, \qquad W = -P\,\Delta V \;\text{(constant pressure)}
> Its magnitude is the area under the curve on a $PV$ diagram. A gas that expands does negative work on itself, i.e. positive work on its surroundings.
@ P2*
? pv diagram, isobaric

= Isothermal process
$ W = -nRT\ln\frac{V_f}{V_i}, \qquad \Delta U = 0, \qquad Q = -W
> Constant temperature. On a $PV$ diagram, a hyperbola $PV = \text{const}$.
@ P2 OLY

= Adiabatic process
$ PV^\gamma = \text{constant}, \qquad TV^{\gamma - 1} = \text{constant}
- \gamma: heat capacity ratio $C_P/C_V$ [—]
> No heat flows ($Q = 0$), so $\Delta U = W$. Steeper than an isotherm on a $PV$ diagram.
@ P2 OLY

= Work in an adiabatic process
$ W = \frac{P_f V_f - P_i V_i}{\gamma - 1}
- W: work done on the gas [J]
@ OLY

= Isochoric process
$ W = 0, \qquad \Delta U = Q
> Constant volume: a vertical line on a $PV$ diagram.
@ P2 OLY
? constant volume, isovolumetric

= Molar heat capacities
$ C_V = \frac{f}{2}R, \qquad C_P = C_V + R, \qquad \gamma = \frac{C_P}{C_V}
> Monatomic ideal gas: $\gamma = 5/3$. Diatomic: $\gamma = 7/5$.
@ P2 OLY

= Heat at constant volume or pressure
$ Q = nC_V\,\Delta T \;\text{(isochoric)}, \qquad Q = nC_P\,\Delta T \;\text{(isobaric)}
@ OLY

## Second law and engines

= Heat engine efficiency
$ e = \frac{|W|}{|Q_H|} = 1 - \frac{|Q_C|}{|Q_H|}
- Q_H: heat taken from the hot reservoir [J]
- Q_C: heat dumped to the cold reservoir [J]
@ P2 OLY

= Carnot efficiency
$ e_\text{Carnot} = 1 - \frac{T_C}{T_H}
- T_C, T_H: cold and hot reservoir temperatures [K]
> The ceiling for any engine running between those two temperatures. Kelvin only.
@ P2 OLY
? maximum efficiency

= Refrigerator coefficient of performance
$ K = \frac{|Q_C|}{|W|}, \qquad K_\text{Carnot} = \frac{T_C}{T_H - T_C}
@ OLY
? cop, heat pump

= Entropy change
$ \Delta S = \frac{Q}{T}\;\text{(reversible, constant } T\text{)}, \qquad \Delta S = \int \frac{dQ_\text{rev}}{T}
- S: entropy [J/K]
> The total entropy of an isolated system never decreases. That single sentence is the second law.
@ P2 OLY
? second law

= Entropy change of an ideal gas, isothermal
$ \Delta S = nR\ln\frac{V_f}{V_i}
@ OLY

= Boltzmann entropy
$ S = k_B \ln \Omega
- \Omega: number of microstates [—]
@ MOD OLY
? statistical mechanics, microstates
`);
