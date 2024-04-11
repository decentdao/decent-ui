import { Text, Box } from "@chakra-ui/react";
interface ITitleBanner {
  title?: string;
}

export function TitleBanner({title}: ITitleBanner) {
  return (
    <Box bg="cosmic-nebula-0" padding="8" borderRadius="8">
      <Text color="lilac-0" textStyle="display-2xl">{title}</Text>
    </Box>
  )
}