---
sidebar_position: 4
title: MoeBackdrop
---

# MoeBackdrop

一个用于创建半透明背景遮罩的组件，通常用于模态框、弹窗等场景。

## 引入

```tsx
import { MoeBackdrop } from '@fumoe/taro-components';
```

## 类型定义

```ts
interface IMoeBackdrop extends ViewProps {
  /**
   * 是否显示背景遮罩
   */
  visible: boolean;
  /**
   * 点击背景遮罩时的回调函数
   */
  onClick?: () => void;
  /**
   * 背景透明度，取值范围 0-1
   */
  opacity?: number;
  /**
   * 背景颜色
   */
  backgroundColor?: string;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  /**
   * 子元素
   */
  children?: React.ReactNode;
}
```

## 属性

| 属性 | 类型 | 描述 | 默认值 |
|------|------|------|--------|
| `visible` | `boolean` | 是否显示背景遮罩 | `false` |
| `onClick` | `() => void` | 点击背景遮罩时的回调函数 | - |
| `opacity` | `number` | 背景透明度，取值范围 0-1 | `0.5` |
| `backgroundColor` | `string` | 背景颜色 | `'rgba(0, 0, 0, 1)'` |
| `style` | `CSSProperties` | 自定义样式 | - |
| `children` | `React.ReactNode` | 子元素 | - |

## 示例

### 基础使用

```tsx
import { useState } from 'react';
import { MoeBackdrop } from '@fumoe/taro-components';

function BackdropExample() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button onClick={() => setIsVisible(true)}>
        显示遮罩
      </button>
      <MoeBackdrop 
        visible={isVisible} 
        onClick={() => setIsVisible(false)}
      />
    </>
  );
}
```

### 带内容的遮罩

```tsx
import { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MoeBackdrop } from '@fumoe/taro-components';

function ModalExample() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalVisible(true)}>
        打开模态框
      </button>
      <MoeBackdrop 
        visible={isModalVisible} 
        onClick={() => setIsModalVisible(false)}
      >
        <View className="modal-content">
          <Text className="modal-title">模态框标题</Text>
          <Text className="modal-body">这是一个带背景遮罩的模态框内容</Text>
          <button onClick={() => setIsModalVisible(false)}>
            关闭
          </button>
        </View>
      </MoeBackdrop>
    </>
  );
}
```

### 自定义样式

```tsx
import { useState } from 'react';
import { MoeBackdrop } from '@fumoe/taro-components';

function CustomBackdropExample() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button onClick={() => setIsVisible(true)}>
        显示自定义遮罩
      </button>
      <MoeBackdrop 
        visible={isVisible} 
        onClick={() => setIsVisible(false)}
        opacity={0.8}
        backgroundColor="rgba(255, 255, 255, 1)"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}
      />
    </>
  );
}