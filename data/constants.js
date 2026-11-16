/*
 * Constants, conversions and units.
 * Rows: [name, symbol (TeX), value, unit, exam value, note?]
 * Values use calculator notation (6.674e-11) and are rendered as
 * scientific notation; exam values are the rounded figures most
 * exams print or expect.
 */
window.Atlas = window.Atlas || {};

Atlas.constants = [
  {
    title: 'Fundamental constants',
    rows: [
      ['Speed of light in vacuum', 'c', '2.99792458e8', 'm/s', '3.00e8', 'Exact, by definition of the metre.'],
      ['Elementary charge', 'e', '1.602177e-19', 'C', '1.60e-19', 'Exact since 2019.'],
      ['Planck constant', 'h', '6.62607e-34', 'J·s', '6.63e-34'],
      ['Planck constant (eV)', 'h', '4.135668e-15', 'eV·s', '4.14e-15'],
      ['Reduced Planck constant', '\\hbar', '1.054572e-34', 'J·s', '1.05e-34'],
      ['Gravitational constant', 'G', '6.6743e-11', 'N·m²/kg²', '6.67e-11'],
      ['Coulomb constant', 'k = \\tfrac{1}{4\\pi\\varepsilon_0}', '8.987552e9', 'N·m²/C²', '9.0e9'],
      ['Vacuum permittivity', '\\varepsilon_0', '8.854188e-12', 'C²/(N·m²)', '8.85e-12'],
      ['Vacuum permeability', '\\mu_0', '1.256637e-6', 'T·m/A', '4π × 10⁻⁷', 'Still 4π × 10⁻⁷ to nine digits.'],
      ['Boltzmann constant', 'k_B', '1.380649e-23', 'J/K', '1.38e-23'],
      ['Boltzmann constant (eV)', 'k_B', '8.617333e-5', 'eV/K', '8.62e-5'],
      ['Avogadro constant', 'N_A', '6.022141e23', 'mol⁻¹', '6.02e23'],
      ['Ideal gas constant', 'R', '8.314463', 'J/(mol·K)', '8.31'],
      ['Stefan–Boltzmann constant', '\\sigma', '5.670374e-8', 'W/(m²·K⁴)', '5.67e-8'],
    ],
  },
  {
    title: 'Particles',
    rows: [
      ['Electron mass', 'm_e', '9.109384e-31', 'kg', '9.11e-31'],
      ['Proton mass', 'm_p', '1.672622e-27', 'kg', '1.67e-27'],
      ['Neutron mass', 'm_n', '1.674927e-27', 'kg', '1.67e-27'],
      ['Atomic mass unit', 'u', '1.660539e-27', 'kg', '1.66e-27'],
      ['Atomic mass unit (energy)', 'u\\,c^2', '931.494', 'MeV', '931.5'],
      ['Electron rest energy', 'm_e c^2', '0.510999', 'MeV', '0.511'],
      ['Proton rest energy', 'm_p c^2', '938.272', 'MeV', '938'],
    ],
  },
  {
    title: 'Atomic & quantum shortcuts',
    rows: [
      ['Planck × light speed', 'hc', '1239.84', 'eV·nm', '1240', 'Photon energy in eV = 1240 / λ in nm.'],
      ['Ionization energy of hydrogen', 'E_1', '13.6057', 'eV', '13.6'],
      ['Bohr radius', 'a_0', '5.291772e-11', 'm', '5.29e-11'],
      ['Rydberg constant', 'R_\\infty', '1.097373e7', 'm⁻¹', '1.097e7'],
      ['Electron Compton wavelength', '\\tfrac{h}{m_e c}', '2.426310e-12', 'm', '2.43e-12'],
      ['Wien displacement constant', 'b', '2.897772e-3', 'm·K', '2.90e-3'],
      ['Fine-structure constant', '\\alpha', '7.297353e-3', '—', '1/137'],
    ],
  },
  {
    title: 'Earth, sky & everyday',
    rows: [
      ['Gravitational field at Earth’s surface', 'g', '9.80665', 'm/s²', '9.8', 'AP tables list 9.8; F=ma instructions usually say 10 N/kg.'],
      ['Mass of the Earth', 'M_\\oplus', '5.972e24', 'kg', '5.97e24'],
      ['Mean radius of the Earth', 'R_\\oplus', '6.371e6', 'm', '6.37e6'],
      ['Mass of the Moon', 'M_\\text{Moon}', '7.342e22', 'kg', '7.35e22'],
      ['Earth–Moon distance', 'r_\\text{EM}', '3.844e8', 'm', '3.84e8'],
      ['Mass of the Sun', 'M_\\odot', '1.989e30', 'kg', '1.99e30'],
      ['Earth–Sun distance (1 AU)', 'r_\\text{ES}', '1.495979e11', 'm', '1.50e11'],
      ['Standard atmospheric pressure', 'P_\\text{atm}', '1.01325e5', 'Pa', '1.0e5'],
      ['Density of water', '\\rho_\\text{w}', '1000', 'kg/m³', '1000'],
      ['Density of air (20 °C)', '\\rho_\\text{air}', '1.204', 'kg/m³', '1.2'],
      ['Speed of sound in air (20 °C)', 'v_s', '343', 'm/s', '343'],
      ['Specific heat of water', 'c_\\text{w}', '4186', 'J/(kg·K)', '4190'],
    ],
  },
  {
    title: 'Conversions',
    rows: [
      ['Electron-volt', '1\\ \\text{eV}', '1.602177e-19', 'J', '1.60e-19'],
      ['Atmosphere', '1\\ \\text{atm}', '1.01325e5', 'Pa', '1.01e5'],
      ['Calorie', '1\\ \\text{cal}', '4.184', 'J', '4.18'],
      ['Kilowatt-hour', '1\\ \\text{kWh}', '3.6e6', 'J', '3.6e6'],
      ['Light-year', '1\\ \\text{ly}', '9.4607e15', 'm', '9.46e15'],
      ['Ångström', '1\\ \\text{Å}', '1e-10', 'm', '1e-10'],
      ['Fermi (femtometre)', '1\\ \\text{fm}', '1e-15', 'm', '1e-15'],
      ['Litre', '1\\ \\text{L}', '1e-3', 'm³', '1e-3'],
      ['Absolute zero', '0\\ \\text{K}', '-273.15', '°C', '-273'],
      ['Revolution', '1\\ \\text{rev}', '6.283185', 'rad', '2π'],
    ],
  },
];

