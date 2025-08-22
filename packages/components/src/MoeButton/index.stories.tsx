import type { Meta, StoryObj } from "@storybook/react";
// @ts-ignore
import React from "react";
import MoeButton from "./index";
import { fn } from "@storybook/test";

const meta: Meta<typeof MoeButton> = {
  title: "components/MoeButton",
  component: MoeButton,
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal = {
  name: "基础用法",
  args: {
    children: "测试按钮",
  },
};

export const Sizes = {
  name: "按钮尺寸",
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <MoeButton size="large">大号按钮</MoeButton>
      <MoeButton size="medium">中号按钮</MoeButton>
      <MoeButton size="small">小号按钮</MoeButton>
      <MoeButton size="mini">迷你按钮</MoeButton>
    </div>
  ),
};

export const Colors = {
  name: "颜色主题",
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <MoeButton color="primary">主要按钮</MoeButton>
      <MoeButton color="success">成功按钮</MoeButton>
      <MoeButton color="warning">警告按钮</MoeButton>
      <MoeButton color="danger">危险按钮</MoeButton>
      <MoeButton color="info">信息按钮</MoeButton>
      <MoeButton color="default">默认按钮</MoeButton>
    </div>
  ),
};

export const Rounded = {
  name: "圆角样式",
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <MoeButton rounded color="primary">
        圆角主要按钮
      </MoeButton>
      <MoeButton rounded color="success">
        圆角成功按钮
      </MoeButton>
      <MoeButton rounded size="small" color="danger">
        圆角危险按钮
      </MoeButton>
    </div>
  ),
};

export const Interactive: Story = {
  name: "交互示例",
  args: {
    children: "点击我",
    color: "primary",
    size: "medium",
  },
  parameters: {
    docs: {
      description: {
        story: "点击按钮查看交互效果",
      },
    },
  },
};

export const CustomContent = {
  name: "自定义内容",
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
      <MoeButton color="primary">
        <span style={{ marginRight: "8px" }}>🚀</span>
        带图标的按钮
      </MoeButton>
      <MoeButton color="success" size="large">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>✅</span>
          <span>成功提交</span>
        </div>
      </MoeButton>
    </div>
  ),
};
