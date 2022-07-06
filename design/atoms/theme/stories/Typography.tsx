import { Page } from "./Page";
import { Box, Text } from '@chakra-ui/react';

export function Typography() {
  // @todo this should be updated when we have our version of the text component
  return (
    <Page>
      <Box>
        <Text textStyle="text-6xl-sans">text-6xl-sans</Text>
        <Text textStyle="text-5xl-sans">text-5xl-sans</Text>
        <Text textStyle="text-4xl-sans">text-4xl-sans</Text>
        <Text textStyle="text-4xl-mono">text-4xl-mono</Text>
        <Text textStyle="text-3xl-sans">text-3xl-sans</Text>
        <Text textStyle="text-3xl-mono">text-3xl-mono</Text>
        <Text textStyle="text-2xl-sans">text-2xl-sans</Text>
        <Text textStyle="text-2xl-mono">text-2xl-mono</Text>
        <Text textStyle="text-xl-sans">text-xl-sans</Text>
        <Text textStyle="text-xl-mono">text-xl-mono</Text>
        <Text textStyle="text-lg-sans">text-lg-sans</Text>
        <Text textStyle="text-lg-mono">text-lg-mono</Text>
        <Text textStyle="text-button">text-button</Text>
        <Text textStyle="text-button-sm">text-button-sm</Text>
        <Text textStyle="text-base">text-base</Text>
        <Text textStyle="text-sm-sans">text-sm-sans</Text>
        <Text textStyle="text-sm-sans-regular">text-sm-sans-regular</Text>
        <Text textStyle="text-sm-mono">text-sm-mono</Text>
        <Text textStyle="text-xs">text-xs</Text>
      </Box>
    </Page>
  )
}