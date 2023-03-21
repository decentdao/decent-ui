import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const ArrowUp: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "ArrowUp",
  viewBox: "0 0 24 24",
  path: (
    <path d="M12 10.909 7.333 16 6 14.546 12 8l6 6.546L16.667 16 12 10.909Z" fill="currentColor" />
  ),
})
