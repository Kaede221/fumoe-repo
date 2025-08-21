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
  args: {
    fontSize: 16,
    back: false,
    backgroundColor: "#FFFFFF",
  },
} satisfies Meta<typeof MoeHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  name: "基础用法",
  args: {
    children: "这是测试顶部",
  },
};

export const WithBack: Story = {
  name: "带返回的用法",
  args: {
    children: "带有返回按钮",
    back: true,
    backHandler: fn(),
  },
};

export const WithTitleLeft: Story = {
  name: "标题偏左的用法",
  args: {
    children: "标题偏左",
    titleLeft: true,
    back: true,
  },
};
