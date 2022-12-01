import { alertAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle } =
  createMultiStyleConfigHelpers(alertAnatomy.keys)

const base = defineStyle({
  px: "1rem",
  h: '4.5rem',
})

const sizes = {
  base: definePartsStyle({ title: base, description: base }),
}

export default sizes
