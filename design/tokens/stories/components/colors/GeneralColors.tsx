import { Box, Flex, Text } from "@chakra-ui/react";

export const TitleDescription = ({ title, description }: { title: string, description: string }) => {
  return (
    <Box color="grayscale.100" mt="1rem" mb="2rem">
      <Text textStyle="text-3xl-mono-semibold">{title}</Text>
      <Text textStyle="text-base-sans-regular" color="grayscale.100">{description}</Text>
    </Box>
  )
}

function ColorInfo({ colorKey, colorDescription }: { colorKey: string, colorDescription: string }) {
  return (
    <Box mb="2rem">
      <Flex gap="2rem">
        <Box boxSize="5rem" bg={colorKey} borderRadius="0.75rem" />
        <Flex flexDirection="column" justifyContent="center" color="grayscale.100">
          <Text textStyle="text-3xl-mono-semibold">{colorKey}</Text>
          <Text textStyle="text-base-sans-regular">{colorDescription}</Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export function GeneralColors() {
  return (
    <Box mb="2rem">
      <TitleDescription title="General" description="From backgrounds, to selection, to icons, these general colors apply across the Fractal product" />
      <ColorInfo colorKey="gold.500" colorDescription="Primary button CTA, Focus outline" />
      <ColorInfo colorKey="grayscale.100" colorDescription="Icons" />
      <ColorInfo colorKey="black.900-semi-transparent" colorDescription="Used for component container backgrounds like activity cards" />
    </Box>
  )
}

export function TextColors() {
  return (
    <Box mb="2rem">
      <TitleDescription title="Text" description="The only color used for Fractal typography" />
      <ColorInfo colorKey="grayscale.100" colorDescription="Used for headline text, body text" />
      <ColorInfo colorKey="gold.500" colorDescription="Text link within a paragraph" />
      <ColorInfo colorKey="chocolate.200" colorDescription="Labels" />
      <ColorInfo colorKey="sand.700" colorDescription="Alternate/Highlight text" />
    </Box>
  )
}

export function BadgeColors() {
  return (
    <Box mb="2rem">
      <TitleDescription title="Badges" description="Use the following colors to denote the status of a proposal" />
      <ColorInfo colorKey="sand.700" colorDescription="These badges demonstrate an action can be taken such as voting and executing a proposal" />
      <ColorInfo colorKey="sand.800" colorDescription="These badges should be used when a proposal is no longer active. i.e., passed or rejected" />
    </Box>
  )
}