import {
  Input as ChakraInput,
  InputProps,
  forwardRef,
  useStyleConfig,
  ComponentWithAs,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"

interface IInput {
  size?: "base" | "xl"
  isErrored?: boolean
}

const Input = forwardRef<IInput, ComponentWithAs<"input", InputProps>>(
  ({ size, isErrored, ...rest }, ref) => {
    const [variant, setVariant] = useState("primary")

    useEffect(() => {
      if (isErrored) {
        setVariant("error")
        return
      }
      setVariant("primary")
    }, [isErrored])

    const styles = useStyleConfig("Input", { size, variant })
    return <ChakraInput sx={styles} ref={ref} {...rest} />
  }
)

export default Input
