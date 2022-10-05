import { cssVar } from "@chakra-ui/theme-tools"

const $arrowBg = cssVar("popper-arrow-bg")

export default {
  baseStyle: {
    borderRadius: '4px',
    backgroundColor: 'black',
    padding: '0.5rem 1rem',
    color: 'grayscale.500',
    [$arrowBg.variable]: 'black'
  }
}