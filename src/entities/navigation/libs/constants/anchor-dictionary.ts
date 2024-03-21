const DICTIONARY = {
  AboutUs: {
    label: 'About Us',
    path: '#about-us',
  },
  Advantages: {
    label: 'Advantages',
    path: '#advantages',
  },
  ProductOptions: {
    label: 'Product Options',
    path: '#product-options',
  },
  Platforms: {
    label: 'Platforms',
    path: '#platforms',
  },
  Statistics: {
    label: 'Statistics',
    path: '#statistics',
  },
} as const;

// const asArray = () => {
//   return Object.values(DICTIONARY).map((v) => v);
// };

export const ANCHOR_DICTIONARY = {
  ...DICTIONARY,
  get asArray(): Array<(typeof DICTIONARY)[keyof typeof DICTIONARY]> {
    return Object.values(DICTIONARY);
  },
} as const;
