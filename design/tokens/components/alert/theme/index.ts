import { alertAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import baseStyle from './alert.base'
import sizes from './alert.sizes'

const { defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(alertAnatomy.keys)


const Alert = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'base'
  },
});

export default Alert