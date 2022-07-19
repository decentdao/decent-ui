import { Input as ChakraInput, InputProps, forwardRef } from '@chakra-ui/react'

interface IInput {
}

export const Input = forwardRef(({...rest}: IInput & InputProps, ref) => {
  return <ChakraInput ref={ref} {...rest}></ChakraInput>
})