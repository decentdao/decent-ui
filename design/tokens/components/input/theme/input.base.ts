import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const disabled = {
  cursor: 'default',
  border: 'none',
  color: 'grayscale.800',
  _placeholder: {
    color: 'grayscale.800'
  }
}

const loading = {}

const baseStyle = definePartsStyle({
  field: {
    borderRadius: '4px',
    color: 'white',
    bg: 'input.background',
    border: '1px solid',
    borderColor: 'black.400',
    transitionDuration: "normal",
    transitionProperty: "common",
    width: "100%",
    _invalid: {
      border: '1px solid',
      borderColor: 'alert-red.normal'
    },
    _placeholder: {
      color: 'grayscale.600',
    },
    _hover: {
      border: '1px solid',
      borderColor: 'black.300',
      _disabled: {
        ...disabled,
        _loading: loading
      },
    },
    _disabled: {
      ...disabled,
      _loading: loading
    },
    _focus: {
      border: '1px solid',
      borderColor: 'black.300',
      outlineStyle: 'none'
    }
  }
})

export default baseStyle