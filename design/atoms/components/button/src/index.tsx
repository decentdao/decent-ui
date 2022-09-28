

import { Button as ChakraButton, forwardRef, useStyleConfig } from '@chakra-ui/react'
import { ReactElement } from 'react';

interface IButton {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'base' | 'lg' | 'sm';
  label?: string;
  disabled?: boolean;
  leftIcon?: ReactElement
  rightIcon?: ReactElement
}

const Button = forwardRef(({variant, size, label, ...rest}: IButton, ref) => {
  const styles = useStyleConfig('Button', { size, variant });
  return <ChakraButton  sx={styles} ref={ref} {...rest}>{label}</ChakraButton>
})

export default Button