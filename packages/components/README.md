# @fumoe/taro-components

Taro 4.x 开箱即用的公用组件库

## 📦 安装

### 必需依赖
组件库需要以下依赖，请确保已安装：

```bash
# 安装组件库
npm install @fumoe/taro-components

# 必需的对等依赖
npm install @taroify/core @tarojs/taro @tarojs/components react react-dom
```

### 完整安装命令
```bash
npm install @fumoe/taro-components @taroify/core @tarojs/taro @tarojs/components react react-dom
```

## 🚀 快速开始

```tsx
import React, { useState } from 'react'
import { MoePicker } from '@fumoe/taro-components'

const App = () => {
  const [showPicker, setShowPicker] = useState(false)
  
  return (
    <MoePicker
      open={showPicker}
      categories={["选项1", "选项2", "选项3"]}
      onConfirm={(value) => console.log('选择了:', value)}
      onClose={() => setShowPicker(false)}
    />
  )
}
```

## 📋 组件列表

- **MoePicker** - 自定义选择器
- **MoeTag** - 标签组件
- **MoeHeader** - 头部导航

## ⚠️ 注意事项

1. **必需依赖**：使用本组件库必须安装 `@taroify/core`
2. **版本兼容**：确保 Taro 版本为 4.x
3. **样式问题**：如遇到样式冲突，请参考 INSTALL.md 中的解决方案

## 🔧 开发

```bash
# 克隆仓库
git clone [your-repo]

# 安装依赖
pnpm install

# 构建组件库
pnpm run build
```