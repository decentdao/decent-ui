function primary() {
  const disabled = {
    bg: 'chocolate.500',
    color: 'neutral.medium-gray',
  }

  const loading = {}

  return {
    bg: 'gold.500',
    color: 'gray.500',
    _hover: {
      bg: 'gold.300',
      _disabled: {
        ...disabled,
        _loading: loading
      },
    },
    _disabled: {
      ...disabled,
      _loading: loading
    },
    _active: {},
    _focus: {}
  }
}

function secondary() {
  const disabled = {
    color: 'neutral.medium-gray',
    border: 'neutral.medium-gray'
  }

  const loading = {

  }

  return {
    bg: 'chocolate.500',
    color: 'gold.500',
    border: '1px solid gold.500',
    _hover: {
      border: '1px solid gold.300',
      color: 'gold.300',
      _disabled: {
        ...disabled,
        _loading: loading
      },
    },
    _disabled: {
      ...disabled,
      _loading: loading
    },
    _active: {},
    _focus: {}
  }
}

function text() {
  const disabled = {
    bg: '',
    color: '',
  }

  const loading = {

  }

  return {
    bg: '',
    color: '',
    _hover: {},
    _disabled: {},
    _active: {},
    _focus: {}
  }
}

export default {
  primary,
  secondary,
  text
}