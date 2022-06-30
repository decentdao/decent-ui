import { Meta, Story } from "@storybook/react";
import { FontSizeStory } from "./FontSizeStory";
import { WeightsDisplay } from "./WeightsDisplay";

const storyConfig: Meta = {
  title: "atoms/Theme",
}
export default storyConfig


export const FontWeights: Story = WeightsDisplay

export const FontSizes: Story = FontSizeStory
