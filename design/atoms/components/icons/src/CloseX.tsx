import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const CloseX: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "CloseX",
  viewBox: "0 0 24 24",
  path: (
    <path fillRule="evenodd" clipRule="evenodd" d="M5.151 5.152a1.2 1.2 0 0 1 1.697 0L12 10.303l5.151-5.152a1.2 1.2 0 1 1 1.697 1.697L13.697 12l5.151 5.151a1.2 1.2 0 0 1-1.697 1.697L12 13.697l-5.152 5.151a1.2 1.2 0 0 1-1.697-1.697L10.303 12 5.15 6.848a1.2 1.2 0 0 1 0-1.696Z" fill="currentColor" />

  ),
})
