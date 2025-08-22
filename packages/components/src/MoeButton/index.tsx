import React from "react";
import { View } from "@tarojs/components";

import "./index.scss";

// 简易classnames
const classnames = (...args: string[]): string => {
  return args.join(" ");
};

/**
 * MoeButton 组件属性接口
 */
export interface IMoeButton {
  /**
   * 按钮内容，可以是文本、图标或其他 React 节点
   * @example "提交"
   * @example <Icon type="plus" />
   */
  children: React.ReactNode;
  /**
   * 自定义 CSS 类名
   * @example "custom-button"
   */
  className?: string;
  /**
   * 是否使用圆角样式
   * @default false
   * @example true
   */
  rounded?: boolean;
  /**
   * 按钮尺寸
   * @default "medium"
   * @example "large"
   */
  size?: "large" | "medium" | "small" | "mini";
  /**
   * 按钮颜色主题
   * @default "default"
   * @example "primary"
   */
  color?: "primary" | "success" | "warning" | "danger" | "default" | "info";
  /**
   * 点击事件回调函数
   * @example () => console.log('按钮被点击')
   */
  onClick?: () => void;
}

/**
 * MoeButton 组件 - 一个功能丰富、可定制的按钮组件
 * 
 * @description
 * MoeButton 是一个基于 Taro 框架的按钮组件，支持多种尺寸、颜色主题和圆角样式。
 * 组件具有点击反馈动画，提供良好的用户体验。
 * 
 * @component
 * @example
 * ```tsx
 * // 基础用法
 * <MoeButton>默认按钮</MoeButton>
 * 
 * // 不同尺寸
 * <MoeButton size="large">大按钮</MoeButton>
 * <MoeButton size="small">小按钮</MoeButton>
 * 
 * // 不同颜色主题
 * <MoeButton color="primary">主要按钮</MoeButton>
 * <MoeButton color="success">成功按钮</MoeButton>
 * 
 * // 圆角按钮
 * <MoeButton rounded>圆角按钮</MoeButton>
 * 
 * // 带点击事件
 * <MoeButton onClick={() => console.log('点击了按钮')}>点击我</MoeButton>
 * ```
 * 
 * @author fumoe
 * @since 1.0.0
 */
const MoeButton: React.FC<IMoeButton> = ({
  children,
  className,
  rounded,
  size = "medium",
  color = "default",
  onClick,
}) => {
  return (
    <View
      className={classnames(
        "moe-button-container",
        `moe-button-size-${size}`,
        `moe-button-color-${color}`,
        rounded ? `moe-button-rounded-${size}` : "",
        className ? className : "",
      )}
      hoverClass="moe-button-container-pressed"
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) onClick();
      }}
    >
      {children}
    </View>
  );
};

export default MoeButton;
