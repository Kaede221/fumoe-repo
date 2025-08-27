---
sidebar_position: 2
title: MoeTag
---

# MoeTag

一个通用的标签组件，支持文本、图标显示，并提供多种样式选择。

## 引入

```tsx
import { MoeTag } from '@fumoe/taro-components';
```

## 类型定义

```ts
interface IMoeTag extends ViewProps {
  label: string;
  icon?: string;
  color?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
  variant?: 'outlined' | 'contained';
  size?: 'large' | 'medium' | 'default';
  shape?: 'rounded' | 'roundedRight' | 'roundedLeft' | 'square';
  onClick?: () => void;
  style?: CSSProperties;
}
```

## 属性

| 属性 | 类型 | 描述 | 默认值 |
|------|------|------|--------|
| `label` | `string` | 标签文本 | - |
| `icon` | `string` | 左侧图标路径 | - |
| `color` | `'default' \| 'primary' \| 'info' \| 'success' \| 'warning' \| 'danger'` | 标签颜色 | `'default'` |
| `variant` | `'outlined' \| 'contained'` | 标签样式 | `'contained'` |
| `size` | `'large' \| 'medium' \| 'default'` | 标签大小 | `'default'` |
| `shape` | `'rounded' \| 'roundedRight' \| 'roundedLeft' \| 'square'` | 标签形状 | `'square'` |
| `onClick` | `() => void` | 点击事件 | - |
| `style` | `CSSProperties` | 自定义样式 | - |

## 示例

### 基础使用

```tsx
import { MoeTag } from '@fumoe/taro-components';

function TagExample() {
  return (
    <>
      <MoeTag label="普通标签" />
    </>
  );
}
```

### 不同颜色

```tsx
import { MoeTag } from '@fumoe/taro-components';

function ColorTagExample() {
  return (
    <>
      <MoeTag label="默认标签" color="default" />
      <MoeTag label="主要标签" color="primary" />
      <MoeTag label="信息标签" color="info" />
      <MoeTag label="成功标签" color="success" />
      <MoeTag label="警告标签" color="warning" />
      <MoeTag label="危险标签" color="danger" />
    </>
  );
}
```

### 不同样式

```tsx
import { MoeTag } from '@fumoe/taro-components';

function VariantTagExample() {
  return (
    <>
      <MoeTag label="实心标签" variant="contained" />
      <MoeTag label="描边标签" variant="outlined" />
      <MoeTag label="彩色实心标签" variant="contained" color="primary" />
      <MoeTag label="彩色描边标签" variant="outlined" color="primary" />
    </>
  );
}
```

### 不同大小

```tsx
import { MoeTag } from '@fumoe/taro-components';

function SizeTagExample() {
  return (
    <>
      <MoeTag label="大标签" size="large" />
      <MoeTag label="中标签" size="medium" />
      <MoeTag label="默认标签" size="default" />
    </>
  );
}
```

### 不同形状

```tsx
import { MoeTag } from '@fumoe/taro-components';

function ShapeTagExample() {
  return (
    <>
      <MoeTag label="方形标签" shape="square" />
      <MoeTag label="圆角标签" shape="rounded" />
      <MoeTag label="左圆角标签" shape="roundedLeft" />
      <MoeTag label="右圆角标签" shape="roundedRight" />
    </>
  );
}
```

### 带图标

```tsx
import { MoeTag } from '@fumoe/taro-components';

function IconTagExample() {
  return (
    <>
      <MoeTag label="带图标标签" icon="/path/to/icon.png" />
      <MoeTag label="彩色带图标" icon="/path/to/icon.png" color="primary" />
    </>
  );
}
```

### 可点击

```tsx
import { MoeTag } from '@fumoe/taro-components';

function ClickableTagExample() {
  return (
    <>
      <MoeTag 
        label="可点击标签" 
        onClick={() => console.log('标签被点击了')}
      />
    </>
  );
}