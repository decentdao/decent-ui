const disabled = {
  bg: 'chocolate.500',
  color: 'neutral.600',
  border: 'unset'
}

const loading = {}
function primary() {

  return {
    color: 'white',
    bg: 'black.400',
    border: '1px solid black.200',
    _hover: {
      border: '2px solid black.300',
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
      border: '2px solid black.300',
    }
  }
}

function error() {

  return {
    color: 'white',
    bg: 'black.400',
    border: '2px solid alert-red.normal',
    _hover: {},
    _disabled: {
      ...disabled,
      _loading: loading
    },
    _focus: {
      border: '2px solid black.300',
    }
  }
}

export default {
  primary,
  error
}