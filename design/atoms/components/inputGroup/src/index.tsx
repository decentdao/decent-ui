import {
  ComponentWithAs,
  forwardRef,
  InputGroup as ChakraInputGroup,
} from "@chakra-ui/react"

const InputGroup = forwardRef<{}, ComponentWithAs<"input">>(
  (
    {
      placeholder,
      disabled,
      children,
      ...rest
    },
    ref
  ) => {

    return (
      <ChakraInputGroup ref={ref} {...rest}>
        {children}
      </ChakraInputGroup>
    )
  }
)
// This fixes a bug with storybook docs where component shows as [object Object]
InputGroup.displayName = "InputGroup";
export default InputGroup
