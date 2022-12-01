import { defineStyle } from '@chakra-ui/react'


const paddingBase = { px: '1rem'}
const paddingAddonLeft = { pl: '2rem', pr: '1rem'}
const paddingAddonRight = { pl: '1rem', pr: '4rem'}

const baseStyle = {
  apply: 'text-base-mono-semibold',
  height: '2.5rem',
  py: '1rem',
  _placeholder: {
    textStyle: 'text-base-mono-medium'
  },
}

const xlStyle = {
  apply: 'text-xl-mono-semibold',
  py: '0.5rem',
  h: '4.375rem',
  _placeholder: {
    textStyle: 'text-xl-mono-medium',
    lineHeight: '24px',
  },
}

const base = defineStyle({
  ...baseStyle,
  ...paddingBase
})

const baseAddonLeft = defineStyle({
  ...baseStyle,
  ...paddingAddonLeft
})
const baseAddonRight = defineStyle({
  ...baseStyle,
  ...paddingAddonRight,
})

const baseWithAddons = defineStyle({
  ...baseStyle,
  ...paddingAddonRight,
  ...paddingAddonLeft
})

const xl = defineStyle({
  ...xlStyle,
  ...paddingBase
})

const xlAddonLeft = defineStyle({
  ...xlStyle,
  ...paddingAddonLeft
})
const xlAddonRight = defineStyle({
  ...xlStyle,
  ...paddingAddonRight
})

const xlWithAddons = defineStyle({
  ...xlStyle,
  ...paddingAddonRight,
  ...paddingAddonLeft
})

const sizes = {
  base,
  baseAddonLeft,
  baseAddonRight,
  baseWithAddons,
  xl,
  xlAddonLeft,
  xlAddonRight,
  xlWithAddons,
}

export default sizes