---
sidebar_position: 3
title: useToggle
---

# useToggle

用于切换布尔值状态的简单 Hook，提供最基本的布尔值切换功能。

## 语法

```ts
const [state, toggle] = useToggle(defaultValue ?);
```

## 参数

| 参数             | 类型        | 描述    | 默认值     |
|----------------|-----------|-------|---------|
| `defaultValue` | `boolean` | 初始布尔值 | `false` |

## 返回值

返回一个包含当前布尔值和切换函数的元组：

```ts
[boolean, () => void]
```

其中：

- 第一个元素是当前的布尔值状态
- 第二个元素是切换函数，调用后会在 true 和 false 之间切换状态

## 示例

### 基础用法

```tsx
import {useToggle} from '@fumoe/taro-hooks';

function ToggleExample() {
    const [isOpen, toggleIsOpen] = useToggle(false);

    return (
        <>
            <button onClick={toggleIsOpen}>
                {isOpen ? '关闭' : '打开'}
            </button>
            {isOpen && <div>内容显示区域</div>}
        </>
    );
}
```

### 切换显示/隐藏

```tsx
import { useToggle } from '@fumoe/taro-hooks';
import { View } from '@tarojs/components';

function VisibilityToggleExample() {
  const [isVisible, toggleVisibility] = useToggle(true);

  return (
    <>
      <button onClick={toggleVisibility}>
        {isVisible ? '隐藏内容' : '显示内容'}
      </button>
      {isVisible && (
        <View className="content">
          这是可以被显示或隐藏的内容
        </View>
      )}
    </>
  );
}