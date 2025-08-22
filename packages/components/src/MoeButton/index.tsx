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
   * 按钮内容
   */
  children: React.ReactNode;
  /**
   * 自定义CSS类名
   */
  className?: string;
  /**
   * 自定义style属性, 会覆盖原有样式
   */
  style?: React.CSSProperties;
  /**
   * 是否使用圆角样式
   */
  rounded?: boolean;
  /**
   * 按钮尺寸
   */
  size?: "large" | "medium" | "small" | "mini";
  /**
   * 按钮颜色主题
   */
  color?: "primary" | "success" | "warning" | "danger" | "default" | "info";
  /**
   * 按钮类型
   */
  variant?: "contained" | "outlined" | "text";
  /**
   * 按钮是否被禁用
   */
  disabled?: boolean;
  /**
   * 点击事件回调函数
   */
  onClick?: () => void;
}

/**
 * 按钮组件
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 */
const MoeButton: React.FC<IMoeButton> = ({
  children,
  className,
  style,
  rounded,
  size = "medium",
  color = "default",
  variant = "contained",
  disabled,
  onClick,
}) => {
  return (
    <View
      className={classnames(
        "moe-button-container",
        `moe-button-size-${size}`,
        `moe-button-color-${color}`,
        rounded ? `moe-button-rounded-${size}` : "",
        `moe-button-variant-${variant}-${color}`,
        disabled ? "moe-button-disabled" : "",
        className ? className : "",
      )}
      hoverClass="moe-button-container-pressed"
      onClick={(e) => {
        e.stopPropagation();
        if (!disabled && onClick) onClick();
      }}
      style={style}
    >
      {children}
    </View>
  );
};

export default MoeButton;
