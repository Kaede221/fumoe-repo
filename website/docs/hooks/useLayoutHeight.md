---
sidebar_position: 6
title: useLayoutHeight
---

# useLayoutHeight

一个用于获取元素布局高度的Hook，特别适用于需要根据元素实际高度进行计算的场景。

## 语法

```ts
const [height, ref] = useLayoutHeight();
```

## 返回值

返回一个包含当前元素高度和引用对象的元组：

```ts
[number, React.RefObject<T>]
```

其中：
- 第一个元素是当前元素的高度，单位为像素
- 第二个元素是一个React引用对象，需要绑定到目标元素上

## 说明

useLayoutHeight Hook会在组件挂载后自动测量绑定元素的高度，并在窗口大小变化时自动更新高度值。

这在以下场景特别有用：
- 需要根据元素实际高度进行布局计算
- 实现可折叠/展开的动态高度组件
- 响应式设计中需要根据元素高度调整其他元素样式

## 示例

### 基础用法

```tsx
import { useLayoutHeight } from '@fumoe/taro-hooks';
import { View } from '@tarojs/components';

function HeightMeasurementExample() {
  const [height, ref] = useLayoutHeight();

  return (
    <>
      <View ref={ref} style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        这是一个需要测量高度的元素
        <br />
        它的高度会被自动测量
      </View>
      <View>元素高度: {height}px</View>
    </>
  );
}
```

### 动态内容高度

```tsx
import { useState } from 'react';
import { useLayoutHeight } from '@fumoe/taro-hooks';
import { View, Button } from '@tarojs/components';

function DynamicHeightExample() {
  const [content, setContent] = useState('基础内容');
  const [height, ref] = useLayoutHeight();

  const addMoreContent = () => {
    setContent(prev => prev + '\n添加更多内容...');
  };

  return (
    <>
      <Button onClick={addMoreContent}>添加内容</Button>
      <View 
        ref={ref} 
        style={{ 
          padding: '20px', 
          backgroundColor: '#f0f0f0',
          whiteSpace: 'pre-line'
        }}
      >
        {content}
      </View>
      <View>当前内容高度: {height}px</View>
    </>
  );
}
```

### 基于高度的条件渲染

```tsx
import { useLayoutHeight } from '@fumoe/taro-hooks';
import { View } from '@tarojs/components';

function HeightBasedRenderExample() {
  const [height, ref] = useLayoutHeight();

  return (
    <>
      <View 
        ref={ref} 
        style={{ 
          padding: '20px', 
          backgroundColor: '#f0f0f0'
        }}
      >
        这是一些可能很长的内容...
      </View>
      
      {height > 100 && (
        <View style={{ color: 'red' }}>
          提示：内容高度超过100px
        </View>
      )}
      
      {height > 200 && (
        <View style={{ color: 'orange' }}>
          警告：内容高度超过200px，可能影响用户体验
        </View>
      )}
    </>
  );
}