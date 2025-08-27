---
sidebar_position: 3
title: MoeLoading
---

# MoeLoading

一个用于显示加载状态的动画组件，支持不同尺寸和颜色。

## 引入

```tsx
import { MoeLoading } from '@fumoe/taro-components';
```

## 类型定义

```ts
interface IMoeLoading extends ViewProps {
  /**
   * 加载动画颜色
   */
  color?: string;
  /**
   * 加载动画尺寸
   */
  size?: 'small' | 'default' | 'large';
  /**
   * 是否显示加载指示器
   */
  visible?: boolean;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
}
```

## 属性

| 属性 | 类型 | 描述 | 默认值 |
|------|------|------|--------|
| `color` | `string` | 加载动画颜色 | `'#007aff'` |
| `size` | `'small' \| 'default' \| 'large'` | 加载动画尺寸 | `'default'` |
| `visible` | `boolean` | 是否显示加载指示器 | `true` |
| `style` | `CSSProperties` | 自定义样式 | - |

## 示例

### 基础使用

```tsx
import { MoeLoading } from '@fumoe/taro-components';

function LoadingExample() {
  return (
    <MoeLoading />
  );
}
```

### 不同尺寸

```tsx
import { MoeLoading } from '@fumoe/taro-components';

function SizeLoadingExample() {
  return (
    <>
      <MoeLoading size="small" />
      <MoeLoading size="default" />
      <MoeLoading size="large" />
    </>
  );
}
```

### 自定义颜色

```tsx
import { MoeLoading } from '@fumoe/taro-components';

function ColorLoadingExample() {
  return (
    <>
      <MoeLoading color="#ff4d4f" />
      <MoeLoading color="#52c41a" />
      <MoeLoading color="#faad14" />
    </>
  );
}
```

### 控制显示状态

```tsx
import { useState } from 'react';
import { MoeLoading } from '@fumoe/taro-components';

function ControlledLoadingExample() {
  const [isLoading, setIsLoading] = useState(true);

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      <button onClick={toggleLoading}>
        {isLoading ? '隐藏加载' : '显示加载'}
      </button>
      <MoeLoading visible={isLoading} />
    </>
  );
}