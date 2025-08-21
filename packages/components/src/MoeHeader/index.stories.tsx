import type { Meta, StoryObj } from "@storybook/react";
import MoeHeader from "./index";
import { fn } from "@storybook/test";

const meta = {
  title: "components/MoeHeader",
  component: MoeHeader,
  argTypes: {
    fontSize: { control: "number" },
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof MoeHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: "这是测试顶部",
    back: true,
    backHandler: fn(),
  },
};
