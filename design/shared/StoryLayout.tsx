import React from 'react'
import { Box } from "@chakra-ui/react"
import { TitleBanner } from "./TitleBanner"
interface IStoryLayout {
  title?: string
  children: JSX.Element | JSX.Element[]
}
export function StoryLayout({ title, children }: IStoryLayout) {
  return (
    <Box>
      <TitleBanner title={title} />
      <Box padding="8">{children}</Box>
    </Box>
  )
}
