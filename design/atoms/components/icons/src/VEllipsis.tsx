import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const VEllipsis: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "VEllipsis",
  viewBox: "0 0 24 24",
  path: (
    <path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z" fill="currentColor" />
  ),
})
