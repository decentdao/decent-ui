import { Input as ChakraInput, InputProps, forwardRef, useStyleConfig } from "@chakra-ui/react"

interface IInput {
  size?: string
  variant?: string
}

const Input = forwardRef(({ variant, size, ...rest }: IInput & InputProps, ref) => {
  const styles = useStyleConfig("Input", { variant, size })
  return <ChakraInput sx={styles} ref={ref} {...rest}></ChakraInput>
})

export default Input
