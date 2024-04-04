import { parseColors } from '../../../helpers';
import tokenData from '../../design-tokens-export.json'
import { parseColorTokens } from './parseColors';

const { color } = tokenData;
const { primary, secondary, neutral, utility, ui } = color;
const primaries = parseColors({ ...primary })
const secondaries = parseColors({ ...secondary })
const neutrals = parseColors({ ...neutral })
const utilities = parseColors({ ...utility })
const uiColors = parseColors({ ...ui })

// @todo add support for v1 colors
// @todo remove above, uncomment below and speard into colors
// const { primary, secondary, neutral, utility, ui, gradients } = parsedColorsV1()
const colorsv1 = parseColorTokens()
const colors = {
    ...primaries,
    ...secondaries,
    ...neutrals,
    ...uiColors,
    ...utilities,
    ...colorsv1
}

export type Colors = typeof colors;
export default colors;
