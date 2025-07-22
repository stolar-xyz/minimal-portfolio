export const getIdFromLabel = (label: string, prefix = '') =>
  `${prefix}${label.toLowerCase().replace(/ /g, '-')}`;
