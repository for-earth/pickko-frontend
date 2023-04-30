export const colors = {
  white: '#ffffff',
  black: '#000000',
  lemon: '#f4eb5d',
  salmon: '#ff9356',
  berrymilk: '#efc3bc',
  cloud: '#acbcd9',
  moss: '#b9c79a',
  mustard: '#f2cd80',
  forest: '#3c4f2c',
  indigo: '#61609a',
  yam: '#a05595',
  brick: '#ba4c4a',
} as const;

export const effects = {
  boxShadow: `0px 2px 0px ${colors.black}`,
} as const;
