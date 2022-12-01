import { alertAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle } =
  createMultiStyleConfigHelpers(alertAnatomy.keys)

const baseStyle = definePartsStyle({
  title: {
    display: "flex",
    alignItems: "center",
    textStyle: "text-lg-mono-medium",
  },
  container: {
    bg: "blue.900",
    border: "3px solid",
    borderColor: "blue.500",
    whiteSpace: "nowrap",
    borderRadius: "8px",
    pl: "1rem"
  },
  description: {
    display: "flex",
    alignItems: "center",
    textStyle: "text-base-sans-regular"
  },
  spinner: {},
})

export default baseStyle