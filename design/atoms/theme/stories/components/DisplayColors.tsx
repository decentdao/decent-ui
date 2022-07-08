import { Box, Text } from '@chakra-ui/react';
import { StoryLayout } from '../../../../shared/StoryLayout';
import colors from '../../foundations/colors';

export function DisplayColors() {
  return (
    <StoryLayout>
      {Object.entries(colors).map(
        ([colorCategory, values], index) => {
          return (
            <Box key={colorCategory + index} paddingBottom="4">
              <Text fontSize="lg" marginBottom="4">{colorCategory}</Text>
                <Box display="flex">
                  {Object.entries(values as Object).map(([colorTitle, value]) => {
                    return (
                      <Box paddingStart="8">
                        <Box width="75px" height="75px" bg={value} borderRadius="lg" />
                        <Text display="flex" alignItems="flex-end" justifyContent="center" paddingEnd="2">{colorTitle}</Text>
                      </Box>
                    )
                  }
                  )}
              </Box>
            </Box>
          );
        }
      )}
    </StoryLayout>
  )
}