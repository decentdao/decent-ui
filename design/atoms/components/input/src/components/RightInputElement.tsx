import { Box, Text } from "@chakra-ui/react"

interface IRightInputElement {
  rightElement?: JSX.Element | string
  onClick?: () => void
  isDisabled?: boolean
  size?: "base" | "xl"
}

const RightInputElement = ({ rightElement, isDisabled, onClick }: IRightInputElement) => {
  if (!rightElement) {
    return null
  }
  const color = isDisabled ? 'grayscale.800' : 'gold.500'
  if (typeof rightElement === "string") {
    return (
      <Box pos="absolute" zIndex={1} top="7" right="12" onClick={onClick}>
        <Text color={color} lineHeight="24px">{rightElement}</Text>
      </Box>
    )
  }

  return (
    <Box pos="absolute" zIndex={1} top="7" right="12" onClick={onClick} color={color}>
      {rightElement}
    </Box>
  )
}

export default RightInputElement
