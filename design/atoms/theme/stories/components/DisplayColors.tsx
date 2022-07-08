import { Box, Text } from "@chakra-ui/react"
import { StoryLayout } from "../../../../shared/StoryLayout"
import colors from "../../foundations/colors"

export function DisplayColors() {
  return (
    <StoryLayout title="Colors">
        {Object.entries(colors).map(([colorCategory, values], index) => {
          return (
            <Box key={colorCategory + index}>
                {Object.entries(values as Object).map(([colorTitle, value]) => {
                  const colorName = `${colorCategory}-${colorTitle}`
                  const colorKey = `${colorCategory}.${colorTitle}`
                  return (
                    <Box display="flex" justifyContent="space-between" flexGrow={1} height="75px" marginY="12">
                      <Box width="fit-content" display="flex" flexDirection="column" justifyContent="center">
                        <Text fontSize="lg" marginBottom="4" textStyle="text-sm-mono">
                          {colorName}
                        </Text>
                        <Text textStyle="text-sm-sans">{value}</Text>
                      </Box>
                      <Box marginLeft="24" flexGrow={1} bg={colorKey} maxWidth="60%" borderRadius="lg" />
                    </Box>
                  )
                })}
            </Box>
          )
        })}
    </StoryLayout>
  )
}
