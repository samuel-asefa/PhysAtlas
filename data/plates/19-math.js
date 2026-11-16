Atlas.plate(String.raw`
# XIX | math | Mathematical Toolkit
: The math that physics problems quietly assume you already have ready.

## Vectors

= Vector components
$ A_x = A\cos\theta, \qquad A_y = A\sin\theta, \qquad A = \sqrt{A_x^2 + A_y^2}
- \theta: angle measured from the $+x$ axis
> If the angle is measured from anywhere else, redraw the triangle rather than trusting the formula.
@ P1 P2 CM CE
? resolving vectors, magnitude

= Dot product
$ \vec A\cdot\vec B = AB\cos\theta = A_xB_x + A_yB_y + A_zB_z
> Behind work, power, flux and dipole energy. Zero when the vectors are perpendicular.
@ P1 CM CE
? scalar product

= Cross product
$ |\vec A\times\vec B| = AB\sin\theta
$ \vec A\times\vec B = \begin{vmatrix} \hat\imath & \hat\jmath & \hat k \\ A_x & A_y & A_z \\ B_x & B_y & B_z \end{vmatrix}
> Behind torque, angular momentum and magnetic force. $\hat\imath\times\hat\jmath = \hat k$ and cyclic. Zero for parallel vectors.
@ P2 CM CE
? vector product, right-hand rule

## Approximations

= Small-angle approximations
$ \sin\theta \approx \tan\theta \approx \theta, \qquad \cos\theta \approx 1 - \frac{\theta^2}{2}
> Radians only. $\sin\theta \approx \theta$ stays within 1% up to about 14°; $\tan\theta \approx \theta$ up to about 10°.
@ P1 CM OLY

= Binomial approximation
$ (1 + x)^n \approx 1 + n x \quad (|x| \ll 1)
> The single most useful trick on olympiad problems. Example: $\left(1 - v^2/c^2\right)^{-1/2} \approx 1 + \tfrac12 v^2/c^2$.
@ CM OLY

= Taylor series
$ f(a + h) \approx f(a) + f'(a)\,h + \tfrac{1}{2} f''(a)\,h^2
- h: a small step away from $a$
> Behind every small-oscillation and "for small $x$" problem.
@ OLY

= Exponential and log approximations
$ e^x \approx 1 + x, \qquad \ln(1 + x) \approx x \quad (|x| \ll 1)
@ OLY

## Calculus

= Power rule
$ \frac{d}{dx}x^n = n x^{n-1}, \qquad \int x^n\,dx = \frac{x^{n+1}}{n+1} + C \quad (n \ne -1)
@ CM CE

= Exponentials and logarithms
$ \frac{d}{dx}e^{ax} = a\, e^{ax}, \qquad \int\frac{dx}{x} = \ln|x| + C
@ CM CE

= Trigonometric derivatives
$ \frac{d}{dx}\sin(ax) = a\cos(ax), \qquad \frac{d}{dx}\cos(ax) = -a\sin(ax)
@ CM CE

= Chain and product rules
$ \frac{d}{dx}f\big(g(x)\big) = f'\big(g(x)\big)\,g'(x), \qquad (fg)' = f'g + fg'
@ CM CE

= Exponential decay equation
$ \frac{dy}{dt} = -\frac{y}{\tau} \;\Rightarrow\; y = y_0\, e^{-t/\tau}
> One solution, many costumes: RC and RL circuits, linear drag, radioactive decay, Newton's law of cooling.
@ CM CE OLY
? first-order differential equation

= Harmonic oscillator equation
$ \frac{d^2x}{dt^2} = -\omega^2 x \;\Rightarrow\; x = A\cos(\omega t + \varphi)
@ CM CE OLY
? second-order differential equation

= Separation of variables
$ \frac{dy}{dx} = f(x)\,g(y) \;\Rightarrow\; \int\frac{dy}{g(y)} = \int f(x)\,dx
@ CM CE OLY

## Trigonometry and geometry

= Pythagorean identity
$ \sin^2\theta + \cos^2\theta = 1
@ P1 P2 CM CE

= Double-angle formulas
$ \sin 2\theta = 2\sin\theta\cos\theta, \qquad \cos 2\theta = \cos^2\theta - \sin^2\theta
> Where the $\sin 2\theta$ in the projectile range formula comes from.
@ P1 P2 CM CE

= Law of cosines
$ c^2 = a^2 + b^2 - 2ab\cos C
> Adding two vectors that aren't perpendicular.
@ P1 P2 CM CE

= Law of sines
$ \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}
@ P1 P2 CM CE

= Circles and spheres
$ C = 2\pi r, \qquad A = \pi r^2
$ A_\text{sphere} = 4\pi r^2, \qquad V_\text{sphere} = \tfrac{4}{3}\pi r^3
@ P1 P2 CM CE
? area, volume, circumference

= Cylinders
$ V = \pi r^2 h, \qquad A_\text{side} = 2\pi r h
@ P1 P2 CM CE

= Quadratic formula
$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
> In kinematics, a negative root usually means "before the clock started." Check which one makes sense.
@ P1 P2 CM CE

= Logarithm rules
$ \log(ab) = \log a + \log b, \qquad \log a^n = n\log a, \qquad \log_{10} x = \frac{\ln x}{\ln 10}
@ P2 CM CE

## Measurement and uncertainty

= Uncertainty in sums and differences
$ \delta q = \sqrt{(\delta a)^2 + (\delta b)^2} \qquad \text{for } q = a \pm b
> Absolute uncertainties add in quadrature.
@ P1 P2 CM CE OLY
? error propagation

= Uncertainty in products and quotients
$ \frac{\delta q}{|q|} = \sqrt{\left(\frac{\delta a}{a}\right)^2 + \left(\frac{\delta b}{b}\right)^2} \qquad \text{for } q = ab \text{ or } a/b
> Fractional uncertainties add in quadrature.
@ P1 P2 CM CE OLY
? error propagation

= Uncertainty in a power
$ \frac{\delta q}{|q|} = |n|\,\frac{\delta a}{|a|} \qquad \text{for } q = a^n
@ P1 P2 CM CE OLY
? error propagation

= Linearizing data
$ y = m x + b
> Plot whatever makes the expected relationship a straight line. For a pendulum, graph $T^2$ against $\ell$ and the slope is $4\pi^2/g$. AP lab questions love this.
@ P1 P2 CM CE OLY
? graphing, slope, best-fit line
`);
