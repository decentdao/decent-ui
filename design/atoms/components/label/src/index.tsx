import { Box, Flex, FormLabel, Text } from "@chakra-ui/react"
import { SupportQuestion } from "../../icons/src"
import { Tooltip } from "@chakra-ui/react"
import React from "react"
import { ILabelWrapper } from "./types"

const LabelWrapper = ({
  label,
  subLabel,
  isDisabled,
  errorMessage,
  tooltipContent,
  children,
}: ILabelWrapper) => {
  const labelColor = isDisabled ? "grayscale.800" : "grayscale.100"
  const labelTextStyle = isDisabled ? "text-base-sans-regular" : "text-base-sans-bold"

  const subLabelColor = isDisabled
    ? "grayscale.800"
    : !!errorMessage
    ? "alert-red.normal"
    : "grayscale.500"

  return (
    <Box position="relative">
      <FormLabel m="0px">
        <Flex gap="4" alignItems="center" color={labelColor} mb="2" textStyle={labelTextStyle}>
          <Text>{label}</Text>
          {!!tooltipContent && (
            <Tooltip hasArrow label={tooltipContent} closeDelay={500}>
              <SupportQuestion />
            </Tooltip>
          )}
        </Flex>
        {children}
        <Text color={subLabelColor} textStyle="text-sm-sans-regular" mt="2">
          {errorMessage || subLabel}
        </Text>
      </FormLabel>
    </Box>
  )
}

export default LabelWrapper
