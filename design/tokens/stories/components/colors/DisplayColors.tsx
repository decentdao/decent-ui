import { Box, Flex, Text } from "@chakra-ui/react"
import colors from "../../../foundations/colors"

function ColorDisplay({
  colorKey,
  colorName,
  value,
}: {
  colorKey: string
  colorName: string
  value: string
}) {
  return (
    <Flex gap="1rem" minW="50%" my={2}>
      <Box boxSize="5rem" bg={colorKey} borderRadius="0.75rem" />
      <Flex flexDirection="column">
        <Text textStyle="text-xl-mono-semibold">{colorName}</Text>
        <Text textStyle="text-base-sans-regular">{value}</Text>
      </Flex>
    </Flex>
  )
}

export function DisplayColors() {
  return (
    <>
      {Object.entries(colors).map(([colorCategory, values], index) => {
        if (typeof values === typeof "") {
          // v1 colors don't have nested values
          return (
            <Box key={colorCategory + index} my="4rem" w="full">
              <ColorDisplay
                colorKey={colorCategory}
                colorName={colorCategory}
                value={values as string}
              />
            </Box>
          )
        }
        return (
          <Box key={colorCategory + index} my="4rem" w="full">
            <Box p="1rem">
              <Text
                color="chocolate.200"
                borderBottom="1px"
                pb="1rem"
                mb="1rem"
                textStyle="text-3xl-mono-semibold"
              >
                {colorCategory.toUpperCase()}
              </Text>
              <Flex flexWrap="wrap" justifyContent="flex-start" alignItems="">
                {Object.entries(values as Object).map(([colorTitle, value], i) => {
                  const colorName = `${colorCategory}.${colorTitle}`
                  const colorKey = `${colorCategory}.${colorTitle}`
                  return (
                    <ColorDisplay key={i} colorKey={colorKey} colorName={colorName} value={value} />
                  )
                })}
              </Flex>
            </Box>
          </Box>
        )
      })}
    </>
  )
}
