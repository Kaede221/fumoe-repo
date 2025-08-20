import React, { useState } from "react";
import { View } from "@tarojs/components";

import { Popup, SafeArea } from "@taroify/core";
import "@taroify/core/popup/style";
import "@taroify/core/safe-area/style";

import "./index.scss";

export interface IMoePicker {
  /** 弹出层的标题, 默认 `选择分类` */
  title?: string;
  /** 显示的列数, 默认 `2` */
  columns?: number;
  /** 弹出层是否显示 */
  open: boolean;
  /** 分类字符串的列表 */
  categories: string[];
  /** 确认后的回调函数, 默认传入选择的内容字符串 */
  onConfirm: (selected: string) => void;
  /** 关闭的回调函数 */
  onClose: () => void;
  /** 默认的分类项, 应当在列表中出现 */
  defaultCategory?: string;
}

/**
 * 自定义弹出层选择器
 * @param title 弹出层的标题, 默认 `选择分类`
 * @param columns 显示的列数, 默认 `2`
 * @param open 弹出层是否显示
 * @param categories 分类字符串的列表
 * @param onConfirm 确认后的回调函数, 默认传入选择的内容字符串
 * @param onClose 关闭的回调函数
 * @param defaultCategory 默认的分类项, 应当在列表中出现
 * @example
 * <MoePicker
 *   open={showModel}
 *   categories={["1", "2", "3"]}
 *   onConfirm={(e) => {
 *     console.log(e);
 *   }}
 *   onClose={() => setShowModel(false)}
 * />
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 */
const MoePicker: React.FC<IMoePicker> = ({
  title = "选择分类",
  columns = 2,
  open,
  categories,
  onConfirm,
  onClose,
  defaultCategory = "",
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>(defaultCategory);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleConfirm = () => {
    if (selectedCategory) {
      onConfirm(selectedCategory);
    }
  };

  return (
    /*主要弹窗部分*/
    <Popup open={open} placement="bottom" rounded onClose={onClose}>
      <View className="popup-container">
        <View className="popup-header">{title}</View>
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
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </View>
          ))}
        </View>
        {/*确认按钮*/}
        <View
          className="confirm-button"
          onClick={handleConfirm}
          style={{
            backgroundColor: selectedCategory ? "#fdd57a" : "#ccc",
            pointerEvents: selectedCategory ? "auto" : "none",
            color: selectedCategory ? "#FFFFFF" : "#424343",
          }}
        >
          确定
        </View>
        <SafeArea position="bottom" />
      </View>
    </Popup>
  );
};

export default MoePicker;
