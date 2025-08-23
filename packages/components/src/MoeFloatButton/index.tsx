import Taro from "@tarojs/taro";
import React, { CSSProperties, useEffect, useState } from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";

import "./index.scss";

// 简易判断 是否为数字
const isNumber = (value: any): value is number => typeof value === "number";

export interface IMoeFloatButton {
  /**
   * 悬浮按钮的大小
   */
  size?: "large" | "default" | "small" | number;
  /**
   * 悬浮按钮的形状
   */
  shape?: "circle" | "square";
  /**
   * 是否显示该按钮
   */
  visible?: boolean;
  /**
   * 按钮的图标内容
   */
  children?: React.ReactNode;
  /**
   * 距离底部的距离
   */
  bottom?: number;
  /**
   * 距离右侧的距离
   */
  right?: number;
  /**
   * 点击事件 (已处理冒泡)
   */
  onClick?: () => void;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  /**
   * 按钮背景颜色
   */
  backgroundColor?: string;
}

/**
 * 悬浮于页面上方的按钮
 * @param size 悬浮按钮的大小
 * @param shape 悬浮按钮的形状
 * @param visible 是否显示该按钮
 * @param children 按钮的图标内容
 * @param bottom 距离底部的距离
 * @param right 距离右侧的距离
 * @param onClick 点击事件 (已处理冒泡)
 * @param style 自定义样式
 * @param backgroundColor 按钮背景颜色
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 */
const MoeFloatButton: React.FC<IMoeFloatButton> = ({
  size = "default",
  shape = "circle",
  visible = true,
  children,
  bottom = 35,
  right = 30,
  onClick,
  style,
  backgroundColor = "#1E90FF",
}) => {
  // 获取底部安全高度
  const [safeAreaHeight, setSafeAreaHeight] = useState(0);

  // 显示的时候, 获取底部安全高度
  useEffect(() => {
    if (Taro.getEnv() === "WEAPP" || Taro.getEnv() === "HARMONYHYBRID") {
      setSafeAreaHeight(
        Taro.getWindowInfo().screenHeight -
          (Taro.getWindowInfo().safeArea?.height || 0) -
          (Taro.getWindowInfo().statusBarHeight || 0),
      );
    }
  }, []);

  return (
    <View
      className={classNames(
        "moe-float-button-main",
        {
          [`moe-float-button-main-size-${size}`]: !isNumber(size),
        },
        `moe-float-button-main-shape-${shape}`,
        {
          "moe-float-button-main-hidden": !visible,
        },
      )}
      style={{
        bottom: Taro.pxTransform(safeAreaHeight + bottom),
        right: Taro.pxTransform(right),
        backgroundColor,
        ...(isNumber(size)
          ? {
              width: Taro.pxTransform(size),
              height: Taro.pxTransform(size),
            }
          : {}),
        ...style,
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) onClick();
      }}
    >
      {children}
    </View>
  );
};

export default MoeFloatButton;
