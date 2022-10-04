const disabled = {
  border: 'none',
  color: 'grayscale.800',
  _placeholder: {
    color: 'grayscale.800'
  }
}
const loading = {}

function primary() {

  return {
    color: 'white',
    bg: 'input.background',
    border: '1px solid',
    borderColor: 'black.200',
    fontWeight: '500',
    _invalid: {
      border: '1px solid',
      borderColor: 'alert-red.normal'
    },
    _placeholder: {
      color: 'grayscale.600'
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
}

export default {
  primary
}