import { parseTypography } from '../../../helpers';
import tokenData from '../../design-tokens-export.json'

const { font: { sans, mono } } = tokenData

export const sansTypography: { [key: string]: { [key: string]: {} } } = parseTypography(sans)
export const monoTypography: { [key: string]: { [key: string]: {} } } = parseTypography(mono)

// @todo add support for v1 typography
// const v1Font: { [key: string]: { [key: string]: {} } } = parsedTypographyV1()

export default {
    ...sansTypography,
    ...monoTypography
}
