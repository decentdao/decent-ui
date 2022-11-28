import { numberInputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle } =
  createMultiStyleConfigHelpers(numberInputAnatomy.keys)

const base = defineStyle({
  apply: 'text-base-mono-semibold',
  height: '2.5rem',
  px: '1rem',
  _placeholder: {
    textStyle: 'text-base-mono-medium'
  },
})

const xl = defineStyle({
  apply: 'text-xl-mono-semibold',
  h: '4.375rem',
  px: '1rem',
  _placeholder: {
    textStyle: 'text-xl-mono-medium'
  },
})

const sizes = {
  base: definePartsStyle({ field: base, stepper: base, addon: base }),
  xl: definePartsStyle({ field: xl, stepper: xl, addon: xl }),
}

export default sizes