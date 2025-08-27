const fs = require("fs");
const path = require("path");
const { execSync, exec } = require("child_process");

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

// 复制单个 SCSS 文件
function copySingleScssFile(filePath) {
  const relativePath = path.relative(srcDir, filePath);
  const destPath = path.join(distDir, relativePath);
  ensureDir(path.dirname(destPath));
  copyFile(filePath, destPath);
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

// 监听模式函数
function watch() {
  console.log("🔄 启动监听模式...");

  // 先执行一次完整构建
  build();

  console.log("👀 开始监听文件变化...");

  // 监听 TypeScript 文件变化（包括 .ts 和 .tsx）
  console.log('📝 启动 TypeScript 监听服务...');
  const tscProcess = exec("tsc --watch");
  
  // 捕获 tsc 输出并增强提示
  tscProcess.stdout.on('data', (data) => {
    const output = data.toString().trim();
    if (output.includes('Found') && output.includes('errors')) {
      console.log(`❌ TypeScript 编译错误: ${output}`);
    } else if (output.includes('Compilation complete')) {
      console.log('✅ TypeScript 编译成功！');
    } else if (output.includes('File change detected')) {
      console.log('🔄 检测到 TypeScript 文件变化，正在重新编译...');
    } else if (output) {
      console.log(`📝 TypeScript: ${output}`);
    }
  });
  
  tscProcess.stderr.on('data', (data) => {
    console.error('❌ TypeScript 错误:', data.toString().trim());
  });
  
  tscProcess.on('error', (error) => {
    console.error('❌ TypeScript 监听进程启动失败:', error);
  });

  // 监听 SCSS 和 TSX 文件变化，提供额外的提示
  fs.watch(srcDir, { recursive: true }, (eventType, filename) => {
    if (!filename) return;
    
    const filePath = path.join(srcDir, filename);
    if (!fs.existsSync(filePath)) return;
    
    if (filename.endsWith(".scss")) {
      console.log(`🔄 检测到样式文件变化: ${filename}`);
      copySingleScssFile(filePath);
    } else if (filename.endsWith(".tsx")) {
      console.log(`🔄 检测到组件文件变化: ${filename}`);
      console.log('   正在等待 TypeScript 自动编译...');
    } else if (filename.endsWith(".ts")) {
      console.log(`🔄 检测到脚本文件变化: ${filename}`);
      console.log('   正在等待 TypeScript 自动编译...');
    }
  });

  // 监听退出信号
  process.on('SIGINT', () => {
    console.log('🛑 停止监听...');
    tscProcess.kill();
    process.exit(0);
  });

  console.log('✅ 监听模式已启动！修改文件将自动编译并显示详细提示。');
}

// 根据命令行参数决定执行构建还是监听
if (process.argv.includes('--watch')) {
  watch();
} else {
  build();
}
