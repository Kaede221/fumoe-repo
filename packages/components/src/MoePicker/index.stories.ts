import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import MoePicker from "./index";

const meta = {
  title: "components/MoePicker",
  component: MoePicker,
  parameters: {
    docs: {
      description: {
        component: "自定义弹出层选择器组件，支持多列布局和自定义分类选择。",
      },
    },
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "是否显示选择器",
    },
    closeable: {
      control: "boolean",
      description: "点击空白处是否可以关闭",
    },
    columns: {
      control: { type: "number", min: 1, max: 4 },
      description: "显示列数",
    },
    categories: {
      control: "object",
      description: "可选内容列表",
    },
    defaultCategory: {
      control: "text",
      description: "默认选择的内容",
    },
    setOpen: {
      action: "关闭选择器",
      description: "设置显示状态的回调函数",
    },
    onConfirm: {
      action: "确认选择",
      description: "确认时的回调函数，传入选择的内容",
    },
  },
} satisfies Meta<typeof MoePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "基础用法",
  args: {
    open: true,
    closeable: true,
    columns: 2,
    categories: ["点赞", "投币", "收藏", "分享", "关注"],
    onConfirm: fn(),
    setOpen: fn(),
  },
};

export const SingleColumn: Story = {
  name: "单列选择",
  args: {
    open: true,
    columns: 1,
    categories: ["男", "女", "保密"],
    defaultCategory: "保密",
    onConfirm: fn(),
    setOpen: fn(),
  },
};

export const ThreeColumn: Story = {
  name: "三列选择",
  args: {
    open: true,
    columns: 3,
    categories: [
      "红色",
      "蓝色",
      "绿色",
      "黄色",
      "紫色",
      "橙色",
      "粉色",
      "黑色",
      "白色",
    ],
    onConfirm: fn(),
    setOpen: fn(),
  },
};

export const NotCloseable: Story = {
  name: "不可点击空白关闭",
  args: {
    open: true,
    closeable: false,
    columns: 2,
    categories: ["选项A", "选项B", "选项C", "选项D"],
    onConfirm: fn(),
    setOpen: fn(),
  },
};

export const WithDefaultValue: Story = {
  name: "带默认值",
  args: {
    open: true,
    columns: 2,
    categories: ["早餐", "午餐", "晚餐", "夜宵"],
    defaultCategory: "午餐",
    onConfirm: fn(),
    setOpen: fn(),
  },
};

export const WithCustomTitle: Story = {
  name: "自定义标题",
  args: {
    open: true,
    columns: 2,
    title: "好好好",
    categories: ["Kaede", "Lc"],
    defaultCategory: "Lc",
    onConfirm: fn(),
    setOpen: fn(),
  },
};
