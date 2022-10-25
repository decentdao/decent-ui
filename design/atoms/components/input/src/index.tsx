import {
  Input as ChakraInput,
  forwardRef,
  useStyleConfig,
  ComponentWithAs,
  Box,
} from "@chakra-ui/react"
import LeftInputElement from "./components/LeftInputElement"
import RightInputElement from "./components/RightInputElement"

import { IInput, RestrictCharTypes } from "./types"
import { useCallback } from "react"

const Input = forwardRef<IInput, ComponentWithAs<"input">>(
  (
    {
      size,
      isInvalid,
      leftElement,
      rightElement,
      isDisabled,
      rightElementAction,
      decimals,
      restrictChar,
      value,
      width = "max-content",
      minW,
      minWidth,
      w,
      maxW,
      maxWidth,
      ...rest
    },
    ref
  ) => {
    const styles = useStyleConfig("Input", { size })

    const hasLeftElement = !!leftElement
    const hasRightElement = !!rightElement
    const paddingLeft = hasLeftElement ? "3.25rem" : styles.paddingLeft
    const paddingRight = hasRightElement ? "3.25rem" : styles.paddingRight

    const wholeNumbersOnly = (
      event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      return ["e", "+", "-", "."].includes(event.key) && event.preventDefault()
    }
    const floatNumbersOnly = (
      event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      return ["e", "+", "-"].includes(event.key) && event.preventDefault()
    }

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

        switch (restrictChar) {
          case RestrictCharTypes.WHOLE_NUMBERS_ONLY: {
            wholeNumbersOnly(event)
            break
          }
          case RestrictCharTypes.FLOAT_NUMBERS: {
            floatNumbersOnly(event)
            break
          }
        }

        return event
      },
      [decimals, limitDecimals, restrictChar]
    )

    return (
      <Box position="relative" w={width} width={width} minW={minW} maxW={maxW} maxWidth={maxWidth} minWidth={minWidth}>
        <LeftInputElement leftElement={leftElement} isDisabled={isDisabled} />
        <RightInputElement
          rightElement={rightElement}
          onClick={rightElementAction}
          isDisabled={isDisabled}
        />
        <ChakraInput
          sx={{ ...styles, paddingRight, paddingLeft }}
          isInvalid={isInvalid}
          isDisabled={isDisabled}
          ref={ref}
          onKeyDown={handleKeyDown}
          value={value}
          width="full"
          {...rest}
        />
      </Box>
    )
  }
)

export default Input
