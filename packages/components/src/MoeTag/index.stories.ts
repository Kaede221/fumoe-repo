import type { Meta, StoryObj } from "@storybook/react-webpack5";
import MoeTag from "./index";

const meta = {
  title: "components/MoeTag",
  component: MoeTag,
} satisfies Meta<typeof MoeTag>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
  },
};
