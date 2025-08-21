import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import MoePicker from "./index";

const meta = {
  title: "components/MoePicker",
  component: MoePicker,
} satisfies Meta<typeof MoePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    open: true,
    setOpen: fn(),
    columns: 2,
    categories: ["点赞", "投币", "收藏"],
    onConfirm: fn(),
  },
};
