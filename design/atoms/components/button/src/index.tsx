import {
  Button as ChakraButton,
  ComponentWithAs,
  forwardRef,
  useStyleConfig,
} from "@chakra-ui/react"
import type { IButton } from "./types"

export const Button = forwardRef<IButton, ComponentWithAs<"button">>(
  ({ variant = "primary", size = "base", children, ...rest }, ref) => {
    const styles = useStyleConfig("Button", { size, variant })
    return (
      <ChakraButton sx={styles} ref={ref} {...rest}>
        {children}
      </ChakraButton>
    )
  }
)

export default Button
