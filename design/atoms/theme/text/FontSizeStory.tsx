import { Box, Text } from '@chakra-ui/react'

export function FontSizeStory() {
  return (
      <Box>
        <Text fontSize='6xl'>(6xl) SANS</Text>
        <Text fontSize='5xl'>(5xl) MONO</Text>
        <Text fontSize='4xl'>(4xl) SANS</Text>
        <Text fontSize='3xl'>(3xl) MONO</Text>
        <Text fontSize='2xl'>(2xl) SANS</Text>
        <Text fontSize='xl'>(xl) MONO</Text>
        <Text fontSize='lg'>(lg) SANS</Text>
        <Text fontSize='md'>(md) MONO</Text>
        <Text fontSize='sm'>(sm) SANS</Text>
        <Text fontSize='xs'>(xs) MONO</Text>
      </Box>
  )
}