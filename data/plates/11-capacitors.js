Atlas.plate(String.raw`
# XI | capacitors | Conductors, Capacitors and Dielectrics
: Where charge gets stored. In electrostatic equilibrium, conductors make life simpler, not harder.

## Conductors in equilibrium

= Field inside a conductor
$ \vec E_\text{inside} = 0
> So any excess charge sits on the surface, the whole conductor is one equipotential, and the field just outside is perpendicular to the surface.
@ P2 CE
? electrostatic equilibrium, faraday cage

= Field just outside a conductor
$ E = \frac{\sigma}{\varepsilon_0}
- \sigma: local surface charge density [C/m²]
> Charge piles up where the surface curves most sharply, which is why lightning rods are pointed.
@ CE OLY

## Capacitance

= Capacitance
$ C = \frac{Q}{\Delta V}
- C: capacitance [F]
- Q: charge on either plate [C]
- \Delta V: potential difference between the plates [V]
> Set by geometry alone. $Q$ is the charge on one plate, not the total (which is zero).
@ P2* CE*

= Parallel-plate capacitor
$ C = \frac{\kappa\,\varepsilon_0 A}{d}
- \kappa: dielectric constant, 1 for vacuum [—]
- A: plate area [m²]
- d: plate separation [m]
@ P2* CE*

= Field between parallel plates
$ E = \frac{\sigma}{\varepsilon_0} = \frac{\Delta V}{d}
@ P2 CE

= Spherical capacitor
$ C = 4\pi\varepsilon_0\,\frac{ab}{b - a}
- a, b: inner and outer radii [m]
> Let $b \to \infty$ for an isolated sphere: $C = 4\pi\varepsilon_0 a$.
@ CE OLY

= Cylindrical capacitor
$ C = \frac{2\pi\varepsilon_0 L}{\ln(b/a)}
- L: length [m]
- a, b: inner and outer radii [m]
> A coaxial cable is one of these.
@ CE OLY
? coaxial cable

## Combining capacitors

= Capacitors in parallel
$ C_\text{eq} = \sum_i C_i
> Same voltage across each.
@ P2* CE*

= Capacitors in series
$ \frac{1}{C_\text{eq}} = \sum_i \frac{1}{C_i}
> Same charge on each. The equivalent is smaller than the smallest one.
@ P2* CE*

## Energy and dielectrics

= Energy stored in a capacitor
$ U_C = \tfrac{1}{2} Q\,\Delta V = \tfrac{1}{2} C(\Delta V)^2 = \frac{Q^2}{2C}
> Pick the form whose variable stays fixed. Battery still connected: $\Delta V$ fixed. Capacitor isolated: $Q$ fixed.
@ P2* CE*

= Energy density of an electric field
$ u_E = \tfrac{1}{2}\varepsilon_0 E^2
- u_E: energy per volume [J/m³]
@ CE OLY

= Effect of a dielectric
$ C = \kappa C_0, \qquad E = \frac{E_0}{\kappa}
> The dielectric's induced surface charge partly cancels the field inside it.
@ P2 CE
`);
