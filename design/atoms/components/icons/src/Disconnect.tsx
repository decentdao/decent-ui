import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const Disconnect: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "Disconnect",
  viewBox: "0 0 24 24",
  path: (
    <path
      d="M11.09 21.182A9.09 9.09 0 0 1 2 12.09a9.09 9.09 0 0 1 16.364-5.455H15.9a7.273 7.273 0 1 0 0 10.91h2.464a9.076 9.076 0 0 1-7.273 3.636Zm6.364-5.455V13h-7.272v-1.818h7.272V8.455L22 12.09l-4.546 3.636Z"
      fill="currentColor"
    />
  ),
})
