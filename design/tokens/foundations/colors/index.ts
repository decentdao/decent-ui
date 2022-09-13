import { parseColors } from '../../../helpers';
import tokenData from '../../color-tokens.json'

const { Colors } = tokenData;
const { Primary, Secondary, Neutral, Utility } = Colors;

const primaries = parseColors({...Primary})
const secondaries = parseColors({ ...Secondary })
const neutrals = parseColors({ ...Neutral })
const utilities = parseColors({ ...Utility })

const colors = {
    ...primaries,
    ...secondaries,
    ...neutrals,
    ...utilities,
}

export type Colors = typeof colors;
export default colors;
