import React, { CSSProperties } from "react";
import { Image, View } from "@tarojs/components";
import classNames from "classnames";

import "./index.scss";

export interface IMoeTag {
  /**
   * 文本
   */
  label: string;
  /**
   * 左侧图标路径
   */
  icon?: string;
  /**
   * 颜色
   */
  color?: "default" | "primary" | "info" | "success" | "warning" | "danger";
  /**
   * 样式
   */
  variant?: "outlined" | "contained";
  /**
   * 大小
   */
  size?: "large" | "medium" | "default";
  /**
   * 形状
   */
  shape?: "rounded" | "roundedRight" | "roundedLeft" | "square";
  /**
   * 点击事件
   */
  onClick?: () => void;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
}

/**
 * 通用标签组件
 * @param label 文本
 * @param icon 左侧图标路径
 * @param color 颜色
 * @param variant 样式
 * @param size 大小
 * @param shape 形状
 * @param onClick 点击事件
 * @param style 自定义样式
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 */
const MoeTag: React.FC<IMoeTag> = ({
  label,
  icon,
  color = "default",
  variant = "contained",
  size = "default",
  shape = "square",
  onClick,
  style,
}) => {
  return (
    <View
      className={classNames(
        "common-shared-tag-lc",
        `color-set-${color}`,
        `variant-set-${variant}`,
        `variant-set-${variant}-${color}`,
        `size-set-${size}`,
        `shape-set-${shape}`,
      )}
      style={style}
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) onClick();
      }}
    >
      {icon && <Image className={`img-icon-${size}`} src={icon} />}
      <View className="label">{label}</View>
    </View>
  );
};

export default MoeTag;
