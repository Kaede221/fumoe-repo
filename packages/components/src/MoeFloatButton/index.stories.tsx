import type { Meta, StoryObj } from "@storybook/react";
// @ts-ignore
import React from "react";
import { View, Text } from "@tarojs/components";
import MoeFloatButton from "./index";
import { fn } from "@storybook/test";

const meta: Meta<typeof MoeFloatButton> = {
  title: "components/MoeFloatButton",
  component: MoeFloatButton,
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: "基础用法",
};

export const Shapes: Story = {
  name: "形状样式",
  render: () => (
    <View
      style={{
        display: "flex",
        gap: "32px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <MoeFloatButton
        shape="circle"
        icon={<Text style={{ color: "white", fontSize: 40 }}>圆</Text>}
      />
      <MoeFloatButton
        shape="square"
        icon={<Text style={{ color: "white", fontSize: 40 }}>方</Text>}
      />
    </View>
  ),
};

export const Colors: Story = {
  name: "颜色主题",
  render: () => (
    <View
      style={{
        display: "flex",
        gap: "32px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <MoeFloatButton
        backgroundColor="#1E90FF"
        icon={<Text style={{ color: "white", fontSize: 40 }}>蓝</Text>}
      />
    </View>
  ),
};

export const Positions: Story = {
  name: "位置调整",
  render: () => (
    <View
      style={{
        display: "flex",
        gap: "32px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <MoeFloatButton
        bottom={50}
        right={20}
        icon={<Text style={{ color: "white", fontSize: 32 }}>右20</Text>}
      />
      <MoeFloatButton
        bottom={100}
        right={50}
        icon={<Text style={{ color: "white", fontSize: 32 }}>底100</Text>}
      />
      <MoeFloatButton
        bottom={150}
        right={80}
        icon={<Text style={{ color: "white", fontSize: 32 }}>远</Text>}
      />
    </View>
  ),
};

export const Icons: Story = {
  name: "图标内容",
  render: () => (
    <View
      style={{
        display: "flex",
        gap: "32px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <MoeFloatButton
        icon={<Text style={{ color: "white", fontSize: 40 }}>+</Text>}
      />
      <MoeFloatButton
        icon={<Text style={{ color: "white", fontSize: 40 }}>↑</Text>}
      />
      <MoeFloatButton
        icon={<Text style={{ color: "white", fontSize: 36 }}>📞</Text>}
      />
      <MoeFloatButton
        icon={<Text style={{ color: "white", fontSize: 36 }}>✉️</Text>}
      />
      <MoeFloatButton
        icon={
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 24 }}>客服</Text>
          </View>
        }
      />
    </View>
  ),
};

export const Interactive: Story = {
  name: "交互示例",
  args: {
    icon: <Text style={{ color: "white", fontSize: 40 }}>点击我</Text>,
    backgroundColor: "#1E90FF",
  },
  parameters: {
    docs: {
      description: {
        story: "点击悬浮按钮查看交互效果，控制台会输出点击事件",
      },
    },
  },
};

export const CustomStyle: Story = {
  name: "自定义样式",
  render: () => (
    <View
      style={{
        display: "flex",
        gap: "32px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <MoeFloatButton
        style={{
          border: "2px solid #1E90FF",
          boxShadow: "0 4px 12px rgba(30, 144, 255, 0.3)",
        }}
        backgroundColor="white"
        icon={<Text style={{ color: "#1E90FF", fontSize: 40 }}>定</Text>}
      />
      <MoeFloatButton
        style={{
          borderRadius: 16,
          transform: "rotate(45deg)",
        }}
        backgroundColor="#FF6347"
        icon={
          <Text
            style={{
              color: "white",
              fontSize: 40,
              transform: "rotate(-45deg)",
            }}
          >
            旋
          </Text>
        }
      />
      <MoeFloatButton
        style={{
          opacity: 0.8,
        }}
        backgroundColor="#32CD32"
        icon={<Text style={{ color: "white", fontSize: 40 }}>透</Text>}
      />
    </View>
  ),
};

export const RealWorld: Story = {
  name: "实际应用场景",
  render: () => (
    <View
      style={{
        display: "flex",
        gap: "32px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <View style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Text style={{ fontSize: 28, color: "#666" }}>添加操作</Text>
        <MoeFloatButton
          backgroundColor="#07C160"
          icon={<Text style={{ color: "white", fontSize: 40 }}>+</Text>}
        />
      </View>
      <View style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Text style={{ fontSize: 28, color: "#666" }}>客服咨询</Text>
        <MoeFloatButton
          backgroundColor="#1989FA"
          icon={<Text style={{ color: "white", fontSize: 36 }}>💬</Text>}
        />
      </View>
      <View style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Text style={{ fontSize: 28, color: "#666" }}>返回顶部</Text>
        <MoeFloatButton
          backgroundColor="#FF8C00"
          icon={<Text style={{ color: "white", fontSize: 40 }}>↑</Text>}
        />
      </View>
    </View>
  ),
};
