---
sidebar_position: 6
title: MoeCheckbox
---

# MoeCheckbox

功能完善的复选框组件，支持自定义样式、状态切换和交互反馈。

## 引入

```tsx
import { MoeCheckbox } from '@fumoe/taro-components';
```

## 类型定义

```ts
interface IMoeCheckbox extends ViewProps {
  /** 是否为选中状态 */
  checked?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 形状 */
  shape?: 'square' | 'round';
  /** 图标大小 */
  iconSize?: number;
  /** 自定义图标的链接、地址或base64字符串 */
  iconUrl?: string;
  /** 激活的背景颜色 */
  activeBackgroundColor?: string;
  /** 复选框右侧内容部分 */
  children?: ReactNode;
  /** 自定义样式表 */
  style?: CSSProperties;
  /** 切换时调用，传入切换后的值 */
  onChange?: (newValue: boolean) => void;
}
```

## 属性

| 属性 | 类型 | 描述 | 默认值 |
|------|------|------|--------|
| `checked` | `boolean` | 是否为选中状态 | `false` |
| `disabled` | `boolean` | 是否禁用 | `false` |
| `shape` | `'square' \| 'round'` | 复选框形状 | `'square'` |
| `iconSize` | `number` | 图标大小（像素） | `20` |
| `iconUrl` | `string` | 自定义图标链接 | 默认勾选图标 |
| `activeBackgroundColor` | `string` | 激活状态的背景颜色 | `'#1989FA'` |
| `children` | `ReactNode` | 右侧内容部分 | - |
| `style` | `CSSProperties` | 自定义样式 | - |
| `onChange` | `(newValue: boolean) => void` | 切换事件回调 | - |

## 示例

### 基础用法

```tsx
import { MoeCheckbox } from '@fumoe/taro-components';
import { useState } from 'react';

function BasicCheckboxExample() {
  const [checked, setChecked] = useState(false);

  return (
    <MoeCheckbox
      checked={checked}
      onChange={setChecked}
    >
      同意服务条款
    </MoeCheckbox>
  );
}
```

### 禁用状态

```tsx
import { MoeCheckbox } from '@fumoe/taro-components';

function DisabledCheckboxExample() {
  return (
    <>
      <MoeCheckbox
        checked
        disabled
      >
        已选中禁用
      </MoeCheckbox>
      <MoeCheckbox
        disabled
      >
        未选中禁用
      </MoeCheckbox>
    </>
  );
}
```

### 自定义形状和颜色

```tsx
import { MoeCheckbox } from '@fumoe/taro-components';

function CustomCheckboxExample() {
  return (
    <>
      <MoeCheckbox
        shape="round"
        activeBackgroundColor="#ff4d4f"
      >
        圆形红色复选框
      </MoeCheckbox>
      <MoeCheckbox
        shape="square"
        activeBackgroundColor="#52c41a"
      >
        方形绿色复选框
      </MoeCheckbox>
    </>
  );
}
```

### 自定义图标

```tsx
import { MoeCheckbox } from '@fumoe/taro-components';

function CustomIconCheckboxExample() {
  const customIcon = 'data:image/svg+xml;base64,...'; // 自定义图标的base64或URL

  return (
    <MoeCheckbox
      iconUrl={customIcon}
      iconSize={24}
    >
      自定义图标复选框
    </MoeCheckbox>
  );
}
```

### 受控组件

```tsx
import { MoeCheckbox } from '@fumoe/taro-components';
import { useState } from 'react';

function ControlledCheckboxExample() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <MoeCheckbox
        checked={checked}
        onChange={setChecked}
      >
        {checked ? '已选中' : '未选中'}
      </MoeCheckbox>
      <button onClick={() => setChecked(!checked)}>
        切换状态
      </button>
    </>
  );
}