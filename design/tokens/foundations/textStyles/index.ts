import { parseTypography } from "../../../helpers"
import { parseTypographyTokens } from "./parseTypography"
import tokenData from "../../design-tokens-export.json"

const {
  font: { sans, mono },
} = tokenData

export const sansTypography: { [key: string]: { [key: string]: {} } } = parseTypography(sans)
export const monoTypography: { [key: string]: { [key: string]: {} } } = parseTypography(mono)

export const typography = parseTypographyTokens()

export default {
  ...typography,
  ...sansTypography,
  ...monoTypography,
}
