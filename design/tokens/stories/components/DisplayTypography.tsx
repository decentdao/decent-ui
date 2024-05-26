import { StoryLayout } from "../../../shared/StoryLayout"
import { Box, Flex, Text } from "@chakra-ui/react"
import typography from "../../foundations/textStyles"

export function DisplayTypography() {
  const _typography = Object.entries(typography)
  return (
    <StoryLayout title="Typography">
      <Box>
        {_typography.map(([textStyleKey, fontValues]) => (
          <Flex key={textStyleKey} marginY="4" direction="column">
            <Flex
              alignItems="center"
              justifyContent="space-between"
              rounded="lg"
              color="grayscale.white"
              mb="2"
            >
              <Text textStyle="display-xl">{textStyleKey}</Text>
              <Text textStyle={textStyleKey}>Lorem aliqua deserunt officia ut.</Text>
            </Flex>
            <Flex
              direction="column"
              alignItems="center"
              border="1px solid"
              borderColor="black-0"
              bg="white-alpha-16"
            >
              {Object.entries(fontValues).map(([fontProperty, value]: any, i) => {
                return (
                  <Flex key={i} py="2" px="4" justifyContent="space-between" w="full" textStyle="label-large">
                    <Text textStyle="label-large" color="grayscale.400">
                      {fontProperty}:
                    </Text>
                    <Text>{JSON.stringify(value)}</Text>
                  </Flex>
                )
              })}
            </Flex>
          </Flex>
        ))}
      </Box>
    </StoryLayout>
  )
}
