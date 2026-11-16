Atlas.plate(String.raw`
# XV | waves | Waves and Sound
: Energy moving through a medium while the medium mostly stays put. One equation, $v = f\lambda$, does most of the work.

## Wave basics

= Wave speed
$ v = f\lambda = \frac{\lambda}{T}
- v: wave speed [m/s]
- f: frequency [Hz]
- \lambda: wavelength [m]
> The medium sets the speed; the source sets the frequency. Cross into a new medium and $f$ stays the same while $\lambda$ changes.
@ P2*
? wavelength, frequency

= Wave number and angular frequency
$ k = \frac{2\pi}{\lambda}, \qquad \omega = 2\pi f, \qquad v = \frac{\omega}{k}
- k: wave number [rad/m]
@ P2 OLY

= Traveling sinusoidal wave
$ y(x, t) = A\sin\left(kx - \omega t + \varphi\right)
> $kx - \omega t$ travels toward $+x$; $kx + \omega t$ travels toward $-x$.
@ P2 OLY
? wave function

= Wave speed on a string
$ v = \sqrt{\frac{F_T}{\mu}}
- F_T: tension [N]
- \mu: mass per unit length [kg/m]
> Tighter or lighter string, faster wave. This is how you tune a guitar.
@ P2 OLY

= Speed of sound in a medium
$ v = \sqrt{\frac{B}{\rho}}\;\text{(fluid)}, \qquad v = \sqrt{\frac{Y}{\rho}}\;\text{(thin solid rod)}
- B: bulk modulus [Pa]
- Y: Young's modulus [Pa]
- \rho: density [kg/m³]
@ OLY

= Speed of sound in air
$ v \approx 331 + 0.6\,T_\text{C}\quad(\text{m/s})
- T_\text{C}: air temperature [°C]
> About 343 m/s at room temperature.
@ P2 OLY

= Power carried by a wave on a string
$ P = \tfrac{1}{2}\mu\,\omega^2 A^2\, v
> Power goes as amplitude squared and frequency squared, which holds for most waves.
@ OLY

## Standing waves

= String fixed at both ends
$ \lambda_n = \frac{2L}{n}, \qquad f_n = \frac{n v}{2L}, \quad n = 1, 2, 3, \dots
- L: length of the string [m]
- n: harmonic number [—]
> Nodes at both ends. Every harmonic is allowed.
@ P2 OLY
? harmonics, fundamental frequency

= Pipe open at both ends
$ f_n = \frac{n v}{2L}, \quad n = 1, 2, 3, \dots
> Antinodes at both ends. Same pattern as a string.
@ P2
? open tube, organ pipe

= Pipe closed at one end
$ f_n = \frac{n v}{4L}, \quad n = 1, 3, 5, \dots
> Node at the closed end, antinode at the open end. Odd harmonics only, so the fundamental is an octave lower than an open pipe of the same length.
@ P2
? closed tube, resonance tube

## Sound

= Intensity
$ I = \frac{P}{A} = \frac{P}{4\pi r^2}
- I: intensity [W/m²]
- P: power of the source [W]
> For a point source spreading out evenly. Double the distance, quarter the intensity.
@ P2*
? inverse square

= Sound intensity level
$ \beta = 10\log_{10}\frac{I}{I_0}, \qquad I_0 = 10^{-12}\ \text{W/m}^2
- \beta: sound level [dB]
> Every factor of 10 in intensity adds 10 dB. Doubling the intensity adds about 3 dB.
@ P2
? decibels, loudness

= Doppler effect for sound
$ f' = f\,\frac{v \pm v_o}{v \mp v_s}
- v: speed of sound [m/s]
- v_o: observer's speed [m/s]
- v_s: source's speed [m/s]
> Use the top signs for motion toward each other. Sanity check: approaching always raises the pitch.
@ P2 OLY
? doppler shift

= Beat frequency
$ f_\text{beat} = |f_1 - f_2|
> How musicians tune: the beats slow down and vanish as the two pitches match.
@ P2
? beats

## Interference

= Interference conditions
$ \Delta L = m\lambda \;\text{(constructive)}, \qquad \Delta L = \left(m + \tfrac{1}{2}\right)\lambda \;\text{(destructive)}
- \Delta L: path-length difference [m]
- m: integer 0, 1, 2, … [—]
> For two sources in phase. If they start out of phase, the two conditions swap.
@ P2*
? path difference, constructive, destructive

= Superposition principle
$ y_\text{net} = y_1 + y_2
> Overlapping waves add point by point, then carry on as if they never met.
@ P2
`);
