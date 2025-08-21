import type { Meta, StoryObj } from "@storybook/react";
import MoeTag from "./index";
import { fn } from "@storybook/test";

const meta = {
  title: "components/MoeTag",
  component: MoeTag,
  argTypes: {
    mainColor: { control: "color" },
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof MoeTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CommonUse: Story = {
  args: {
    label: "This Is A tag",
    onClick: fn(),
  },
};
