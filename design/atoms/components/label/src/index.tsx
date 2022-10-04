import { Box, Flex, FormLabel, Text } from "@chakra-ui/react"
import { SupportQuestion } from "../../icons/src"
import React from "react"

interface IInputLabelWrapper {
  children: JSX.Element
  isDisabled?: boolean
  isErrored?: boolean
  subLabel?: string
  label?: string
  htmlFor?: string
}

const InputLabelWrapper = ({
  label,
  subLabel,
  isDisabled,
  isErrored,
  children,
}: IInputLabelWrapper) => {
  if (!label && !subLabel) {
    return children
  }
  const labelColor = isDisabled ? "grayscale.800" : "grayscale.100"
  const labelTextStyle = isDisabled ? "text-base-sans-regular" : "text-base-sans-bold"

  const subLabelColor = isDisabled
    ? "grayscale.800"
    : isErrored
    ? "alert-red.normal"
    : "grayscale.500"

  return (
    <Box position="relative" h="fit-content" w="fit-content">
      <FormLabel>
        <Flex gap="4" alignItems="center" color={labelColor} mb="8" textStyle={labelTextStyle}>
          <Text>{label}</Text>
          <SupportQuestion />
        </Flex>
        {children}
        <Text color={subLabelColor} textStyle="text-sm-sans-regular" mt="8">
          {subLabel}
        </Text>
      </FormLabel>
    </Box>
  )
}

export default InputLabelWrapper
