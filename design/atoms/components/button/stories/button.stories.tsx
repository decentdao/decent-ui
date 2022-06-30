import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../src/Button";


export default {
  title: "atoms/components/Button",
  component: Button,
  args: {
    label: "Label",
    onClick: () => { }
  }
} as ComponentMeta<typeof Button>;

const template: ComponentStory<typeof Button> = (args) => <Button { ...args } />;

export const Primary = template.bind({})
export const PrimaryLarge = template.bind({})