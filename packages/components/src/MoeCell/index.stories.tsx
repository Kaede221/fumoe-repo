import type { Meta, StoryObj } from "@storybook/react";
import MoeCell from "./index";
import { fn } from "@storybook/test";
import { Text, View } from "@tarojs/components";
// @ts-ignore
import React from "react";

const meta: Meta<typeof MoeCell> = {
  title: "components/MoeCell",
  component: MoeCell,
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof MoeCell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: "基础用法",
  args: {
    title: "用户名",
    label: "张三",
  },
};

export const WithLink: Story = {
  name: "带链接的单元格",
  args: {
    title: "个人资料",
    label: "查看详情",
    isLink: true,
  },
};

export const NotClickable: Story = {
  name: "不可点击的单元格",
  args: {
    title: "版本号",
    label: "v1.0.0",
    clickable: false,
  },
};

export const CustomContent: Story = {
  name: "自定义内容",
  render: () => (
    <View style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      <MoeCell
        title="状态"
        label={
          <Text style={{ color: "#07C160", fontWeight: "bold" }}>已激活</Text>
        }
      />
      <MoeCell
        title="等级"
        label={<Text style={{ color: "#FF8C00" }}>VIP会员</Text>}
        isLink
      />
    </View>
  ),
};

export const ListExample: Story = {
  name: "列表组合示例",
  render: () => (
    <View style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      <MoeCell title="姓名" label="李四" />
      <MoeCell title="手机号" label="138****8888" />
      <MoeCell title="邮箱" label="user@example.com" isLink />
      <MoeCell title="地址" label="北京市朝阳区" isLink />
    </View>
  ),
};

export const SettingsExample: Story = {
  name: "设置页面示例",
  render: () => (
    <View style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      <MoeCell title="账号与安全" label="" isLink />
      <MoeCell title="通知设置" label="" isLink />
      <MoeCell title="隐私设置" label="" isLink />
      <MoeCell title="关于我们" label="v2.1.0" isLink />
    </View>
  ),
};

export const Interactive: Story = {
  name: "交互示例",
  args: {
    title: "点击测试",
    label: "点击我试试",
    isLink: true,
  },
  parameters: {
    docs: {
      description: {
        story: "点击单元格查看交互效果，控制台会输出点击事件",
      },
    },
  },
};
