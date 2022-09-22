import { parseColors } from '../../../helpers';
import tokenData from '../../design-tokens-export.json'

const { color } = tokenData;
const { primary, secondary, neutral, utility } = color;

const primaries = parseColors({...primary})
const secondaries = parseColors({ ...secondary })
const neutrals = parseColors({ ...neutral })
const utilities = parseColors({ ...utility })

const colors = {
    ...primaries,
    ...secondaries,
    ...neutrals,
    ...utilities,
}

export type Colors = typeof colors;
export default colors;
