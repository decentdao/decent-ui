import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const ArrowLeft: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "ArrowLeft",
  viewBox: "0 0 24 24",
  path: (
    <path d="M10.909 12 16 16.667 14.546 18 8 12l6.546-6L16 7.333 10.909 12Z" fill="currentColor" />
  ),
})
