const fs = require('fs');
const path = require('path');

// 配置
const distDir = path.join(__dirname, 'dist');

// 主构建函数
function build() {
  console.log('🚀 开始构建 hooks 库...');

  // 清理旧的 dist 目录
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
    console.log('🧹 清理旧的 dist 目录');
  }

  // 运行 TypeScript 编译
  console.log('📦 运行 TypeScript 编译...');
  const { execSync } = require('child_process');
  try {
    execSync('tsc', { stdio: 'inherit' });
  } catch (error) {
    console.error('❌ TypeScript 编译失败');
    process.exit(1);
  }

  console.log('✨ 构建完成！');
}

// 执行构建
build();