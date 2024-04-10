import { Box, Flex, Text } from "@chakra-ui/react"
import colors from "../../foundations/colors"
import { StoryLayout } from "../../../shared/StoryLayout"

function ColorDisplay({ colorName, value }: { colorName: string; value: string }) {
  return (
    <Flex
      gap={4}
      my={2}
      boxSize="12rem"
      bg={colorName}
      borderRadius="0.75rem"
      border="1px solid"
      borderColor="black-0"
      justifyContent="flex-end"
      alignItems="flex-end"
    >
      <Box
        bg="silver"
        textAlign="end"
        color="black"
        borderRadius="0.25rem"
        p="0.25rem 1rem"
        whiteSpace="nowrap"
        textStyle="utility-styles-helper-text-base"
      >
        <Text>{value}</Text>
        <Text>{colorName}</Text>
      </Box>
    </Flex>
  )
}

export function DisplayColors() {
  return (
    <StoryLayout title="Color Palette">
      <Flex flexWrap="wrap" gap={4} justifyContent="flex-start">
        {Object.entries(colors).map(([colorCategory, values], index) => {
          return (
            <Box key={colorCategory + index}>
              <ColorDisplay colorName={colorCategory} value={values as string} />
            </Box>
          )
        })}
      </Flex>
    </StoryLayout>
  )
}
