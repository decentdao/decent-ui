import { parseColors } from '../../../helpers';
import tokenData from '../../design-tokens-export.json'

const { color } = tokenData;
const { Primary, Secondary, Neutral, Utility, UI } = color;

const primaries = parseColors({ ...Primary })
const secondaries = parseColors({ ...Secondary })
const neutrals = parseColors({ ...Neutral })
const utilities = parseColors({ ...Utility })
const uiColors = parseColors({ ...UI })

const colors = {
    ...primaries,
    ...secondaries,
    ...neutrals,
    ...uiColors,
    ...utilities
}

export type Colors = typeof colors;
export default colors;
