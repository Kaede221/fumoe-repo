---
sidebar_position: 7
title: MoeFloatButton
---

# MoeFloatButton

悬浮按钮组件，支持自定义位置、尺寸、形状和背景颜色，适用于需要快速操作入口的场景。

## 引入

```tsx
import { MoeFloatButton } from '@fumoe/taro-components';
```

## 类型定义

```ts
import { CSSProperties, ViewProps } from '@tarojs/components';

interface IMoeFloatButton extends ViewProps {
  /**
   * 悬浮按钮的大小
   */
  size?: 'large' | 'default' | 'small' | number;
  /**
   * 悬浮按钮的形状
   */
  shape?: 'circle' | 'square';
  /**
   * 是否显示该按钮
   */
  visible?: boolean;
  /**
   * 按钮的图标内容
   */
  icon?: React.ReactNode;
  /**
   * 距离底部的距离 (px)
   */
  bottom?: number;
  /**
   * 距离右侧的距离 (px)
   */
  right?: number;
  /**
   * 点击事件 (已处理冒泡)
   */
  onClick?: () => void;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  /**
   * 按钮背景颜色
   */
  backgroundColor?: string;
}
```

## 属性

| 属性 | 类型 | 描述 | 默认值 |
|------|------|------|--------|
| `size` | `'large' \| 'default' \| 'small' \| number` | 按钮大小，字符串值对应预设尺寸，数字为自定义像素值 | `'default'` |
| `shape` | `'circle' \| 'square'` | 按钮形状 | `'circle'` |
| `visible` | `boolean` | 是否显示按钮 | `true` |
| `icon` | `React.ReactNode` | 按钮图标内容 | - |
| `bottom` | `number` | 距离底部的距离（像素） | `35` |
| `right` | `number` | 距离右侧的距离（像素） | `30` |
| `onClick` | `() => void` | 点击事件回调 | - |
| `style` | `CSSProperties` | 自定义样式 | - |
| `backgroundColor` | `string` | 按钮背景颜色 | `'#1E90FF'` |

## 示例

### 基础用法

```tsx
import { MoeFloatButton } from '@fumoe/taro-components';
import { Icon } from '@tarojs/components';

function BasicFloatButton() {
  return (
    <MoeFloatButton
      icon={<Icon type="plus" size={24} color="white" />}
      onClick={() => console.log('点击了悬浮按钮')}
    />
  );
}
```

### 自定义尺寸和颜色

```tsx
import { MoeFloatButton } from '@fumoe/taro-components';
import { Icon } from '@tarojs/components';

function CustomFloatButton() {
  return (
    <MoeFloatButton
      size="large"
      backgroundColor="#ff4d4f"
      icon={<Icon type="edit" size={28} color="white" />}
      onClick={() => console.log('大尺寸红色悬浮按钮')}
    />
  );
}
```

### 方形按钮与自定义位置

```tsx
import { MoeFloatButton } from '@fumoe/taro-components';
import { Icon } from '@tarojs/components';

function SquareFloatButton() {
  return (
    <MoeFloatButton
      shape="square"
      bottom={100}
      right={20}
      size={40}
      icon={<Icon type="share" size={20} color="white" />}
      onClick={() => console.log('方形悬浮按钮')}
    />
  );
}
```

### 条件显示悬浮按钮

```tsx
import { MoeFloatButton } from '@fumoe/taro-components';
import { Icon } from '@tarojs/components';
import { useState } from 'react';

function ConditionalFloatButton() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* 其他内容 */}
      <MoeFloatButton
        visible={visible}
        icon={<Icon type="top" size={24} color="white" />}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </>
  );
}
```

### 微信小程序安全区域适配

```tsx
import { MoeFloatButton } from '@fumoe/taro-components';
import { Icon } from '@tarojs/components';

function SafeAreaFloatButton() {
  return (
    <MoeFloatButton
      bottom={60} // 增加底部距离以适配iPhone底部安全区域
      backgroundColor="#52c41a"
      icon={<Icon type="home" size={24} color="white" />}
      onClick={() => console.log('返回首页')}
    />
  );
}