import { ComponentWithAs, Flex, IconProps, Text } from "@chakra-ui/react"
import { StoryLayout } from "../../../../../shared/StoryLayout"
import * as icons from '../../src'

export function DisplayIconography() {
  return (
    <StoryLayout title="Icon">
      <Flex flexWrap="wrap" justifyContent="space-between" gap="1rem">
        {Object.values(icons).map((Icon: ComponentWithAs<"svg", IconProps>, i) => {
          return (
            <Flex key={i} flexDirection="column" w="13.75rem" h="10rem" justifyContent="center" alignItems="center" p="1rem" border="1px solid" borderColor="chocolate.500">
              <Text textStyle="text-base-mono-bold" color="grayscale.100">{Icon.displayName}</Text>
              <Icon boxSize="1.5rem" m="1rem" />
            </Flex>
          )
        })}
      </Flex>
    </StoryLayout>
  )
}
