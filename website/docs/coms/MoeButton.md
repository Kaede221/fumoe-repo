---
sidebar_position: 1
title: MoeButton
---

# MoeButton

一个功能丰富的按钮组件，支持多种样式、尺寸和交互效果。

## 引入

```tsx
import { MoeButton } from '@fumoe/taro-components';
```

## 类型定义

```ts
interface IMoeButton extends ViewProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  rounded?: boolean;
  size?: 'large' | 'medium' | 'small' | 'mini';
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'default' | 'info';
  variant?: 'contained' | 'outlined' | 'text';
  disabled?: boolean;
  onClick?: () => void;
}
```

## 属性

| 属性 | 类型 | 描述 | 默认值 |
|------|------|------|--------|
| `children` | `React.ReactNode` | 按钮内容 | - |
| `className` | `string` | 自定义CSS类名 | - |
| `style` | `React.CSSProperties` | 自定义style属性, 会覆盖原有样式 | - |
| `rounded` | `boolean` | 是否使用圆角样式 | `false` |
| `size` | `'large' \| 'medium' \| 'small' \| 'mini'` | 按钮尺寸 | `'medium'` |
| `color` | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'default' \| 'info'` | 按钮颜色主题 | `'default'` |
| `variant` | `'contained' \| 'outlined' \| 'text'` | 按钮类型 | `'contained'` |
| `disabled` | `boolean` | 按钮是否被禁用 | `false` |
| `onClick` | `() => void` | 点击事件回调函数 | - |

## 示例

### 基础使用

```tsx
import { MoeButton } from '@fumoe/taro-components';

function ButtonExample() {
  return (
    <>
      <MoeButton onClick={() => console.log('点击了按钮')}>
        默认按钮
      </MoeButton>
    </>
  );
}
```

### 不同颜色主题

```tsx
import { MoeButton } from '@fumoe/taro-components';

function ColorButtonExample() {
  return (
    <>
      <MoeButton color="primary">主要按钮</MoeButton>
      <MoeButton color="success">成功按钮</MoeButton>
      <MoeButton color="warning">警告按钮</MoeButton>
      <MoeButton color="danger">危险按钮</MoeButton>
      <MoeButton color="info">信息按钮</MoeButton>
    </>
  );
}
```

### 不同类型

```tsx
import { MoeButton } from '@fumoe/taro-components';

function VariantButtonExample() {
  return (
    <>
      <MoeButton variant="contained" color="primary">
        实心按钮
      </MoeButton>
      <MoeButton variant="outlined" color="primary">
        描边按钮
      </MoeButton>
      <MoeButton variant="text" color="primary">
        文本按钮
      </MoeButton>
    </>
  );
}
```

### 不同尺寸

```tsx
import { MoeButton } from '@fumoe/taro-components';

function SizeButtonExample() {
  return (
    <>
      <MoeButton size="large">大按钮</MoeButton>
      <MoeButton size="medium">中按钮</MoeButton>
      <MoeButton size="small">小按钮</MoeButton>
      <MoeButton size="mini">迷你按钮</MoeButton>
    </>
  );
}
```

### 圆角按钮

```tsx
import { MoeButton } from '@fumoe/taro-components';

function RoundedButtonExample() {
  return (
    <>
      <MoeButton rounded>圆角按钮</MoeButton>
      <MoeButton rounded color="primary">
        主要圆角按钮
      </MoeButton>
    </>
  );
}
```

### 禁用状态

```tsx
import { MoeButton } from '@fumoe/taro-components';

function DisabledButtonExample() {
  return (
    <>
      <MoeButton disabled>禁用按钮</MoeButton>
      <MoeButton disabled color="primary">
        禁用主要按钮
      </MoeButton>
    </>
  );
}