Atlas.prefixes = [
  ['tera', 'T', '12'],
  ['giga', 'G', '9'],
  ['mega', 'M', '6'],
  ['kilo', 'k', '3'],
  ['centi', 'c', '-2'],
  ['milli', 'm', '-3'],
  ['micro', 'μ', '-6'],
  ['nano', 'n', '-9'],
  ['pico', 'p', '-12'],
  ['femto', 'f', '-15'],
];

// [unit, symbol, in base units, a handy equivalent]
Atlas.units = [
  ['newton', 'N', 'kg·m·s⁻²', 'force'],
  ['joule', 'J', 'kg·m²·s⁻²', 'N·m'],
  ['watt', 'W', 'kg·m²·s⁻³', 'J/s'],
  ['pascal', 'Pa', 'kg·m⁻¹·s⁻²', 'N/m²'],
  ['coulomb', 'C', 'A·s', '—'],
  ['volt', 'V', 'kg·m²·s⁻³·A⁻¹', 'J/C = W/A'],
  ['ohm', 'Ω', 'kg·m²·s⁻³·A⁻²', 'V/A'],
  ['farad', 'F', 'kg⁻¹·m⁻²·s⁴·A²', 'C/V'],
  ['tesla', 'T', 'kg·s⁻²·A⁻¹', 'N/(A·m)'],
  ['weber', 'Wb', 'kg·m²·s⁻²·A⁻¹', 'T·m²'],
  ['henry', 'H', 'kg·m²·s⁻²·A⁻²', 'V·s/A = Wb/A'],
  ['hertz', 'Hz', 's⁻¹', 'cycles/s'],
  ['becquerel', 'Bq', 's⁻¹', 'decays/s'],
];
