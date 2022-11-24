import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import sizes from './numberInput.sizes'
import baseStyle from './numberInput.base'

const { defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const NumberInput = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'base',
  },
})


export default NumberInput