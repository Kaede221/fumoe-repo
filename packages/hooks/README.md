# @fumoe/taro-hooks

专为 Taro 4.x 设计的 React Hooks 集合，提供开箱即用的微信小程序和其他平台常用功能。

## 📦 安装

```bash
npm install @fumoe/taro-hooks
# 或者
yarn add @fumoe/taro-hooks
# 或者
pnpm add @fumoe/taro-hooks
```

## 🚀 快速开始

```typescript
import { useLayoutHeight, useNavInfo, useShare } from '@fumoe/taro-hooks'

// 在组件中使用
function MyComponent() {
  const { height } = useLayoutHeight()
  const navInfo = useNavInfo()
  const { share } = useShare()
  
  return (
    <View style={{ height }}>
      <Text>导航栏高度: {navInfo.navHeight}</Text>
    </View>
  )
}
```

## 📋 API 文档

### useLayoutHeight

获取页面布局高度，自动适配不同平台。

```typescript
const { height } = useLayoutHeight()
```

**返回值:**
- `height`: 计算后的高度值（包含单位）

### useNavInfo

获取导航栏信息，包括状态栏高度、导航栏高度等。

```typescript
const navInfo = useNavInfo()
```

**返回值:**
- `statusBarHeight`: 状态栏高度
- `navHeight`: 导航栏高度
- `windowWidth`: 窗口宽度
- `windowHeight`: 窗口高度

### useShare

微信小程序分享功能封装。

```typescript
const { share, setShareInfo } = useShare()
```

**返回值:**
- `share`: 分享配置对象
- `setShareInfo`: 设置分享信息的函数

## 🛠️ 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm run dev

# 构建
pnpm run build

# 发布前检查
pnpm run prepublishOnly
```

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系

- GitHub: [your-username](https://github.com/your-username)
- Email: your-email@example.com