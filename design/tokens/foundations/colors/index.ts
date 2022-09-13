import tokenData from '../../color-tokens.json'

const { Colors } = tokenData;
const { Primary, Secondary, Neutral, Utility } = Colors;

const primaries = { ...Primary }
const secondaries = { ...Secondary }
const neutrals = { ...Neutral }
const utilities = { ...Utility }

const colors = {
    ...primaries,
    ...secondaries,
    ...neutrals,
    ...utilities,
}

export type Colors = typeof colors;
export default colors;
