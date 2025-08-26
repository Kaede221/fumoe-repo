import React, { CSSProperties, useState } from "react";
import { View, ViewProps, ScrollView } from "@tarojs/components";
import { MoeButton } from "../index";
import classNames from "classnames";

import "./index.scss";

export interface IMoePicker extends ViewProps {
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
  // 确认按钮的额外样式
  confirmButtonStyle?: CSSProperties;
}

/**
 * 自定义弹出层选择器
 * @param title 选择器的标题
 * @param closeable 点击空白处是否可以关闭
 * @param open 是否显示
 * @param setOpen 设置是否显示
 * @param columns 显示列数
 * @param categories 可选内容列表
 * @param defaultCategory 默认选择的内容
 * @param onConfirm 确认时的回调函数 默认传入选择的内容, 确认后会自动关闭弹窗
 * @param confirmButtonStyle 确认按钮的额外样式
 * @param restProps
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
  confirmButtonStyle,
  ...restProps
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
      className={classNames("moe-picker-main", {
        show: open,
        hide: !open,
      })}
      onClick={handleClose}
      {...restProps}
    >
      <View
        className={classNames("moe-picker-main-container", {
          "slide-up": open,
          "slide-down": !open,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        {/*顶部标题*/}
        <View className="moe-picker-title">{title}</View>

        {/*选择部分 允许进行选择*/}
        <ScrollView scrollY className="scroll-part">
          <View
            className="category-list"
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
          >
            {categories.map((category, index) => (
              <View
                key={`moe-picker-choices-${index}`}
                className={classNames("category-item", {
                  "category-item-selected": selectedCategory === category,
                })}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </View>
            ))}
          </View>
        </ScrollView>

        {/*下方的确认按钮*/}
        <MoeButton
          className={classNames(
            "confirm-button",
            !selectedCategory ? "btn-disabled" : "btn-active",
          )}
          style={confirmButtonStyle}
          disabled={!selectedCategory}
          onClick={() => {
            if (selectedCategory) {
              onConfirm(selectedCategory);
              setOpen(false);
              setSelectedCategory("");
            }
          }}
        >
          确定
        </MoeButton>
      </View>
    </View>
  );
};

export default MoePicker;
