import { defineStyle } from '@chakra-ui/react';
const primaryDisabled = {
  bg: 'gold.500-disabled',
}
const primaryLoading = {}

const primary = defineStyle({
  bg: 'gold.500',
  color: 'black.500',
  _hover: {
    bg: 'gold.500-hover',
    _disabled: {
      ...primaryDisabled,
      _loading: primaryLoading
    },
  },
  _disabled: {
    ...primaryDisabled,
    _loading: primaryLoading
  },
  _active: {
    bg: 'gold.500-active',
  },
  _focus: {}
})

const secondaryDisabled = {
  color: 'gold.500-disabled',
  bg: 'chocolate.600'
}

const secondaryLoading = {
  // @todo add loading state
}
const secondary = defineStyle({

  bg: 'chocolate.500',
  color: 'gold.500',
  _hover: {
    bg: 'chocolate.600',
    color: 'gold.500-hover',
    _disabled: {
      ...secondaryDisabled,
      _loading: secondaryLoading
    },
  },
  _disabled: {
    ...secondaryDisabled,
    _loading: secondaryLoading
  },
  _active: {
    bg: 'chocolate.700',
    color: 'gold.500-active'
  },
  _focus: {}
})

const tertiaryDisabled = {
  bg: 'transparent',
  borderColor: 'gold.500-disabled',
  color: 'gold.500-disabled',
}

const tertiaryLoading = {
  // @todo add loading state
}
const tertiary = defineStyle({
  bg: 'transparent',
  color: 'gold.500',
  border: '1px solid',
  borderColor: 'gold.500',
  _hover: {
    borderColor: 'gold.500-hover',
    bg: 'chocolate.700',
    color: 'gold.500-hover',
    _disabled: {
      ...tertiaryDisabled,
      _loading: tertiaryLoading
    },
  },
  _disabled: {
    ...tertiaryDisabled,
    _loading: tertiaryLoading
  },
  _active: {
    borderColor: 'gold.500-active',
    bg: 'chocolate.800',
    color: 'gold.500-active',
  },
  _focus: {}
})

const textDisabled = {
  color: 'gold.500-disabled',
}

const textLoading = {
  // @todo add loading state
}

const text = defineStyle({
  bg: 'none',
  borderColor: 'none',
  color: 'gold.500',
  _hover: {
    color: 'gold.500-hover',
    _disabled: {
      ...textDisabled,
      _loading: textLoading
    },
  },
  _disabled: {
    ...textDisabled,
    _loading: textLoading
  },
  _active: {
    color: 'gold.500-active',
  },
  _focus: {}
})

const buttonVariants = {
  text,
  primary,
  secondary,
  tertiary
}

export default buttonVariants