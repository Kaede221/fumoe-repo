---
sidebar_position: 8
title: useShare
---

# useShare

一个用于处理微信小程序分享功能的Hook，简化分享配置和逻辑。

## 语法

```ts
const [shareConfig, updateShareConfig] = useShare(initialConfig);
```

## 参数

| 参数 | 类型 | 描述 |
|------|------|------|
| `initialConfig` | `Taro.Page.IPageOptions['onShareAppMessage']` | 初始的分享配置对象 |

## 返回值

返回一个包含当前分享配置和更新分享配置函数的元组：

```ts
[Taro.Page.IPageOptions['onShareAppMessage'], (newConfig) => void]
```

其中：
- 第一个元素是当前的分享配置对象
- 第二个元素是更新分享配置的函数

## 说明

useShare Hook用于简化微信小程序的分享功能实现，它提供了一个方便的方式来管理和更新分享配置。

这在以下场景特别有用：
- 实现动态分享内容
- 根据不同条件设置不同的分享信息
- 简化分享逻辑的管理

## 示例

### 基础用法

```tsx
import { useShare } from '@fumoe/taro-hooks';
import Taro from '@tarojs/taro';

function ShareExample() {
  const [shareConfig] = useShare({
    title: '分享标题',
    path: '/pages/index/index',
    imageUrl: '/images/share.jpg'
  });

  // 需要将shareConfig绑定到页面配置中
  Taro.Page.prototype.onShareAppMessage = shareConfig;

  return (
    <>
      {/* 页面内容 */}
    </>
  );
}
```

### 动态更新分享配置

```tsx
import { useState, useEffect } from 'react';
import { useShare } from '@fumoe/taro-hooks';
import Taro from '@tarojs/taro';

function DynamicShareExample() {
  const [productInfo, setProductInfo] = useState({
    title: '默认产品',
    id: '001',
    image: '/images/default.jpg'
  });
  
  const [shareConfig, updateShareConfig] = useShare({
    title: productInfo.title,
    path: `/pages/product/detail?id=${productInfo.id}`,
    imageUrl: productInfo.image
  });

  // 监听产品信息变化，更新分享配置
  useEffect(() => {
    updateShareConfig({
      title: productInfo.title,
      path: `/pages/product/detail?id=${productInfo.id}`,
      imageUrl: productInfo.image
    });
  }, [productInfo, updateShareConfig]);

  // 将分享配置绑定到页面
  Taro.Page.prototype.onShareAppMessage = shareConfig;

  // 模拟加载不同产品
  const loadProduct = (id: string) => {
    // 这里应该是实际的API调用
    if (id === '002') {
      setProductInfo({
        title: '新产品',
        id: '002',
        image: '/images/new-product.jpg'
      });
    }
  };

  return (
    <>
      <button onClick={() => loadProduct('002')}>
        加载新产品
      </button>
      <View>当前产品: {productInfo.title}</View>
    </>
  );
}

// 注意：在实际的Taro应用中，你可能需要在页面组件中正确地配置onShareAppMessage
// 具体实现可能因Taro版本和使用的框架而有所不同