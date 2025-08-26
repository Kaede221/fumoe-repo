import { CSSProperties, FC } from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";

import "./index.scss";

export interface IMoeLoading {
  /**
   * 加载类型 默认 `circular`
   */
  type?: "circular" | "spinner";
  /**
   * 加载图标大小 默认 `35`
   */
  size?: number;
  /**
   * 加载的颜色 默认 `#1989fa`
   */
  color?: string;
}

/**
 * 加载组件
 * @param type 加载类型 默认 `circular`
 * @param size 加载图标大小 默认 `35`
 * @param color 加载的颜色 默认 `#1989fa`
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 */
const MoeLoading: FC<IMoeLoading> = ({
  type = "circular",
  size = 35,
  color = "#C8C9CC",
}) => {
  // 根据当前类型 渲染不同类型的加载图标
  if (type === "circular")
    return (
      <View
        style={
          {
            "--moe-loading-size": size + "px",
            "--moe-loading-color": color,
          } as CSSProperties
        }
        className={classNames("moe-loading-container", `type-set-${type}`)}
      ></View>
    );
  else
    return (
      <View
        style={
          {
            "--moe-loading-size": size + "px",
            "--moe-loading-color": color,
          } as CSSProperties
        }
        className={classNames("moe-loading-container", `type-set-${type}`)}
      >
        <View className="spinner-item"></View>
        <View className="spinner-item"></View>
        <View className="spinner-item"></View>
        <View className="spinner-item"></View>
        <View className="spinner-item"></View>
        <View className="spinner-item"></View>
        <View className="spinner-item"></View>
        <View className="spinner-item"></View>
        <View className="spinner-item"></View>
        <View className="spinner-item"></View>
        <View className="spinner-item"></View>
        <View className="spinner-item"></View>
      </View>
    );
};

export default MoeLoading;
