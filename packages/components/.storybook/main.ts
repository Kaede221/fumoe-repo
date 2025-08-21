import type { StorybookConfig } from "@storybook/react-webpack5";
// @ts-ignore
import React from "react";

// @ts-ignore
const webpack = require("webpack");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: (config: any) => {
    // 添加 rpx 支持的 PostCSS 插件
    const rpxPlugin = () => {
      return {
        postcssPlugin: "rpx",
        Declaration(decl: { value: string }) {
          if (decl.value.includes("rpx")) {
            decl.value = decl.value.replace(
              /(\d+(?:\.\d+)?)rpx/g,
              (match, num) => {
                return `${(parseFloat(num) / 750) * 100}vw`;
              },
            );
          }
        },
      };
    };
    rpxPlugin.postcss = true;

    // 配置 CSS/SCSS 规则，支持 rpx
    const styleRules = [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [rpxPlugin],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [rpxPlugin],
              },
            },
          },
        ],
      },
    ];

    return {
      ...config,
      resolve: {
        ...config.resolve,
        mainFields: ["main:h5", "browser", "module", "jsnext:main", "main"],
        alias: {
          ...config.resolve.alias,
          "@tarojs/taro": "@tarojs/taro-h5",
          ["@tarojs/components$"]: "@tarojs/components/lib/react",
        },
      },
      module: {
        ...config.module,
        rules: [
          ...config.module.rules.filter(
            (rule: any) =>
              !rule.test ||
              (!rule.test.test(".css") && !rule.test.test(".scss")),
          ),
          ...styleRules,
        ],
      },
      plugins: [
        ...config.plugins,
        new webpack.DefinePlugin({
          "process.env.TARO_ENV": JSON.stringify("h5"),
          ENABLE_INNER_HTML: JSON.stringify(false),
          ENABLE_ADJACENT_HTML: JSON.stringify(false),
          ENABLE_SIZE_APIS: JSON.stringify(false),
          ENABLE_TEMPLATE_CONTENT: JSON.stringify(false),
          ENABLE_CLONE_NODE: JSON.stringify(false),
          ENABLE_CONTAINS: JSON.stringify(false),
          ENABLE_MUTATION_OBSERVER: JSON.stringify(false),
          DEPRECATED_ADAPTER_COMPONENT: JSON.stringify(false),
        }),
      ],
    };
  },
};
export default config;
