---
sidebar_position: 9
title: MoePicker
---

# MoePicker

弹出式选择器组件，支持多列布局、自定义标题和确认操作，适用于分类选择或选项列表场景。

## 引入

```tsx
import { MoePicker } from '@fumoe/taro-components';
```

## 类型定义

```ts
import { CSSProperties, ViewProps } from '@tarojs/components';

interface IMoePicker extends ViewProps {
  /** 选择器标题 */
  title?: string;
  /** 点击空白处是否可关闭 */
  closeable?: boolean;
  /** 是否显示选择器（受控属性） */
  open: boolean;
  /** 设置选择器显示状态 */
  setOpen: (value: boolean) => void;
  /** 显示列数 */
  columns: number;
  /** 可选内容列表 */
  categories: string[];
  /** 默认选中项 */
  defaultCategory?: string;
  /** 确认选择时的回调 */
  onConfirm: (confirmValue: string) => void;
  /** 确认按钮额外样式 */
  confirmButtonStyle?: CSSProperties;
}
```

## 属性

| 属性 | 类型 | 描述 | 默认值 |
|------|------|------|--------|
| `title` | `string` | 选择器标题文本 | `'请选择分类'` |
| `closeable` | `boolean` | 点击空白处是否关闭选择器 | `false` |
| `open` | `boolean` | 控制选择器显示/隐藏（必填） | - |
| `setOpen` | `(value: boolean) => void` | 更新选择器显示状态的函数（必填） | - |
| `columns` | `number` | 选项列表的列数 | - |
| `categories` | `string[]` | 选项数据数组（必填） | - |
| `defaultCategory` | `string` | 默认选中的选项值 | `''` |
| `onConfirm` | `(confirmValue: string) => void` | 确认选择时的回调函数（必填） | - |
| `confirmButtonStyle` | `CSSProperties` | 确认按钮的自定义样式 | - |

## 示例

### 基础用法

```tsx
import { MoePicker } from '@fumoe/taro-components';
import { useState } from 'react';

function BasicPicker() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const categories = ['选项1', '选项2', '选项3', '选项4', '选项5'];

  const handleConfirm = (value: string) => {
    setSelected(value);
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>打开选择器</button>
      <MoePicker
        open={open}
        setOpen={setOpen}
        columns={2}
        categories={categories}
        onConfirm={handleConfirm}
      />
    </>
  );
}
```

### 自定义标题和列数

```tsx
import { MoePicker } from '@fumoe/taro-components';
import { useState } from 'react';

function CustomPicker() {
  const [open, setOpen] = useState(false);
  const fruits = ['苹果', '香蕉', '橙子', '草莓', '西瓜', '葡萄', '芒果'];

  return (
    <>
      <button onClick={() => setOpen(true)}>选择水果</button>
      <MoePicker
        open={open}
        setOpen={setOpen}
        title="请选择水果"
        columns={3}
        categories={fruits}
        defaultCategory="苹果"
        closeable
        onConfirm={(value) => {
          console.log('选择了:', value);
          setOpen(false);
        }}
      />
    </>
  );
}
```

### 带样式的确认按钮

```tsx
import { MoePicker } from '@fumoe/taro-components';
import { useState } from 'react';

function StyledPicker() {
  const [open, setOpen] = useState(false);
  const options = ['红色', '蓝色', '绿色', '黄色', '紫色', '黑色', '白色'];

  return (
    <>
      <button onClick={() => setOpen(true)}>选择颜色</button>
      <MoePicker
        open={open}
        setOpen={setOpen}
        columns={3}
        categories={options}
        confirmButtonStyle={{ backgroundColor: '#1E90FF', color: 'white' }}
        onConfirm={(value) => {
          console.log('选择的颜色:', value);
          setOpen(false);
        }}
      />
    </>
  );
}