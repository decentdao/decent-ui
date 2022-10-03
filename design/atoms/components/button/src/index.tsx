import {
  As,
  Button as ChakraButton,
  ButtonProps,
  ComponentWithAs,
  forwardRef,
  useStyleConfig,
} from "@chakra-ui/react"
import { ReactElement } from "react"

interface IButton {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "base" | "lg" | "sm";
  label?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}

export const Button = forwardRef<IButton, ComponentWithAs<"button", ButtonProps>>(
  ({ variant, size, label, ...rest }, ref) => {
    const styles = useStyleConfig("Button", { size, variant })
    return (
      <ChakraButton sx={styles} ref={ref} {...rest}>
        {label}
      </ChakraButton>
    )
  }
)

export default Button
