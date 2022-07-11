import { StoryLayout } from "../../../shared/StoryLayout"
import { Box, Text } from "@chakra-ui/react"
import { FONT_WEIGHT } from "../../foundations/textStyles"

export function DisplayFontWeights() {
  // @todo this should be updated when we have our version of the text component
  return (
    <StoryLayout title="Font Weight">
      <Box>
        {Object.entries(FONT_WEIGHT).map(([name, weight]) => (
          <Box key={name} marginY="8" display="flex" justifyContent="space-between">
            <Text fontWeight={weight} paddingY="8">
              {name}: {weight}
            </Text>
            <Text fontWeight={weight} paddingY="8">
              In anim proident ad dolore deserunt nostrud cupidatat enim sunt nisi ex ut.
            </Text>
          </Box>
        ))}
      </Box>
    </StoryLayout>
  )
}
