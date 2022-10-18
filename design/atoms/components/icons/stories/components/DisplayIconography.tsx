import { ComponentWithAs, IconProps } from "@chakra-ui/react"
import { StoryLayout } from "../../../../../shared/StoryLayout"
import * as icons from '../../src'

export function DisplayIconography() {
  return (
    <StoryLayout title="Icon">
      {Object.values(icons).map((Icon: ComponentWithAs<"svg", IconProps>) => (
        <Icon boxSize="24px" m="1rem" />
      ))}
    </StoryLayout>
  )
}
