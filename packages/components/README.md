# @fumoe/taro-components

Taro 4.x 开箱即用的公用组件库，提供美观、易用的移动端组件，支持 TypeScript 和完整的类型提示。

## ✨ 特性

- 🎨 **美观易用** - 精心设计的 UI，符合移动端用户体验
- 🚀 **开箱即用** - 无需额外配置，直接引入使用
- 📱 **响应式** - 完美适配各种屏幕尺寸
- 🎯 **TypeScript** - 完整的类型定义和智能提示
- ⚡ **高性能** - 优化的渲染性能，流畅的动画效果

## 📦 安装

### 使用包管理器安装

```bash
# 使用 npm
npm install @fumoe/taro-components

# 使用 yarn
yarn add @fumoe/taro-components

# 使用 pnpm
pnpm add @fumoe/taro-components
```

### 必需的对等依赖

```bash
# 确保已安装以下依赖
npm install @taroify/core @tarojs/taro @tarojs/components react react-dom
```

## 🚀 快速开始

### 基础使用

```tsx
import React, { useState } from 'react'
import { View, Button } from '@tarojs/components'
import { MoePicker } from '@fumoe/taro-components'

const App = () => {
  const [showPicker, setShowPicker] = useState(false)
  const [selected, setSelected] = useState('')

  return (
    <View>
      <Button onClick={() => setShowPicker(true)}>打开选择器</Button>
      <MoePicker
        open={showPicker}
        setOpen={setShowPicker}
        categories={["日常", "工作", "学习", "娱乐", "运动"]}
        columns={2}
        closeable={true}
        defaultCategory="日常"
      />
    </View>
  )
}
```

## 📋 组件列表

### 🎯 MoePicker - 自定义选择器

底部弹出选择器，支持分类选择，具有流畅的动画效果。

```tsx
import { MoePicker } from '@fumoe/taro-components'

<MoePicker
  open={boolean}           // 是否显示选择器
  setOpen={Function}       // 设置显示状态的函数
  categories={string[]}    // 分类选项数组
  columns={number}         // 每行列数，默认2
  closeable={boolean}      // 是否可点击背景关闭，默认false
  defaultCategory={string} // 默认选中的分类
/>
```

### 🏷️ MoeTag - 标签组件

可定制的标签组件，支持多种颜色和尺寸。

```tsx
import { MoeTag } from '@fumoe/taro-components'

<MoeTag text="标签文字" type="primary" size="medium" />
```

### 🧭 MoeHeader - 头部导航

页面顶部导航栏，支持返回按钮和标题。

```tsx
import { MoeHeader } from '@fumoe/taro-components'

<MoeHeader
  title="页面标题"
  showBack={true}
  onBack={() => Taro.navigateBack()}
/>
```

## 🎨 主题定制

组件库支持主题定制，可以通过 CSS 变量覆盖默认样式：

```css
:root {
  --fumoe-primary-color: #007aff;
  --fumoe-border-radius: 8px;
}
```

## ⚠️ 注意事项

1. **必需依赖**：使用本组件库必须安装 `@taroify/core`
2. **版本兼容**：确保 Taro 版本为 4.x
3. **样式问题**：如遇到样式冲突，请参考 INSTALL.md 中的解决方案
4. **类型支持**：建议开启 TypeScript 的严格模式以获得更好的类型检查

## 🔧 开发指南

### 本地开发

```bash
# 克隆仓库
git clone xxx

# 安装依赖
pnpm install

# 启动开发环境
pnpm dev

# 构建组件库
pnpm build

# 运行测试
pnpm test
```

### 目录结构

```
packages/
└── components/
    ├── src/
    │   ├── MoePicker/     # 选择器组件
    │   ├── MoeTag/        # 标签组件
    │   ├── MoeHeader/     # 头部导航
    │   └── index.ts       # 导出文件
    ├── package.json
    └── README.md
```

## 📄 许可证

MIT License

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进组件库！