/*
 * Courses ("routes" through the atlas).
 * Unit lists follow the 2024–25 College Board course frameworks for the
 * AP courses. Each stop points at one or more plates (plate id), or at a
 * single section ("plate:section-slug").
 */
window.Atlas = window.Atlas || {};

Atlas.courses = {
  P1: {
    abbr: 'AP1',
    label: 'AP Physics 1',
    name: 'AP Physics 1',
    sub: 'Algebra-based mechanics, from kinematics to fluids.',
    sheet: true,
    stops: [
      ['1', 'Kinematics', ['kinematics']],
      ['2', 'Force and Translational Dynamics', ['dynamics', 'gravitation']],
      ['3', 'Work, Energy, and Power', ['energy']],
      ['4', 'Linear Momentum', ['momentum']],
      ['5', 'Torque and Rotational Dynamics', ['rotation']],
      ['6', 'Energy and Momentum of Rotating Systems', ['rotation:rotational-energy-and-rolling', 'rotation:angular-momentum', 'gravitation:orbits']],
      ['7', 'Oscillations', ['oscillations']],
      ['8', 'Fluids', ['fluids']],
    ],
  },
  P2: {
    abbr: 'AP2',
    label: 'AP Physics 2',
    name: 'AP Physics 2',
    sub: 'Algebra-based thermodynamics, E&M, optics and modern physics.',
    sheet: true,
    stops: [
      ['9', 'Thermodynamics', ['thermodynamics']],
      ['10', 'Electric Force, Field, and Potential', ['electrostatics']],
      ['11', 'Electric Circuits', ['circuits', 'capacitors']],
      ['12', 'Magnetism and Electromagnetism', ['magnetism', 'induction']],
      ['13', 'Geometric Optics', ['optics']],
      ['14', 'Waves, Sound, and Physical Optics', ['waves', 'optics:interference-and-diffraction']],
      ['15', 'Modern Physics', ['modern']],
    ],
  },
  CM: {
    abbr: 'C·M',
    label: 'C: Mechanics',
    name: 'AP Physics C: Mechanics',
    sub: 'Calculus-based mechanics. Same map as AP 1, with integrals.',
    sheet: true,
    stops: [
      ['1', 'Kinematics', ['kinematics']],
      ['2', 'Force and Translational Dynamics', ['dynamics', 'gravitation']],
      ['3', 'Work, Energy, and Power', ['energy']],
      ['4', 'Linear Momentum', ['momentum']],
      ['5', 'Torque and Rotational Dynamics', ['rotation']],
      ['6', 'Energy and Momentum of Rotating Systems', ['rotation:rotational-energy-and-rolling', 'rotation:angular-momentum', 'gravitation:orbits']],
      ['7', 'Oscillations', ['oscillations']],
    ],
  },
  CE: {
    abbr: 'C·E',
    label: 'C: E&M',
    name: 'AP Physics C: Electricity & Magnetism',
    sub: 'Calculus-based electricity and magnetism, Gauss to Faraday.',
    sheet: true,
    stops: [
      ['8', "Electric Charges, Fields, and Gauss's Law", ['electrostatics']],
      ['9', 'Electric Potential', ['electrostatics:electric-potential-and-energy']],
      ['10', 'Conductors and Capacitors', ['capacitors']],
      ['11', 'Electric Circuits', ['circuits']],
      ['12', 'Magnetic Fields and Electromagnetism', ['magnetism']],
      ['13', 'Electromagnetic Induction', ['induction']],
    ],
  },
  MOD: {
    abbr: 'MOD',
    label: 'Modern',
    name: 'Modern Physics',
    sub: 'A first course past Newton: relativity, quanta, atoms, nuclei.',
    sheet: false,
    stops: [
      ['A', 'Special relativity', ['modern:special-relativity']],
      ['B', 'Light as particles', ['modern:photons']],
      ['C', 'Matter as waves', ['modern:matter-waves-and-uncertainty']],
      ['D', 'The atom', ['modern:atomic-structure']],
      ['E', 'Wave mechanics', ['modern:quantum-mechanics']],
      ['F', 'The nucleus', ['modern:nuclear-physics']],
      ['G', 'Thermal radiation', ['thermodynamics:heat-transfer']],
    ],
  },
  OLY: {
    abbr: 'OLY',
    label: 'Olympiad',
    name: 'Olympiad · F=ma & USAPhO',
    sub: 'The extras beyond AP. F=ma is mechanics only; USAPhO is everything.',
    sheet: false,
    stops: [
      ['F', 'F=ma: mechanics in depth', ['kinematics', 'dynamics', 'energy', 'momentum', 'rotation', 'gravitation', 'oscillations']],
      ['F', 'F=ma: fluids', ['fluids']],
      ['U', 'USAPhO: thermal physics', ['thermodynamics']],
      ['U', 'USAPhO: electricity & magnetism', ['electrostatics', 'capacitors', 'circuits', 'magnetism', 'induction']],
      ['U', 'USAPhO: waves, optics & modern', ['waves', 'optics', 'modern']],
      ['★', 'Toolkit for both', ['olympiad', 'math']],
    ],
  },
};
