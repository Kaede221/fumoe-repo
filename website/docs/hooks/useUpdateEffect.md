---
sidebar_position: 5
title: useUpdateEffect
---

# useUpdateEffect

一个增强版的 useEffect Hook，会跳过首次渲染的副作用执行，只在依赖项变化时执行。

## 语法

```ts
useUpdateEffect(effect, deps ?);
```

## 参数

| 参数       | 类型                                          | 描述                      |
|----------|---------------------------------------------|-------------------------|
| `effect` | `() => (void \| (() => void \| undefined))` | 副作用函数，可以返回清理函数          |
| `deps`   | `React.DependencyList`                      | 可选的依赖项数组，与 useEffect 相同 |

## 说明

useUpdateEffect 的使用方式与 useEffect 完全相同，但有一个关键区别：它会跳过组件首次渲染时的副作用执行，只在依赖项发生变化时执行副作用。

这在以下场景特别有用：

- 仅在用户交互或数据变化后执行的副作用
- 避免在初始渲染时触发不必要的API调用或计算
- 实现仅在更新时执行的逻辑

## 示例

### 基本用法

```tsx
import {useState} from 'react';
import {useUpdateEffect} from '@fumoe/taro-hooks';

function UpdateEffectExample() {
    const [count, setCount] = useState(0);

    // 这个副作用只会在 count 变化时执行，不会在组件首次渲染时执行
    useUpdateEffect(() => {
        console.log('Count updated:', count);
        // 清理函数也是可选的
        return () => {
            console.log('Clean up previous effect');
        };
    }, [count]);

    return (
        <>
            <div>Count: {count}</div>
            <button onClick={() => setCount(prev => prev + 1)}>
                Increment
            </button>
        </>
    );
}
```

### 与 useEffect 对比

```tsx
import { useState } from 'react';
import { useEffect } from 'react';
import { useUpdateEffect } from '@fumoe/taro-hooks';

function ComparisonExample() {
  const [value, setValue] = useState('');

  // 这个会在首次渲染和 value 变化时执行
  useEffect(() => {
    console.log('useEffect triggered:', value);
  }, [value]);

  // 这个只会在 value 变化时执行，首次渲染时不会执行
  useUpdateEffect(() => {
    console.log('useUpdateEffect triggered:', value);
  }, [value]);

  return (
    <input 
      value={value} 
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type something"
    />
  );
}

// 运行结果（假设用户输入了 'hello'）:
// useEffect triggered: (empty string) - 首次渲染
// 当用户开始输入 'h':
// useEffect triggered: h
// useUpdateEffect triggered: h
// 当用户继续输入 'e':
// useEffect triggered: he
// useUpdateEffect triggered: he