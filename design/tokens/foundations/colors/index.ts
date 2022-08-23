// import tokenData from './design-tokens-colors.json';
import tokenData from '../../design-tokens-export-2.json'

// const { tokens } = tokenData;
const { color } = tokenData;
const { primary, secondary, neutral, utility } = color;

const primaries = { ...primary }
const secondaries = { ...secondary }
const neutrals = { ...neutral }
const utilities = { ...utility }
// const gradients = { ...gradient }

const colors = {
    ...primaries,
    ...secondaries,
    ...neutrals,
    ...utilities,
}

export type Colors = typeof colors;
export default colors;
