---
sidebar_position: 1
title: useBoolean
---

# useBoolean

用于布尔值状态管理的增强型 Hook，提供更丰富的布尔值操作方法。

## 语法

```ts
const [state, { toggle, set, setTrue, setFalse }] = useBoolean(defaultValue?);
```

## 参数

| 参数 | 类型 | 描述 | 默认值 |
|------|------|------|--------|
| `defaultValue` | `boolean` | 初始布尔值 | `false` |

## 返回值

返回一个包含当前布尔值和操作方法的元组：

```ts
[boolean, BooleanActions]
```

其中 `BooleanActions` 是一个包含以下方法的对象：

| 方法名 | 描述 |
|--------|------|
| `toggle()` | 切换布尔值状态（true ↔ false） |
| `set(newValue)` | 直接设置布尔值状态 |
| `setTrue()` | 将状态设置为 true 的快捷方法 |
| `setFalse()` | 将状态设置为 false 的快捷方法 |

## 示例

### 基本用法

```tsx
import { useBoolean } from '@fumoe/taro-hooks';

function ToggleExample() {
  const [isOpen, { toggle, setTrue, setFalse }] = useBoolean(false);

  return (
    <>
      <button onClick={toggle}>切换状态</button>
      <button onClick={setTrue}>设为开启</button>
      <button onClick={setFalse}>设为关闭</button>
      <div>当前状态: {isOpen ? '开启' : '关闭'}</div>
    </>
  );
}
```

### 控制模态框

```tsx
import { useBoolean } from '@fumoe/taro-hooks';
import { Modal } from '@tarojs/components';

function ModalExample() {
  const [isModalVisible, { setTrue, setFalse }] = useBoolean(false);

  return (
    <>
      <button onClick={setTrue}>打开模态框</button>
      <Modal
        title="提示"
        show={isModalVisible}
        onClose={setFalse}
        footer={[
          { text: '取消', onPress: setFalse },
          { text: '确定', onPress: () => {
            // 处理确定逻辑
            setFalse();
          }} 
        ]}
      >
        <View>这是一个模态框内容</View>
      </Modal>
    </>
  );
}