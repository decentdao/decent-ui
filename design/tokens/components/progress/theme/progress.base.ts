import { progressAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle } =
    createMultiStyleConfigHelpers(progressAnatomy.keys)

const baseStyles = definePartsStyle(() => ({
    track: {
        bg: "drab.700",
        borderRadius: "4px",
    },
    filledTrack: {
        borderRadius: "4px",
        bg: "drab.400",
    }
}))

export default baseStyles