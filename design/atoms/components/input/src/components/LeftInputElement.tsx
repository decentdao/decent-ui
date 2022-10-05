import { Box } from "@chakra-ui/react"

interface ILeftInputElement {
  leftElement?: JSX.Element,
  isDisabled?: boolean,
  size?: 'base' | 'xl'
}

const LeftInputElement = ({leftElement, isDisabled, size}: ILeftInputElement) => {
  if(!leftElement) {
    return null
  }
  const color = isDisabled ? 'grayscale.800' : 'gold.500'
  return (
    <Box pos="absolute" zIndex={1} top="7" left="12" lineHeight="24px" color={color}>
      {leftElement}
    </Box>
  )
}

export default LeftInputElement