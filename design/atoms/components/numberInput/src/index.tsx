import {
  NumberInput as ChakraNumberInput,
  NumberInputField,
  ChakraComponent,
  forwardRef,
} from "@chakra-ui/react"

const NumberInput = forwardRef<{}, ChakraComponent<'input'>>(
  (
    {
      placeholder,
      ...rest
    },
    ref
  ) => {

    return (
      <ChakraNumberInput ref={ref}  {...rest} >
        <NumberInputField placeholder={placeholder} />
      </ChakraNumberInput>
    )
  }
)
// This fixes a bug with storybook docs where component shows as [object Object]
NumberInput.displayName = "NumberInput";
export default NumberInput
