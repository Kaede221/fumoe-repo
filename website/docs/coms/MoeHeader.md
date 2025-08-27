---
sidebar_position: 8
title: MoeHeader
---

# MoeHeader

导航栏组件，支持自定义标题样式、返回按钮和固定定位，适配小程序安全区域，适用于页面顶部导航场景。

## 引入

```tsx
import { MoeHeader } from '@fumoe/taro-components';
```

## 类型定义

```ts
import { ReactNode, ViewProps } from '@tarojs/components';

interface IMoeHeader extends ViewProps {
  /** 标题大小（像素） */
  fontSize?: number;
  /** 返回图标大小（像素） */
  iconSize?: number;
  /** 标题是否靠左对齐 */
  titleLeft?: boolean;
  /** 是否固定在顶部 */
  fixed?: boolean;
  /** 是否显示返回图标 */
  back?: boolean;
  /** 返回图标，支持路径字符串或base64 */
  backIcon?: string;
  /** 点击返回区域的回调事件 */
  backHandler?: () => void;
  /** 背景颜色 */
  backgroundColor?: string;
  /** 层级高度 */
  zIndex?: number;
  /** 标题内容 */
  children?: ReactNode;
}
```

## 属性

| 属性 | 类型 | 描述 | 默认值 |
|------|------|------|--------|
| `fontSize` | `number` | 标题文字大小（像素） | - |
| `iconSize` | `number` | 返回图标的大小（像素） | - |
| `titleLeft` | `boolean` | 标题是否靠左对齐 | `false` |
| `fixed` | `boolean` | 是否固定在顶部 | `false` |
| `back` | `boolean` | 是否显示返回图标 | `false` |
| `backIcon` | `string` | 自定义返回图标（路径或base64） | 默认箭头图标 |
| `backHandler` | `() => void` | 点击返回区域的回调 | 默认调用Taro.navigateBack |
| `backgroundColor` | `string` | 背景颜色 | `transparent` |
| `zIndex` | `number` | 层级高度 | `1000` |
| `children` | `ReactNode` | 标题内容（必填） | - |

## 示例

### 基础用法

```tsx
import { MoeHeader } from '@fumoe/taro-components';

function BasicHeader() {
  return (
    <MoeHeader>
      页面标题
    </MoeHeader>
  );
}
```

### 带返回按钮的导航栏

```tsx
import { MoeHeader } from '@fumoe/taro-components';

function HeaderWithBack() {
  const handleBack = () => {
    console.log('自定义返回逻辑');
    // 可以在这里添加确认弹窗等逻辑
  };

  return (
    <MoeHeader
      back
      backHandler={handleBack}
      backgroundColor="#ffffff"
    >
      个人中心
    </MoeHeader>
  );
}
```

### 固定定位与自定义样式

```tsx
import { MoeHeader } from '@fumoe/taro-components';

function FixedHeader() {
  return (
    <MoeHeader
      fixed
      fontSize={18}
      backgroundColor="#1E90FF"
      zIndex={999}
      titleLeft
    >
      固定顶部导航
    </MoeHeader>
  );
}
```

### 自定义返回图标

```tsx
import { MoeHeader } from '@fumoe/taro-components';

function CustomBackIconHeader() {
  // 自定义返回图标的base64或图片路径
  const customBackIcon = 'data:image/svg+xml;base64,...';

  return (
    <MoeHeader
      back
      backIcon={customBackIcon}
      iconSize={28}
    >
      自定义返回图标
    </MoeHeader>
  );
}
```

### 适配深色模式

```tsx
import { MoeHeader } from '@fumoe/taro-components';
import { useTheme } from '../hooks/useTheme';

function DarkModeHeader() {
  const { isDarkMode } = useTheme();

  return (
    <MoeHeader
      backgroundColor={isDarkMode ? '#1a1a1a' : '#ffffff'}
      style={{ color: isDarkMode ? '#ffffff' : '#000000' }}
      back
    >
      深色模式适配
    </MoeHeader>
  );
}