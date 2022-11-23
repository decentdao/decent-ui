import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const base = defineStyle({
  apply: 'textStyles.text-base-mono',
  height: '2.5rem',
  px: '1rem',
})

const sizes = {
  base: definePartsStyle({ field: base, addon: base})
}

export default sizes