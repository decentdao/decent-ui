import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const Queued: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "Queued",
  viewBox: "0 0 24 24",
  path: (
    <path d="M21 12h-4.5v4.5H12V21H3v-9h4.5V7.5H12V3h9v9Zm-10.125 1.125h-6.75v6.75h6.75v-6.75Zm4.5-4.5h-6.75V12H12v3.375h3.375v-6.75Zm4.5-4.5h-6.75V7.5H16.5v3.375h3.375v-6.75Z" fill="currentColor"/>
  ),
})
