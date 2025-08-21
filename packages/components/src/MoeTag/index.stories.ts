import type { Meta, StoryObj } from "@storybook/react";
import MoeTag from "./index";
import { fn } from "@storybook/test";

const meta = {
  title: "components/MoeTag",
  component: MoeTag,
  parameters: {
    docs: {
      description: {
        component: "通用标签组件，支持自定义颜色、图标和点击事件。",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "标签文本内容",
    },
    icon: {
      control: "text",
      description: "标签左侧图标路径",
    },
    mainColor: {
      control: "color",
      description: "标签主色调（文本、边框）",
    },
    backgroundColor: {
      control: "color",
      description: "标签背景色",
    },
    onClick: {
      action: "点击标签",
      description: "标签点击事件回调函数",
    },
  },
} satisfies Meta<typeof MoeTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "默认样式",
  args: {
    label: "默认标签",
    onClick: fn(),
  },
};

export const DefaultWithScale: Story = {
  name: "调整大小",
  args: {
    label: "大一点",
    scale: 1.3,
    onClick: fn(),
  },
};

export const WithIcon: Story = {
  name: "带图标",
  args: {
    label: "收藏标签",
    icon: "https://img.icons8.com/ios-filled/50/000000/star.png",
    onClick: fn(),
  },
};

export const CustomColors: Story = {
  name: "自定义颜色",
  args: {
    label: "重要标签",
    mainColor: "#ff4d4f",
    backgroundColor: "#fff2f0",
    onClick: fn(),
  },
};

export const SuccessTag: Story = {
  name: "成功状态",
  args: {
    label: "已完成",
    mainColor: "#52c41a",
    backgroundColor: "#f6ffed",
    onClick: fn(),
  },
};

export const WarningTag: Story = {
  name: "警告状态",
  args: {
    label: "待处理",
    mainColor: "#faad14",
    backgroundColor: "#fffbe6",
    onClick: fn(),
  },
};

export const LongText: Story = {
  name: "长文本标签",
  args: {
    label: "这是一个很长的标签文本内容",
    mainColor: "#722ed1",
    backgroundColor: "#f9f0ff",
    onClick: fn(),
  },
};

export const NoClick: Story = {
  name: "不可点击",
  args: {
    label: "静态标签",
    mainColor: "#8c8c8c",
    backgroundColor: "#f5f5f5",
  },
};
