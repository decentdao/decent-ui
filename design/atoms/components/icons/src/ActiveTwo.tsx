import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react";

export const ActiveTwo: ComponentWithAs<"svg", IconProps> = createIcon({
  viewBox: "0 0 24 24",
  displayName: "ActiveTwo",
  path: (
    <path d="M3 12h4l3 8 4-16 3 8h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
})
