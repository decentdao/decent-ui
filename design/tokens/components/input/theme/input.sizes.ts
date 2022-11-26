import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = {
  apply: 'text-base-mono-semibold',
  height: '2.5rem',
  _placeholder: {
    textStyle: 'text-base-mono-medium'
  },
}
const base = defineStyle({
  ...baseStyle,
  px: '1rem'
})

const baseWithAddon = defineStyle({
  ...baseStyle,
  px: '2rem'
})

const xlStyle = {
  apply: 'text-xl-mono-semibold',
  h: '4.375rem',
  px: '1rem',
  _placeholder: {
    textStyle: 'text-xl-mono-medium'
  },
}

const xl = defineStyle({
  ...xlStyle,
  px: '1rem',
})

const xlWithAddon = defineStyle({
  ...xlStyle,
  px: '2rem',
})

const sizes = {
  base: definePartsStyle({ field: base, addon: base }),
  baseWithAddon: definePartsStyle({ field: baseWithAddon, addon: baseWithAddon }),
  xl: definePartsStyle({ field: xl, addon: xl }),
  xlWithAddon: definePartsStyle({ field: xlWithAddon, addon: xlWithAddon }),
}

export default sizes