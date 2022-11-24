import {
  Input as ChakraInput,
  ComponentWithAs,
  forwardRef,
} from "@chakra-ui/react"
import { IInput } from "./types"

import { useCallback } from "react"

const Input = forwardRef<IInput, ComponentWithAs<"input">>(
  (
    {
      size,
      decimals,
      value,
      ...rest
    },
    ref
  ) => {

    const limitDecimals = useCallback(
      (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (!value || ["Backspace", "Delete"].includes(event.key)) {
          return
        }
        const [, dec] = value.toString().split(".")
        if (!!dec && !!decimals && dec.length >= decimals) {
          event.preventDefault()
        }
      },
      [decimals, value]
    )

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (decimals) {
          limitDecimals(event)
        }
        return event
      },
      [decimals, limitDecimals]
    )

    return (
      <ChakraInput
        size={size}
        ref={ref}
        onKeyDown={handleKeyDown}
        value={value}
        {...rest}
      />
    )
  }
)
// This fixes a bug with storybook docs where component shows as [object Object]
Input.displayName = "Input";
export default Input
