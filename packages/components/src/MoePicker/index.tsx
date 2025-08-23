import React, { useState } from "react";
import { View, Button } from "@tarojs/components";
import classNames from "classnames";

import "./index.scss";

export interface IMoePicker {
  // 选择器的标题
  title?: string;
  // 点击空白处是否可以关闭
  closeable?: boolean;
  // 是否显示
  open: boolean;
  // 设置是否显示
  setOpen: (value: boolean) => void;
  // 显示列数
  columns: number;
  // 可选内容列表
  categories: string[];
  // 默认选择的内容
  defaultCategory?: string;
  // 确认时的回调函数 默认传入选择的内容
  onConfirm: (confirmValue: string) => void;
}

/**
 * 自定义弹出层选择器
 *
 * @param `title` 选择器的标题
 *
 * @param `closeable` 点击空白处是否可以关闭
 *
 * @param `open` 是否显示
 *
 * @param `setOpen` 设置是否显示
 *
 * @param `columns` 显示列数
 *
 * @param `categories` 可选内容列表
 *
 * @param `defaultCategory` 默认选择的内容
 *
 * @param `onConfirm` 确认时的回调函数 默认传入选择的内容
 */
const MoePicker: React.FC<IMoePicker> = ({
  title = "请选择分类",
  closeable,
  open,
  setOpen,
  columns,
  categories,
  defaultCategory = "",
  onConfirm,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  const handleClose = () => {
    if (closeable) {
      setOpen(false);
      setSelectedCategory("");
    }
  };

  return (
    <View
      className={classNames("moe-picker-main", open ? "show" : "hide")}
      onClick={handleClose}
    >
      <View
        className={classNames(
          "moe-picker-main-container",
          open ? "slide-up" : "slide-down",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/*顶部标题*/}
        <View className="moe-picker-title">{title}</View>
        {/*选择部分 允许进行选择*/}
        <View
          className="category-list"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {categories.map((category) => (
            <View
              key={category}
              className={`category-item ${
                selectedCategory === category ? "category-item-selected" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </View>
          ))}
        </View>

        {/*下方的确认按钮*/}
        <Button
          className={classNames(
            "confirm-button",
            !selectedCategory ? "btn-disabled" : "btn-active",
          )}
          hoverClass={classNames({
            "btn-active-hover": !selectedCategory,
          })}
          disabled={!selectedCategory}
          onClick={() => {
            if (selectedCategory) {
              onConfirm(selectedCategory);
            }
          }}
        >
          确定
        </Button>
      </View>
    </View>
  );
};

export default MoePicker;
