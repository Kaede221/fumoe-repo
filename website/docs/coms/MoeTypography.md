---
sidebar_position: 10
title: MoeTypography
---

# MoeTypography

排版组件，提供标题级别和样式控制，支持响应式设计，适用于页面标题和文本层级展示场景。

## 引入

```tsx
import { MoeTypography } from '@fumoe/taro-components';
```

## 子组件

### Title

标题组件，支持不同级别（对应H1-H6）和自定义样式。

#### 类型定义

```ts
import { ViewProps } from '@tarojs/components';

export interface ITitle extends ViewProps {
  /** 标题级别 (1-6)，对应H1-H6 */
  level?: number;
  /** 标题文本内容 */
  children?: string;
}
```

#### 属性

| 属性 | 类型 | 描述 | 默认值 |
|------|------|------|--------|
| `level` | `number` | 标题级别，可选值1-6 | `1` |
| `children` | `string` | 标题文本内容（必填） | - |

#### 示例

##### 基础用法

```tsx
import { MoeTypography } from '@fumoe/taro-components';

function TypographyExample() {
  return (
    <>
      <MoeTypography.Title level={1}>一级标题</MoeTypography.Title>
      <MoeTypography.Title level={2}>二级标题</MoeTypography.Title>
      <MoeTypography.Title level={3}>三级标题</MoeTypography.Title>
    </>
  );
}
```

##### 自定义样式

```tsx
import { MoeTypography } from '@fumoe/taro-components';

function StyledTitleExample() {
  return (
    <MoeTypography.Title
      level={2}
      style={{ color: '#1E90FF', marginBottom: '16px' }}
    >
      自定义颜色和边距的标题
    </MoeTypography.Title>
  );
}
```

##### 响应式标题

```tsx
import { MoeTypography } from '@fumoe/taro-components';
import { useWindowSize } from '../hooks/useWindowSize';

function ResponsiveTitleExample() {
  const { width } = useWindowSize();
  const level = width > 768 ? 1 : 2;

  return (
    <MoeTypography.Title level={level}>
      {width > 768 ? '桌面端一级标题' : '移动端二级标题'}
    </MoeTypography.Title>
  );
}