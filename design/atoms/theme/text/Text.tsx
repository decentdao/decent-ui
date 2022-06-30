import { Page } from "../../Page";
import { Box, Text, Heading } from '@chakra-ui/react'

export function TextDisplay() {
  return (
    <Page>
      <Box display="flex" flexDirection="column" alignItems="center" fontWeight={400} fontFamily="IMB Plex Sans">
        <Heading size="sm" alignSelf="start" fontWeight="inherit">MONO NORMAL</Heading>
        <Text>ABCDEFGHIKLMNOPQRSTUVWXYZ</Text>
        <Text>abcdefghijklmnopqrstuvwxyz</Text>
        <Text>1234567890</Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" fontWeight={500} fontFamily="IMB Plex Sans">
        <Heading size="sm" alignSelf="start" fontWeight="inherit">MONO MEDIUM</Heading>
        <Text>ABCDEFGHIKLMNOPQRSTUVWXYZ</Text>
        <Text>abcdefghijklmnopqrstuvwxyz</Text>
        <Text>1234567890</Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" fontWeight={600} fontFamily="IMB Plex Sans">
        <Heading size="sm" alignSelf="start" fontWeight="inherit">MONO SEMIBOLD</Heading>
        <Text>ABCDEFGHIKLMNOPQRSTUVWXYZ</Text>
        <Text>abcdefghijklmnopqrstuvwxyz</Text>
        <Text>1234567890</Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" fontWeight={700} fontFamily="IMB Plex Sans">
        <Heading size="sm" alignSelf="start" fontWeight="inherit">MONO BOLD</Heading>
        <Text>ABCDEFGHIKLMNOPQRSTUVWXYZ</Text>
        <Text>abcdefghiklmnopqrstuvwxyz</Text>
        <Text>1234567890</Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" fontWeight={400} fontFamily="IMB Plex Sans">
        <Heading size="sm" alignSelf="start" fontWeight="inherit">SANS NORMAL</Heading>
        <Text>ABCDEFGHIKLMNOPQRSTUVWXYZ</Text>
        <Text>abcdefghijklmnopqrstuvwxyz</Text>
        <Text>1234567890</Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" fontWeight={500} fontFamily="IMB Plex Sans">
        <Heading size="sm" alignSelf="start" fontWeight="inherit">SANS MEDIUM</Heading>
        <Text>ABCDEFGHIKLMNOPQRSTUVWXYZ</Text>
        <Text>abcdefghijklmnopqrstuvwxyz</Text>
        <Text>1234567890</Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" fontWeight={600} fontFamily="IMB Plex Sans">
        <Heading size="sm" alignSelf="start" fontWeight="inherit">SANS SEMIBOLD</Heading>
        <Text>ABCDEFGHIKLMNOPQRSTUVWXYZ</Text>
        <Text>abcdefghijklmnopqrstuvwxyz</Text>
        <Text>1234567890</Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" fontWeight={700} fontFamily="IMB Plex Sans">
        <Heading size="sm" alignSelf="start" fontWeight="inherit">SANS BOLD</Heading>
        <Text>ABCDEFGHIKLMNOPQRSTUVWXYZ</Text>
        <Text>abcdefghijklmnopqrstuvwxyz</Text>
        <Text>1234567890</Text>
      </Box>
    </Page>
  )
}