import React from "react";
import { View, ViewProps } from "@tarojs/components";
import classNames from "classnames";

import "./index.scss";

/**
 * MoeButton 组件属性接口
 */
export interface IMoeButton extends ViewProps {
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
 * @param children 按钮内容
 * @param className 自定义CSS类名
 * @param style 自定义style属性, 会覆盖原有样式
 * @param rounded 是否使用圆角样式
 * @param size 按钮尺寸
 * @param color 按钮颜色主题
 * @param variant 按钮类型
 * @param disabled 按钮是否被禁用
 * @param onClick 点击事件回调函数
 * @param restProps
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
  ...restProps
}) => {
  return (
    <View
      className={classNames(
        "moe-button-container",
        `moe-button-size-${size}`,
        `moe-button-color-${color}`,
        {
          [`moe-button-rounded-${size}`]: rounded,
        },
        `moe-button-variant-${variant}-${color}`,
        {
          "moe-button-disabled": disabled,
        },
        className,
      )}
      hoverClass="moe-button-container-pressed"
      onClick={(e) => {
        e.stopPropagation();
        if (!disabled && onClick) onClick();
      }}
      style={style}
      {...restProps}
    >
      {children}
    </View>
  );
};

export default MoeButton;
