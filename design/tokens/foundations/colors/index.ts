import tokenData from './design-tokens-colors.json';

const { tokens } = tokenData;
const { color } = tokens;

const colorsNew = Object.entries(color).map(([colorCategory, values], index) => {
    console.log("FOOP: ", colorCategory, values, index)
});

console.log("COLORS NEW: ", colorsNew);

const primaries = {
    'black': {
        '50': '#e9e9e9',
        '100': '#bababa',
        '200': '#999999',
        '300': '#6a6a6a',
        '400': '#4d4d4d',
        '500': '#212121',
        '600': '#1e1e1e',
        '600-faded': 'rgba(27, 26, 26, 0.8)', // @todo update to hex value
        '700': '#171717',
        '800': '#121212',
        '900': '#0e0e0e'
    },
    gold: {
        '50': '#fff8ea',
        '100': '#FDEBBE',
        '200': '#fde19f',
        '300': '#fcd373',
        '400': '#fbca58',
        '500': '#fabd2e',
        '500-hover': '#e1aa29',
        '500-active': '#c89725',
        '600': '#e4ac2a',
        '700': '#b28621',
        '800': '#8a6819',
        '900': '#694f13',
    },
}

const secondaries = {
    'sand': {
        '50': '#fffbf3',
        '100': '#fff4d9',
        '200': '#ffeec7',
        '300': '#ffe6ad',
        '400': '#ffe19d',
        '500': '#ffda85',
        '600': '#e8c679',
        '700': '#b59b5e',
        '800': '#8c7849',
        '900': '#6b5c38'
    },
    'drab': {
        '50': '#f1efeb',
        '100': '#d4cfc1',
        '200': '#bfb7a3',
        '300': '#a2967a',
        '400': '#908260',
        '500': '#746338',
        '600': '#6a5a33',
        '700': '#524628',
        '800': '#40361f',
        '900': '#312a18'
    },
    'chocolate': {
        '50': '#ebebea',
        '100': '#c1c0bf',
        '200': '#a3a29f',
        '300': '#787774',
        '400': '#5e5d59',
        '500': '#36342f',
        '600': '#312f2b',
        '700': '#262521',
        '800': '#1e1d1a',
        '900': '#171614'
    },
}

const utilities = {
    neutral: {
        '50': '#f8f7f7',
        '100': '#e8e7e5',
        '200': '#dddcd9',
        '300': '#ceccc7',
        '400': '#c5c2bd',
        '500': '#b6b3ac',
        '600': '#a6a39d',
        '700': '#817f7a',
        '800': '#64625f',
        '900': '#4c4b48'
    },
    'alert-red': {
        'light': '#fde9e9',
        'light-hover': '#fcdedd',
        'light-active': '#f9bab9',
        'normal': '#ec221e',
        'normal-hover': '#d41f1b',
        'normal-active': '#bd1b18',
        'dark': '#b11a17',
        'dark-hover': '#8e1412',
        'dark-active': '#6a0f0d',
        'darker': '#530c0b'
    }
}

const gradients = {
    gradients: {
        'background': 'linear-gradient(180deg, #272520 0%, #1B1A18 100%)',
        'cards': 'linear-gradient(180deg, #403824 0%, #272520 100%)',
        'glow': 'linear-gradient(180deg, #FABD2E 0%, #FFD36E 100%)'
    },
}

const colors = {
    ...primaries,
    ...secondaries,
    ...utilities,
    ...gradients
}

export type Colors = typeof colors;
export default colors;
