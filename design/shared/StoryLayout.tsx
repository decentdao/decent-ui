import { Box } from '@chakra-ui/react'

interface IStoryLayout {
  children: JSX.Element | JSX.Element[];
}
export function StoryLayout({children}: IStoryLayout) {
  return (
    <Box padding="4">
      {children}
    </Box>
  )
}