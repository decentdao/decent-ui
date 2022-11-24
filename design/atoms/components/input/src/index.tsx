import {
  Input as ChakraInput,
  ComponentWithAs,
  forwardRef,
  InputGroup,
} from "@chakra-ui/react"

const TextInput = forwardRef<{}, ComponentWithAs<"input">>(
  (
    {
      placeholder,
      disabled,
      ...rest
    },
    ref
  ) => {

    return (
      <InputGroup ref={ref} {...rest}>
        <ChakraInput
          placeholder={placeholder}
          disabled={disabled}
          w="full"
        />
      </InputGroup>
    )
  }
)
// This fixes a bug with storybook docs where component shows as [object Object]
TextInput.displayName = "Input";
export default TextInput
