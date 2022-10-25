import { Box } from "@chakra-ui/react"

interface ILeftInputElement {
  leftElement?: JSX.Element,
  isDisabled?: boolean,
  size?: 'base' | 'xl'
}

const LeftInputElement = ({ leftElement, isDisabled, size }: ILeftInputElement) => {
  if (!leftElement) {
    return null
  }
  const color = isDisabled ? 'grayscale.800' : 'gold.500'
  return (
    <Box pos="absolute" zIndex={1} display="flex" alignItems="center" lineHeight="24px" justifyContent="center" h="full" mx="1rem" color={color}>
      <Box flexGrow={1} w="max-content">
        {leftElement}
      </Box>
    </Box>
  )
}

export default LeftInputElement