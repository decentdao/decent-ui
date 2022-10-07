import React from 'react'
import { Text, Box } from "@chakra-ui/react";
interface ITitleBanner {
  title?: string;
}

export function TitleBanner({title}: ITitleBanner) {
  return (
    <Box bg="black.700" padding="8" borderRadius="8">
      <Text color="gold.500" textStyle="text-4xl-mono">{title}</Text>
    </Box>
  )
}