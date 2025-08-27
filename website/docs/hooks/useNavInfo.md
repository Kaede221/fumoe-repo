---
sidebar_position: 7
title: useNavInfo
---

# useNavInfo

一个用于获取和监听Taro导航栏信息的Hook，方便开发者获取当前页面的导航状态。

## 语法

```ts
const navInfo = useNavInfo();
```

## 返回值

返回一个包含当前导航信息的对象：

```ts
{
  // 当前页面路径
  path: string;
  // 当前页面参数
  params: Record<string, any>;
  // 页面栈长度
  pageStackLength: number;
  // 是否是首页
  isHomePage: boolean;
}
```

## 说明

useNavInfo Hook会在组件挂载时获取当前页面的导航信息，并在页面参数或页面栈发生变化时自动更新。

这在以下场景特别有用：
- 根据当前页面路径显示不同的UI
- 处理页面参数
- 判断是否需要显示返回按钮

## 示例

### 基础用法

```tsx
import { useNavInfo } from '@fumoe/taro-hooks';
import { View } from '@tarojs/components';

function NavInfoExample() {
  const navInfo = useNavInfo();

  return (
    <View>
      <View>当前页面路径: {navInfo.path}</View>
      <View>页面栈长度: {navInfo.pageStackLength}</View>
      <View>是否首页: {navInfo.isHomePage ? '是' : '否'}</View>
      <View>页面参数: {JSON.stringify(navInfo.params)}</View>
    </View>
  );
}
```

### 根据是否首页显示返回按钮

```tsx
import { useNavInfo } from '@fumoe/taro-hooks';
import { View, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';

function HeaderExample() {
  const navInfo = useNavInfo();

  const handleBack = () => {
    Taro.navigateBack();
  };

  return (
    <View className="header">
      {!navInfo.isHomePage && (
        <Button onClick={handleBack}>返回</Button>
      )}
      <View className="title">页面标题</View>
    </View>
  );
}
```

### 处理页面参数

```tsx
import { useNavInfo } from '@fumoe/taro-hooks';
import { View } from '@tarojs/components';

function ProductDetailExample() {
  const navInfo = useNavInfo();
  const { productId } = navInfo.params;

  // 可以在这里根据productId加载产品详情数据

  return (
    <View>
      {productId ? (
        <View>产品ID: {productId}</View>
      ) : (
        <View>未提供产品ID</View>
      )}
    </View>
  );
}