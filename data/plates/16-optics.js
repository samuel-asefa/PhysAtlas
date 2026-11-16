Atlas.plate(String.raw`
# XVI | optics | Optics
: Light as rays for mirrors and lenses, light as waves for slits and films, and light as an electromagnetic wave underneath both.

## Reflection and refraction

= Law of reflection
$ \theta_i = \theta_r
> Both angles are measured from the normal, not from the surface.
@ P2

= Index of refraction
$ n = \frac{c}{v}
- n: index of refraction [—]
- c: speed of light in vacuum [m/s]
- v: speed of light in the material [m/s]
@ P2*

= Snell's law
$ n_1\sin\theta_1 = n_2\sin\theta_2
> Entering a slower medium (bigger $n$), light bends toward the normal.
@ P2*
? refraction

= Critical angle
$ \sin\theta_c = \frac{n_2}{n_1} \quad (n_1 > n_2)
> Total internal reflection only happens going from higher $n$ to lower $n$. Fiber optics run on it.
@ P2
? total internal reflection

= Wavelength in a medium
$ \lambda_n = \frac{\lambda_0}{n}
- \lambda_0: wavelength in vacuum [m]
> Frequency doesn't change crossing a boundary; wavelength does.
@ P2 OLY

= Brewster's angle
$ \tan\theta_B = \frac{n_2}{n_1}
> Light reflected at this angle is completely polarized. Why polarized sunglasses cut glare.
@ OLY
? polarization by reflection

## Mirrors and lenses

= Thin lens and mirror equation
$ \frac{1}{s_i} + \frac{1}{s_o} = \frac{1}{f}
- s_o: object distance [m]
- s_i: image distance, positive for a real image [m]
- f: focal length, positive for converging [m]
> Converging lenses and concave mirrors have $f > 0$. A negative $s_i$ means a virtual image.
@ P2*
? lens equation, mirror equation

= Magnification
$ |M| = \left|\frac{h_i}{h_o}\right| = \left|\frac{s_i}{s_o}\right|, \qquad M = -\frac{s_i}{s_o}
- h_i, h_o: image and object heights [m]
> Negative $M$ means inverted. Real images come out inverted; virtual images stay upright.
@ P2*

= Focal length of a spherical mirror
$ f = \frac{R}{2}
- R: radius of curvature [m]
@ P2

= Lensmaker's equation
$ \frac{1}{f} = (n - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)
- R_1, R_2: radii of the two surfaces, positive if the center of curvature lies beyond the lens [m]
@ OLY

= Lenses in contact
$ \frac{1}{f_\text{eq}} = \frac{1}{f_1} + \frac{1}{f_2}, \qquad P = \frac{1}{f}
- P: optical power [diopters = m⁻¹]
> Powers add. That's why eyeglass prescriptions come in diopters.
@ OLY
? diopter

## Interference and diffraction

= Double-slit interference
$ d\sin\theta = m\lambda \;\text{(bright fringes)}
- d: slit spacing [m]
- m: fringe order [—]
@ P2*
? young's double slit

= Fringe positions for small angles
$ y_m = \frac{m\lambda L}{d}, \qquad \Delta y = \frac{\lambda L}{d}
- L: slit-to-screen distance [m]
- \Delta y: spacing between neighbouring bright fringes [m]
@ P2

= Diffraction grating
$ d\sin\theta = m\lambda
- d: line spacing, 1 / (lines per metre) [m]
> The same condition as the double slit, with far sharper bright lines.
@ P2*

= Single-slit minima
$ a\sin\theta = m\lambda, \quad m = \pm 1, \pm 2, \dots
- a: slit width [m]
> These are the dark fringes. The central bright fringe is twice as wide as the others.
@ P2 OLY
? diffraction

= Thin-film interference
$ 2nt = m\lambda \quad\text{or}\quad 2nt = \left(m + \tfrac{1}{2}\right)\lambda
- n: index of the film [—]
- t: film thickness [m]
> Count phase flips first: each reflection off a higher-index medium adds half a wavelength. One flip: $2nt = (m + \tfrac12)\lambda$ is bright. Zero or two flips: $2nt = m\lambda$ is bright.
@ P2 OLY
? soap bubble, oil film, anti-reflective coating

= Rayleigh criterion
$ \theta_\text{min} \approx 1.22\,\frac{\lambda}{D}
- D: aperture diameter [m]
> The smallest angle a circular aperture can resolve. Bigger telescopes see finer detail.
@ OLY
? resolution

## Polarization

= Malus's law
$ I = I_0\cos^2\theta
- \theta: angle between the light's polarization and the polarizer's axis
> Unpolarized light through a single polarizer keeps exactly half: $I = I_0/2$.
@ P2 OLY
? polarizer

## Light as an electromagnetic wave

= Speed of light
$ c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} = f\lambda
> Maxwell's discovery: two constants measured with magnets and capacitors give the speed of light.
@ P2 CE

= Field amplitudes in an EM wave
$ E = cB
@ CE OLY

= Intensity of an EM wave
$ I = \tfrac{1}{2} c\,\varepsilon_0 E_0^2 = \frac{E_0 B_0}{2\mu_0}
- E_0, B_0: peak field amplitudes [V/m, T]
@ OLY

= Poynting vector
$ \vec S = \frac{1}{\mu_0}\,\vec E\times\vec B
- \vec S: energy flux [W/m²]
@ OLY

= Radiation pressure
$ P_\text{rad} = \frac{I}{c} \;\text{(absorbed)}, \qquad P_\text{rad} = \frac{2I}{c} \;\text{(reflected)}
> Tiny but real. Solar sails depend on it.
@ OLY
`);
