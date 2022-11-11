import tokenData from '../../design-tokens-export.json'

const { font } = tokenData

const SANS: { [key: string]: {} } = {};
const MONO: { [key: string]: {} } = {};

// @TODO
// This can probably be refactored into a single method to cover all font types?
// - SR
Object.entries(font.sans).flatMap((style) => {
    Object.entries(style[1]).map((weight) => {
        const fontStyle = `${style[0]}-${weight[0]}`;
        const { fontSize, fontFamily, fontWeight, letterSpacing } = weight[1].value;
        SANS[fontStyle] = {
            fontSize,
            lineHeight: "1.5",
            letterSpacing,
            fontFamily,
            fontWeight
        }
    });
    // @TODO - It might be handy to sort() these?? - SR
})

Object.entries(font.mono).flatMap((style) => {
    Object.entries(style[1]).map((weight) => {
        const fontStyle = `${style[0]}-${weight[0]}`;
        const { fontSize, fontFamily, fontWeight, letterSpacing } = weight[1].value;
        MONO[fontStyle] = {
            fontSize,
            lineHeight: "1.5",
            letterSpacing,
            fontFamily,
            fontWeight
        }
    });
})

export default {
    ...SANS,
    ...MONO
}
