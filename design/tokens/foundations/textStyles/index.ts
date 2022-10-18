import tokenData from '../../design-tokens-export.json'

const { font } = tokenData

const SANS: { [key: string]: {} } = {};
const MONO: { [key: string]: {} } = {};

// @TODO
// This can probably be refactored into a single method to cover all font types?
// - SR
Object.entries(font.sans).flatMap((style) => {
    const sansFonts = Object.entries(style[1]).map((weight) => {
        const fontStyle = `${style[0]}-${weight[0]}`;
        const { fontSize, fontFamily, fontWeight, letterSpacing, lineHeight } = weight[1].value;
        return SANS[fontStyle] = {
            fontSize,
            lineHeight: "1.5",
            letterSpacing,
            fontFamily,
            fontWeight
        }
    });
    // @TODO - It might be handy to sort() these?? - SR
    return sansFonts;
})

Object.entries(font.mono).flatMap((style) => {
    const monoFonts = Object.entries(style[1]).map((weight) => {
        const fontStyle = `${style[0]}-${weight[0]}`;
        const { fontSize, fontFamily, fontWeight, letterSpacing } = weight[1].value;
        return MONO[fontStyle] = {
            fontSize,
            lineHeight: "1.5",
            letterSpacing,
            fontFamily,
            fontWeight
        }
    });
    return monoFonts;
})

export default {
    ...SANS,
    ...MONO
}
