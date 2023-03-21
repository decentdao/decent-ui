import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const ETH: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "ETH",
  viewBox: "0 0 24 24",
  path: (
    <path d="M11.952 17.223 5.506 13.42l6.442 9.082 6.45-9.082-6.45 3.804h.004ZM12.048 1.5 5.604 12.195l6.444 3.81 6.446-3.806L12.048 1.5Z" fill="currentColor"/>
  ),
})
