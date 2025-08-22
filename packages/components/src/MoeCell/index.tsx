import React from "react";
import { Image, Text, View } from "@tarojs/components";
import classNames from "classnames";

import "./index.scss";

const arrowImage =
  "data:image/svg+xml;base64,PHN2ZyBjbGFzc05hbWU9ImNlbGwtYXJyb3ciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICAgICAgICA8cGF0aCBkPSJNMTAgMTdMMTUgMTJMMTAgNyIgc3Ryb2tlPSIjOUZBMEEyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCINCiAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPg0KICAgICAgICA8L3N2Zz4=";

export interface IMoeCell {
  /**
   * 左侧标题部分
   */
  title?: React.ReactNode;
  /**
   * 右侧信息部分
   */
  label?: React.ReactNode;
  /**
   * 左侧图标部分图片链接
   */
  icon?: string;
  /**
   * 是否显示右侧小箭头
   */
  isLink?: boolean;
  /**
   * 是否可点击, 是否有点击效果
   */
  clickable?: boolean;
  /**
   * 点击的回调函数
   */
  onClick?: () => void;
}

/**
 * 通用的单元格列表组件
 * @param title 左侧标题部分
 * @param label 右侧信息部分
 * @param icon 左侧图标部分图片链接
 * @param isLink 是否显示右侧小箭头
 * @param clickable 是否可点击, 是否有点击效果
 * @param onClick 点击的回调函数
 * @constructor
 */
const MoeCell: React.FC<IMoeCell> = ({
  title,
  label,
  icon,
  isLink,
  clickable = true,
  onClick,
}) => {
  return (
    <View
      className={classNames("moe-cell-container", {
        "moe-cell-container-clickable": clickable,
      })}
      onClick={(e) => {
        e.stopPropagation();
        if (clickable && onClick) onClick();
      }}
    >
      <View className="moe-cell-container-left-part">
        {icon && (
          <Image svg className="moe-cell-container-left-part-icon" src={icon} />
        )}
        <View className="moe-cell-container-left-part-title">{title}</View>
      </View>

      <View className="moe-cell-container-content">
        <Text className="moe-cell-container-content-cell-text">{label}</Text>
        {isLink && (
          <Image
            svg
            className="moe-cell-container-content-cell-arrow"
            src={arrowImage}
          />
        )}
      </View>
    </View>
  );
};

export default MoeCell;
