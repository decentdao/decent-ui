import tokenData from '../../design-tokens-export.json'

const { font } = tokenData

console.log("FOOP: FONT ", font);

export default {
    sans: {...font.sans },
    mono: { ...font.mono }
}
