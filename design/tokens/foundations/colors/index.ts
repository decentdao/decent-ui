import tokenData from './design-tokens-colors.json';

const { tokens } = tokenData;
const { color } = tokens;
const { Primary, Secondary, Neutral, Utility, Gradients } = color;

const primaries = { ...Primary }
const secondaries = { ...Secondary }
const neutral = { ...Neutral }
const utilities = { ...Utility }
const gradients = { ...Gradients }

// const utilities = {
//     neutral: {
//         '50': '#f8f7f7',
//         '100': '#e8e7e5',
//         '200': '#dddcd9',
//         '300': '#ceccc7',
//         '400': '#c5c2bd',
//         '500': '#b6b3ac',
//         '600': '#a6a39d',
//         '700': '#817f7a',
//         '800': '#64625f',
//         '900': '#4c4b48'
//     },
//     'alert-red': {
//         'light': '#fde9e9',
//         'light-hover': '#fcdedd',
//         'light-active': '#f9bab9',
//         'normal': '#ec221e',
//         'normal-hover': '#d41f1b',
//         'normal-active': '#bd1b18',
//         'dark': '#b11a17',
//         'dark-hover': '#8e1412',
//         'dark-active': '#6a0f0d',
//         'darker': '#530c0b'
//     }
// }

// const gradients = {
//     gradients: {
//         'background': 'linear-gradient(180deg, #272520 0%, #1B1A18 100%)',
//         'cards': 'linear-gradient(180deg, #403824 0%, #272520 100%)',
//         'glow': 'linear-gradient(180deg, #FABD2E 0%, #FFD36E 100%)'
//     },
// }

const colors = {
    ...primaries,
    ...secondaries,
    ...neutral,
    ...utilities,
    ...gradients
}

export type Colors = typeof colors;
export default colors;
