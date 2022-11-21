import { Box, Flex, Text } from "@chakra-ui/react"
import colors from "../../../foundations/colors"

export function DisplayColors() {
  return (
    <>
      {Object.entries(colors).map(([colorCategory, values], index) => {
        return (
          <Box key={colorCategory + index} my="4rem" w="full">
            <Box p="1rem">
              <Text color="chocolate.200" borderBottom="1px" pb="1rem" mb="1rem" textStyle="text-3xl-mono-semibold">{colorCategory.toUpperCase()}</Text>
              <Flex flexWrap="wrap" gap="2rem" justifyContent="space-between">
                {Object.entries(values as Object).map(([colorTitle, value]) => {
                  const colorName = `${colorCategory}.${colorTitle}`
                  const colorKey = `${colorCategory}.${colorTitle}`
                  return (
                    <Flex gap="1rem" w="22.75rem">
                      <Box boxSize="5rem" bg={colorKey} borderRadius="0.75rem" />
                      <Flex flexDirection="column" alignItems="">
                        <Text textStyle="text-xl-mono-semibold">{colorName}</Text>
                        <Text textStyle="text-base-sans-regular">{value}</Text>
                      </Flex>
                    </Flex>
                  )
                })
                }
              </Flex>
            </Box>
          </Box>
        )
      })}
    </>
  )
}
