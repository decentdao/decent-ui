import baseStyle from './button.base'
import variants from './button.variants'
import sizes from './button.sizes'
import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    size: 'base',
    variant: 'primary',
  },
});

export default Button