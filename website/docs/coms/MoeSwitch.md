---
sidebar_position: 6
title: MoeSwitch
---

# MoeSwitch

开关切换组件，支持加载状态、尺寸定制和颜色主题，适用于需要开启/关闭功能的场景。

## 引入

```tsx
import { MoeSwitch } from '@fumoe/taro-components';
```

## 类型定义

```ts
interface IMoeSwitch extends ViewProps {
  /** 开关显示值（受控属性） */
  value: boolean;
  /** 开关大小（像素） */
  size?: number;
  /** 是否为加载状态 */
  loading?: boolean;
  /** 加载动画的类型 */
  loadingType?: 'circular' | 'spinner';
  /** 是否禁用（禁用不可点击） */
  disabled?: boolean;
  /** 激活时的背景颜色 */
  activeBackgroundColor?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 开关状态切换时触发 */
  onChange: (value: boolean) => void;
}
```

## 属性

| 属性 | 类型 | 描述 | 默认值 |
|------|------|------|--------|
| `value` | `boolean` | 开关状态值（受控属性，必填） | - |
| `size` | `number` | 开关按钮尺寸（像素） | `20` |
| `loading` | `boolean` | 是否显示加载状态 | `false` |
| `loadingType` | `'circular' \| 'spinner'` | 加载动画类型 | `'circular'` |
| `disabled` | `boolean` | 是否禁用（禁用时不可点击） | `false` |
| `activeBackgroundColor` | `string` | 激活状态的背景颜色 | `'#1989FA'` |
| `style` | `CSSProperties` | 自定义样式 | - |
| `onChange` | `(value: boolean) => void` | 状态切换回调（返回新状态） | - |

## 示例

### 基础用法

```tsx
import { MoeSwitch } from '@fumoe/taro-components';
import { useState } from 'react';

function BasicSwitchExample() {
  const [enabled, setEnabled] = useState(false);

  return (
    <MoeSwitch
      value={enabled}
      onChange={setEnabled}
    />
  );
}
```

### 禁用状态

```tsx
import { MoeSwitch } from '@fumoe/taro-components';

function DisabledSwitchExample() {
  return (
    <MoeSwitch
      value={true}
      disabled
      onChange={(val) => console.log('不会触发，因为已禁用')}
    />
  );
}
```

### 加载状态

```tsx
import { MoeSwitch } from '@fumoe/taro-components';
import { useState } from 'react';

function LoadingSwitchExample() {
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggle = (newValue: boolean) => {
    setLoading(true);
    // 模拟API请求
    setTimeout(() => {
      setEnabled(newValue);
      setLoading(false);
    }, 1500);
  };

  return (
    <MoeSwitch
      value={enabled}
      loading={loading}
      loadingType="spinner"
      onChange={handleToggle}
    />
  );
}
```

### 自定义尺寸和颜色

```tsx
import { MoeSwitch } from '@fumoe/taro-components';
import { useState } from 'react';

function CustomSwitchExample() {
  const [enabled, setEnabled] = useState(true);

  return (
    <MoeSwitch
      value={enabled}
      size={28}
      activeBackgroundColor="#52c41a"
      onChange={setEnabled}
    />
  );
}
```

### 受控组件结合文本

```tsx
import { MoeSwitch } from '@fumoe/taro-components';
import { useState } from 'react';
import { View } from '@tarojs/components';

function LabeledSwitchExample() {
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <View>接收通知</View>
      <MoeSwitch
        value={notifications}
        onChange={setNotifications}
      />
    </View>
  );
}