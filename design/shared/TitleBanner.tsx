import { Text, Box } from "@chakra-ui/react";

interface ITitleBanner {
  title?: string;
}

export function TitleBanner({title}: ITitleBanner) {
  return (
    <Box bg="#1E2A39" paddingLeft="24">
      <Text color="#FFFFFF" textStyle="text-4xl-mono">{title}</Text>
    </Box>
  )
}