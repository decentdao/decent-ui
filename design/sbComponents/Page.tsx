import { Box } from '@chakra-ui/react'

interface IPage {
  children: JSX.Element | JSX.Element[];
}
export function Page({children}: IPage) {
  return (
    <Box padding="4">
      {children}
    </Box>
  )
}