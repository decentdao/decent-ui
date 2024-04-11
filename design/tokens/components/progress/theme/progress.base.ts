import { progressAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

const { definePartsStyle } = createMultiStyleConfigHelpers(progressAnatomy.keys)

const baseStyles = definePartsStyle({
  track: {
    bg: "neutral-2",
  },
  filledTrack: {
    bg: "lilac--3",
    borderRightRadius: "4px",
  },
  label: {

  },
})

export default baseStyles
