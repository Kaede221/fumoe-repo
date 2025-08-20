const fs = require("fs");
const path = require("path");

// 配置
const srcDir = path.join(__dirname, "src");
const distDir = path.join(__dirname, "dist");

// 确保目录存在
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// 复制文件
function copyFile(src, dest) {
  fs.copyFileSync(src, dest);
  console.log(
    `✅ 复制: ${path.relative(__dirname, src)} -> ${path.relative(__dirname, dest)}`,
  );
}

// 复制目录
function copyDir(src, dest) {
  ensureDir(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      // 只复制 .scss 文件
      if (entry.name.endsWith(".scss")) {
        copyFile(srcPath, destPath);
      }
    }
  }
}

// 主构建函数
function build() {
  console.log("🚀 开始构建组件库...");

  // 清理旧的 dist 目录
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
    console.log("🧹 清理旧的 dist 目录");
  }

  // 运行 TypeScript 编译
  console.log("📦 运行 TypeScript 编译...");
  const { execSync } = require("child_process");
  try {
    execSync("tsc", { stdio: "inherit" });
  } catch (error) {
    console.error("❌ TypeScript 编译失败");
    process.exit(1);
  }

  // 复制 SCSS 文件
  console.log("🎨 复制 SCSS 样式文件...");
  copyDir(srcDir, distDir);

  console.log("✨ 构建完成！");
}

// 执行构建
build();
