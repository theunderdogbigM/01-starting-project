import guards from './assets/closedguard.png';
import submissions from './assets/rearnakedchoke.png';
import escapes from './assets/escapes.png';
import throws from './assets/throws.png';

export const CORE_CONCEPTS = [
  {
    image: guards,
    title: 'Guards',
    description:
      'Learn the most utilized bjj guards',
  },
  {
    image: submissions,
    title: 'Submissions',
    description:
      'Diffrent chockes for different folks',
  },
  {
    image: escapes,
    title: 'Escapes',
    description:
      'Learn to escape different uncomfortable positions',
  },
  {
    image: throws,
    title: 'Throws',
    description:
      'Make him wish he stayed dow!',
  },
];

export const EXAMPLES = {
  guards: {
    title: 'Guards',
    description:
      'Guards are posistions to keep your oponent susceptible to sweeps and/or submissions',
    comment: `
closed guards, open guards sitting guards`,
  },
  submissions: {
    title: 'Submissions',
    description:
      'Submissions are your goal in bjj!',
    comment: `chocke him daddy!`,
  },

  escapes: {
    title: 'Escapes',
    description:
      'Escapes are a means to get out of uncomfortable positions',
    comment: `Get out quick!`},
  throws: {
    title: 'Throws',
    description:
      'Throws are a means to keep a good man down',
    comment: `Let the bodies hit the floor!`,
  },

};