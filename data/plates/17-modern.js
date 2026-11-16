Atlas.plate(String.raw`
# XVII | modern | Modern Physics
: Light comes in lumps, matter behaves like waves, and nothing outruns $c$.

## Photons

= Photon energy
$ E = h f = \frac{h c}{\lambda}
- h: Planck's constant, $6.63\times10^{-34}$ [J·s]
- f: frequency [Hz]
- \lambda: wavelength [m]
> Shortcut: $hc \approx 1240\ \text{eV·nm}$, so a 500 nm photon carries about 2.5 eV.
@ P2* MOD
? planck relation, quantum of light

= Photon momentum
$ p = \frac{h}{\lambda} = \frac{E}{c}
@ P2 MOD

= Photoelectric effect
$ K_\text{max} = h f - \phi
- K_\text{max}: maximum kinetic energy of ejected electrons [J or eV]
- \phi: work function of the metal [J or eV]
> Brighter light gives more electrons, not faster ones. Below the threshold frequency $f_0 = \phi/h$, nothing comes out however bright the light.
@ P2* MOD
? work function, threshold frequency

= Stopping potential
$ e\,\Delta V_\text{stop} = K_\text{max}
> In volts, the stopping potential is numerically equal to $K_\text{max}$ in eV.
@ P2 MOD

= Compton scattering
$ \Delta\lambda = \frac{h}{m_e c}\left(1 - \cos\theta\right)
- \theta: photon scattering angle
> $h/(m_e c) = 2.43\ \text{pm}$. Photons colliding with electrons like billiard balls, momentum and all.
@ P2 MOD OLY

= Wien's displacement law
$ \lambda_\text{max}\, T = 2.898\times10^{-3}\ \text{m·K}
- \lambda_\text{max}: peak wavelength of blackbody emission [m]
- T: temperature [K]
> The Sun (about 5800 K) peaks near 500 nm; you (310 K) peak near 9 μm in the infrared.
@ MOD OLY
? blackbody radiation

## Matter waves and uncertainty

= de Broglie wavelength
$ \lambda = \frac{h}{p}
- p: momentum of the particle [kg·m/s]
> Same formula as for photons, now for electrons, neutrons, even baseballs (whose wavelength is absurdly small).
@ P2* MOD
? matter wave, wave-particle duality

= Heisenberg uncertainty principle
$ \Delta x\,\Delta p \ge \frac{\hbar}{2}, \qquad \Delta E\,\Delta t \gtrsim \frac{\hbar}{2}
- \hbar: reduced Planck constant, $h/2\pi$ [J·s]
@ MOD OLY
? uncertainty

= Reduced Planck constant
$ \hbar = \frac{h}{2\pi}
@ MOD
? h-bar

## Atomic structure

= Energy levels of hydrogen
$ E_n = -\frac{13.6\ \text{eV}}{n^2}
- n: principal quantum number, 1, 2, 3, … [—]
> Hydrogen-like ions with nuclear charge $Z$: multiply by $Z^2$.
@ P2 MOD
? bohr energy levels

= Photon emitted or absorbed
$ E_\text{photon} = \left|E_i - E_f\right| = h f
> Atoms only absorb photons whose energy exactly matches a gap between levels.
@ P2 MOD
? emission spectrum, absorption spectrum

= Rydberg formula
$ \frac{1}{\lambda} = R_\infty\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)
- R_\infty: Rydberg constant, $1.097\times10^{7}$ [m⁻¹]
> $n_f = 1$ is the Lyman series (UV), $n_f = 2$ Balmer (visible), $n_f = 3$ Paschen (IR).
@ MOD OLY
? hydrogen spectrum, balmer

= Bohr model
$ L = n\hbar, \qquad r_n = n^2 a_0
- a_0: Bohr radius, $5.29\times10^{-11}$ [m]
@ MOD OLY

## Quantum mechanics

= Particle in a box
$ E_n = \frac{n^2 h^2}{8 m L^2}
- L: width of the box [m]
> Squeezing a particle into a smaller box raises its minimum energy, a direct consequence of uncertainty.
@ MOD OLY
? infinite square well

= Time-independent Schrödinger equation
$ -\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} + U(x)\,\psi = E\,\psi
- \psi: wavefunction [1/√m]
- U(x): potential energy [J]
@ MOD

= Probability density
$ P(x)\,dx = |\psi(x)|^2\,dx, \qquad \int_{-\infty}^{\infty} |\psi|^2\,dx = 1
@ MOD
? born rule, normalization

= Quantum harmonic oscillator
$ E_n = \left(n + \tfrac{1}{2}\right)\hbar\omega
> Evenly spaced levels, and a ground-state energy $\tfrac12\hbar\omega$ that never goes away.
@ MOD OLY
? zero-point energy

= Tunneling probability
$ T \approx e^{-2\kappa L}, \qquad \kappa = \frac{\sqrt{2m(U - E)}}{\hbar}
- L: barrier width [m]
- U - E: how far the barrier rises above the particle's energy [J]
@ MOD

## Nuclear physics

= Mass–energy equivalence
$ E = mc^2
@ P2* MOD
? rest energy

= Binding energy
$ E_B = \left(Z m_p + N m_n - m_\text{nucleus}\right)c^2
- Z, N: numbers of protons and neutrons [—]
> Use $1\ \text{u} = 931.5\ \text{MeV}/c^2$ to skip the unit conversions.
@ P2 MOD
? mass defect

= Radioactive decay
$ N(t) = N_0\, e^{-\lambda t} = N_0\left(\tfrac{1}{2}\right)^{t/t_{1/2}}
- \lambda: decay constant [s⁻¹]
- t_{1/2}: half-life [s]
@ P2 MOD
? exponential decay

= Half-life
$ t_{1/2} = \frac{\ln 2}{\lambda}
@ P2 MOD

= Activity
$ A = \lambda N = -\frac{dN}{dt}
- A: activity [Bq = decays/s]
@ MOD

= Nuclear radius
$ R = R_0\, A^{1/3}, \qquad R_0 \approx 1.2\ \text{fm}
- A: mass number [—]
> So every nucleus has roughly the same density.
@ MOD

= Conservation in nuclear reactions
$ \sum A_\text{before} = \sum A_\text{after}, \qquad \sum Z_\text{before} = \sum Z_\text{after}
> Nucleon number and charge both balance. In $\beta^-$ decay a neutron becomes a proton, so $Z$ goes up by one while $A$ stays put.
@ P2 MOD
? alpha decay, beta decay, nuclear equation

## Special relativity

= Lorentz factor
$ \gamma = \frac{1}{\sqrt{1 - v^2/c^2}}
> At everyday speeds $\gamma \approx 1 + \tfrac12 v^2/c^2$. It reaches 2 at $v \approx 0.87c$.
@ MOD OLY
? gamma factor

= Time dilation
$ \Delta t = \gamma\,\Delta t_0
- \Delta t_0: proper time, measured by a clock at rest relative to the events [s]
> Moving clocks run slow. Muons from the upper atmosphere reach the ground because of it.
@ MOD OLY

= Length contraction
$ L = \frac{L_0}{\gamma}
- L_0: proper length, measured at rest relative to the object [m]
> Only along the direction of motion.
@ MOD OLY

= Relativistic momentum
$ p = \gamma m v
@ MOD OLY

= Relativistic energy
$ E = \gamma m c^2, \qquad K = (\gamma - 1)\,mc^2
@ MOD OLY
? kinetic energy relativistic

= Energy–momentum relation
$ E^2 = (pc)^2 + \left(mc^2\right)^2
> For a photon $m = 0$, so $E = pc$.
@ MOD OLY

= Relativistic velocity addition
$ u' = \frac{u - v}{1 - uv/c^2}
- u: velocity measured in frame S [m/s]
- v: velocity of frame S′ relative to S [m/s]
- u': velocity measured in frame S′ [m/s]
> No combination of speeds below $c$ ever adds up to more than $c$.
@ MOD OLY

= Lorentz transformation
$ x' = \gamma\left(x - vt\right), \qquad t' = \gamma\left(t - \frac{vx}{c^2}\right)
> The $vx/c^2$ term is where relativity of simultaneity hides.
@ MOD OLY

= Relativistic Doppler effect
$ f_\text{obs} = f_\text{src}\sqrt{\frac{1 + \beta}{1 - \beta}}, \qquad \beta = \frac{v}{c}
> For a source approaching. For one receding, flip the sign of $\beta$.
@ MOD OLY
? redshift, blueshift
`);
