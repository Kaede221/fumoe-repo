---
sidebar_position: 2
title: useCounter
---

# useCounter

管理计数器的 Hook，提供计数器的基本操作和边界限制。

## 语法

```ts
const [count, { inc, dec, set, reset }] = useCounter(initValue, options?);
```

## 参数

| 参数 | 类型 | 描述 |
|------|------|------|
| `initValue` | `number` | 计数器的初始值 |
| `options` | `object` | 可选配置项 |
| `options.min` | `number` | 计数器的最小值限制 |
| `options.max` | `number` | 计数器的最大值限制 |

## 返回值

返回一个包含当前计数器和操作方法的元组：

```ts
[number, CounterActions]
```

其中 `CounterActions` 是一个包含以下方法的对象：

| 方法名 | 描述 |
|--------|------|
| `inc()` | 将计数器值增加 1（如果设置了 max 且当前值已达最大值，则不会增加） |
| `dec()` | 将计数器值减少 1（如果设置了 min 且当前值已达最小值，则不会减少） |
| `set(newValue)` | 设置计数器为指定值（如果设置了边界限制，值会被自动调整到有效范围内） |
| `reset()` | 将计数器重置为初始值（如果初始值超出边界限制，会被调整到有效范围内） |

## 示例

### 基础使用

```tsx
import { useCounter } from '@fumoe/taro-hooks';

function CounterExample() {
  const [count, { inc, dec, set, reset }] = useCounter(0);

  return (
    <>
      <button onClick={dec}>-</button>
      <span>{count}</span>
      <button onClick={inc}>+</button>
      <button onClick={() => set(10)}>设为 10</button>
      <button onClick={reset}>重置</button>
    </>
  );
}
```

### 设置边界限制

```tsx
import { useCounter } from '@fumoe/taro-hooks';

function LimitedCounterExample() {
  const [count, { inc, dec, set }] = useCounter(5, { min: 0, max: 10 });

  return (
    <>
      <button onClick={dec} disabled={count === 0}>-</button>
      <span>{count}</span>
      <button onClick={inc} disabled={count === 10}>+</button>
      <button onClick={() => set(15)}>尝试设为 15（将被限制为 10）</button>
      <button onClick={() => set(-5)}>尝试设为 -5（将被限制为 0）</button>
    </>
  );
}

// 输出结果：
// 尝试设为 15 后，计数器值为 10
// 尝试设为 -5 后，计数器值为 0
```