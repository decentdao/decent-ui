import { progressAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle } =
  createMultiStyleConfigHelpers(progressAnatomy.keys)
  

const base = defineStyle({
  height: '1rem'
})

const sizes = {
  base: definePartsStyle({ label: base, track: base, filledTrack: base }),
}

export default sizes