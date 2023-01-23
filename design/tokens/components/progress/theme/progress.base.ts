import { progressAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle } =
    createMultiStyleConfigHelpers(progressAnatomy.keys)

const baseStyles = definePartsStyle(({ value }) => ({
    track: {
        bg: "drab.700",
        borderRadius: "12px",
    },
    filledTrack: {
        borderRadius: "12px",
        bg: "drab.900",
        border: () => value ? "1px solid" : "",
        borderColor: "gold.100"
    }
}))

export default baseStyles