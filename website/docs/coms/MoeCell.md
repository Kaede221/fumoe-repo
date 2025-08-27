---
sidebar_position: 5
title: MoeCell
---

# MoeCell

通用的单元格列表组件，用于展示信息条目，支持图标、标题、内容和交互功能。

## 引入

```tsx
import { MoeCell } from '@fumoe/taro-components';
```

## 类型定义

```ts
interface IMoeCell extends ViewProps {
  /** 左侧标题部分 */
  title?: React.ReactNode;
  /**
   * 右侧信息部分
   * @deprecated 已弃用，请直接使用 children 设置单元格内容
   */
  label?: React.ReactNode;
  /** 左侧图标部分图片链接 */
  icon?: string;
  /** 是否显示右侧小箭头并开启点击反馈 */
  isLink?: boolean;
  /** 是否开启点击反馈 */
  clickable?: boolean;
  /** 点击的回调函数 */
  onClick?: () => void;
  /** 单元格内容部分 */
  children?: ReactNode;
}
```

## 属性

| 属性 | 类型 | 描述 | 默认值 |
|------|------|------|--------|
| `title` | `React.ReactNode` | 左侧标题部分 | - |
| `label` | `React.ReactNode` | 右侧信息部分（已弃用，建议使用 children） | - |
| `icon` | `string` | 左侧图标图片链接 | - |
| `isLink` | `boolean` | 是否显示右侧小箭头并开启点击反馈 | `false` |
| `clickable` | `boolean` | 是否开启点击反馈 | `false` |
| `onClick` | `() => void` | 点击事件回调函数 | - |
| `children` | `ReactNode` | 单元格内容部分（右侧信息区域） | - |

## 示例

### 基础用法

```tsx
import { MoeCell } from '@fumoe/taro-components';

function BasicCellExample() {
  return (
    <MoeCell
      title="基本信息"
      children="这是单元格内容"
    />
  );
}
```

### 带图标

```tsx
import { MoeCell } from '@fumoe/taro-components';

function IconCellExample() {
  return (
    <MoeCell
      icon="/images/user.png"
      title="用户资料"
      children="点击查看详情"
    />
  );
}
```

### 可点击链接

```tsx
import { MoeCell } from '@fumoe/taro-components';

function LinkCellExample() {
  const handleClick = () => {
    console.log('单元格被点击');
  };

  return (
    <MoeCell
      title="设置"
      children="账户与安全"
      isLink
      onClick={handleClick}
    />
  );
}
```

### 自定义内容

```tsx
import { MoeCell } from '@fumoe/taro-components';
import { View } from '@tarojs/components';

function CustomCellExample() {
  return (
    <MoeCell
      title="订单信息"
      isLink
    >
      <View style={{ display: 'flex', alignItems: 'center' }}>
        <View style={{ color: '#f5222d' }}>待付款</View>
        <View style={{ marginLeft: '10px', fontSize: '12px', color: '#999' }}>
          ¥199.00
        </View>
      </View>
    </MoeCell>
  );
}
```

### 带点击反馈

```tsx
import { MoeCell } from '@fumoe/taro-components';

function ClickableCellExample() {
  return (
    <MoeCell
      title="通知设置"
      children="接收新消息通知"
      clickable
      onClick={() => console.log('点击了通知设置')}
    />
  );
}