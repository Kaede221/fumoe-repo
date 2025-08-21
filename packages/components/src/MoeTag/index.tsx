import React from "react";
import { Image, View } from "@tarojs/components";

import "./index.scss";

export interface IMoeTag {
  /** tag文本 */
  label: string;
  /** tag的左侧图标路径 */
  icon?: string;
  /** 缩放比例 */
  scale?: number;
  /** 标签主色调 (文本, 边框) */
  mainColor?: string;
  /** 标签背景色 (背景) */
  backgroundColor?: string;
  /** 点击事件 */
  onClick?: () => {};
}

/**
 * 通用标签组件
 *
 * @param `label` 标签文本
 *
 * @param `icon` tag的左侧图标路径
 *
 * @param `scale` 缩放比例
 *
 * @param `mainColor` 标签主色调 (文本, 边框)
 *
 * @param `backgroundColor` 标签背景色 (背景)
 *
 * @param `onClick` 点击事件 (已阻止冒泡)
 *
 * @author **Kaede221**
 *
 * @email **kaedeshimizu@qq.com**
 */
const MoeTag: React.FC<IMoeTag> = ({
  label,
  icon,
  scale = 1,
  mainColor = "#6C4E09",
  backgroundColor = "#FFFAF1",
  onClick,
}) => {
  return (
    <View
      className="common-shared-tag-lc"
      style={{
        borderColor: mainColor,
        backgroundColor: backgroundColor,
        zoom: scale,
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) onClick();
      }}
    >
      {icon && <Image className="img-icon" src={icon} />}
      <View
        className="label"
        style={{
          color: mainColor,
        }}
      >
        {label}
      </View>
    </View>
  );
};

export default MoeTag;
