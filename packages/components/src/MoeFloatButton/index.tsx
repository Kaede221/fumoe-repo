import Taro from "@tarojs/taro";
import React, { CSSProperties, useEffect, useState } from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";

import "./index.scss";

// 简易判断 是否为数字
const isNumber = (value: any): value is number => typeof value === "number";

export interface IMoeFloatButton {
  /**
   * 悬浮按钮的大小, 当为数字的时候, 使用rpx作为单位
   */
  size?: "large" | "default" | "small" | number;
  /**
   * 悬浮按钮的形状
   */
  shape?: "circle" | "square";
  /**
   * 按钮的图标内容
   */
  chileren?: React.ReactNode;
  /**
   * 距离底部的距离 (不包含安全区, 单位 px)
   */
  bottom?: number;
  /**
   * 距离右侧的距离 (单位 px)
   */
  right?: number;
  /**
   * 点击事件 (已处理冒泡)
   */
  onClick?: () => {};
  /**
   * 自定义样式
   */
  style?: CSSProperties;
}

/**
 * 悬浮于页面上方的按钮
 * @param size 悬浮按钮的大小, 当为数字的时候, 使用rpx作为单位
 * @param shape 悬浮按钮的形状
 * @param chileren 按钮的图标内容
 * @param bottom 距离底部的距离 (不包含安全区, 单位 px)
 * @param right 距离右侧的距离 (单位 px)
 * @param onClick 点击事件 (已处理冒泡)
 * @param style 自定义样式
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 */
const MoeFloatButton: React.FC<IMoeFloatButton> = ({
  size = "default",
  shape = "circle",
  chileren,
  bottom = 35,
  right = 30,
  onClick,
  style,
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
      )}
      style={{
        bottom: safeAreaHeight + bottom + "px",
        right: right + "px",
        ...(isNumber(size)
          ? {
              width: size + "rpx",
              height: size + "rpx",
            }
          : {}),
        ...style,
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) onClick();
      }}
    >
      {chileren}
    </View>
  );
};

export default MoeFloatButton;
