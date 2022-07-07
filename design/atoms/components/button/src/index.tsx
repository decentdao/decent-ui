

import { Button as ChakraButton, ButtonProps, forwardRef, useStyleConfig } from '@chakra-ui/react'

interface IButton {
  variant?: any;
  size?: any;
  label?: string;
}

export const Button = forwardRef(({variant, size, ...rest}: IButton & ButtonProps, ref) => {
  const styles = useStyleConfig('Button', { size, variant });
  return <ChakraButton sx={styles} ref={ref} {...rest}>Label</ChakraButton>
})