import { Page } from "../../Page";
import { Box, Text } from '@chakra-ui/react'

export function FontDisplay() {
  return (
    <Page>
      <Box>
        <Text>ABCDEFGHIKLMNOPQRSTUVWXYZ</Text>
        <Text>abcdefghijklmnopqrstuvwxyz</Text>
        <Text>1234567890</Text>
      </Box>
    </Page>
  )
}