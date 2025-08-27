---
sidebar_position: 4
title: useResetState
---

# useResetState

一个增强版的 useState Hook，提供额外的状态重置功能。

## 语法

```ts
const [state, setState, resetState] = useResetState(initialValue);
```

## 参数

| 参数 | 类型 | 描述 |
|------|------|------|
| `initialValue` | `T` | 状态的初始值，可以是任何类型 |

## 返回值

返回一个包含当前状态、设置状态函数和重置状态函数的元组：

```ts
[T, React.Dispatch<React.SetStateAction<T>>, () => void]
```

其中：
- 第一个元素是当前的状态值
- 第二个元素是设置状态的函数，与原生 useState 相同
- 第三个元素是重置状态的函数，调用后会将状态恢复为初始值

## 示例

### 基础用法

```tsx
import { useResetState } from '@fumoe/taro-hooks';

function FormExample() {
  const [formData, setFormData, resetForm] = useResetState({
    name: '',
    age: 0,
    email: ''
  });

  const handleSubmit = () => {
    // 处理表单提交
    console.log(formData);
    // 提交后重置表单
    resetForm();
  };

  return (
    <>
      {/* 表单输入控件 */}
      <button onClick={handleSubmit}>提交</button>
      <button onClick={resetForm}>重置</button>
    </>
  );
}
```

### 复杂对象状态

```tsx
import { useResetState } from '@fumoe/taro-hooks';

function ComplexStateExample() {
  const [userData, setUserData, resetUserData] = useResetState({
    id: 1,
    profile: {
      name: 'John Doe',
      avatar: '/default-avatar.png'
    },
    preferences: {
      theme: 'light',
      notifications: true
    }
  });

  const updateName = (newName: string) => {
    setUserData(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        name: newName
      }
    }));
  };

  return (
    <>
      <div>当前用户: {userData.profile.name}</div>
      <button onClick={() => updateName('New Name')}>更改名称</button>
      <button onClick={resetUserData}>重置用户数据</button>
    </>
  );
}