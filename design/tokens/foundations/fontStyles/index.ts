import tokenData from '../../design-tokens-export.json'

const { font } = tokenData

const SANS: any = Object.entries(font.sans).map((style) => {
    return Object.entries(style[1]).map((weight) => {
        return `${style[0]}-${weight[0]}`;
    })
})

console.log("SANS?? ", SANS.flat());

export default {
    sans: [ ...SANS.flat() ],
    mono: { ...font.mono }
}
