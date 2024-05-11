import { defineStyleConfig } from '@chakra-ui/react';

import baseStyle from './iconButton.base'
import variants from './iconButton.variants'
import sizes from './iconButton.sizes'

const IconButton = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    size: 'icon-md',
    variant: 'primary',
  },
});

export default IconButton