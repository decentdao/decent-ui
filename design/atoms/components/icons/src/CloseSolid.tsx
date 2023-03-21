import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const CloseSolid: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "CloseSolid",
  viewBox: "0 0 24 24",
  path: (
    <path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-6.207-3.793a.708.708 0 0 1 0 1.002L13 12l2.792 2.791a.708.708 0 1 1-1.002 1.002L12 13l-2.791 2.792a.708.708 0 1 1-1.002-1.002L11 12 8.207 9.209A.708.708 0 1 1 9.21 8.207L12 11l2.791-2.792a.708.708 0 0 1 1.002 0Z" fill="currentColor" />
  ),
})
