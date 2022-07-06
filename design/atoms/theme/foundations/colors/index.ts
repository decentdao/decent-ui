const colors = {
  neutral: {
    'light-gray': "#F5F5F5",
    'medium-gray': "#B6B3AC"
  },
  gold: {
    '300': '#FFD26A',
    '500': '#FABD2E',
    '600': '#AF8420'
  },
  'chocolate': {
    '400': '#272520',
    '500': '#36342f',
  },
  'drab': {
    '500': '#746338'
  },
  'sand': {
    '500': '#FFDA85',
    '600': '#E5BE63'
  },
  'black': {
    '100': '#606060',
    '200': '#484848',
    '300': '#393939',
    '400': '#2C2C2C',
    '500': '#212121',
    '600': '#1B1A1A',
    '600-faded': 'rgba(27, 26, 26, 0.8)', // @todo update to hex value
    '700': '#161616',
    '800': '#0D0C0C',
  },
  // @todo gradient colors missing naming
  gradients: {
    'background': 'linear(180deg, chocolate.400 0%, #1B1A18 100%)',
    'cards': 'linear(180deg, #403824 0%, chocolate.400 100%)',
    'glow': 'linear(180deg, gold.500 0%, #FFD36E 100%)'
  },
  'utility': {
    'error-red': '#FF7373'
  }
}

export type Colors = typeof colors;
export default colors;
