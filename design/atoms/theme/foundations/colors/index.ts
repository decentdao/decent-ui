const colors = {
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
  'chocolate': {
    '400': '#272520',
    '500': '#36342f',
  },
  'drab': {
    '500': '#746338'
  },
  gold: {
    '300': '#FFD26A',
    '500': '#FABD2E',
    '600': '#AF8420'
  },
  gradients: {
    'background': 'linear-gradient(180deg, #272520 0%, #1B1A18 100%)',
    'cards': 'linear-gradient(180deg, #403824 0%, #272520 100%)',
    'glow': 'linear-gradient(180deg, #FABD2E 0%, #FFD36E 100%)'
  },
  neutral: {
    'light-gray': "#F5F5F5",
    'medium-gray': "#B6B3AC"
  },
  'sand': {
    '500': '#FFDA85',
    '600': '#E5BE63'
  },
  'utility': {
    'error-red': '#FF7373'
  },
  'call-to-action': {
    'cta-teal': '#00E69E'
  }
}

export type Colors = typeof colors;
export default colors;
