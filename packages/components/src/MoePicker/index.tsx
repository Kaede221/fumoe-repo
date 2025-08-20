import { FC, useState } from "react";
import { View, Button } from "@tarojs/components";

import "./index.scss";

// 实现简易classNames
const classnames = (...args: string[]): string => {
  return args.join(" ");
};

interface IMoePicker {
  closeable?: boolean;
  open: boolean;
  setOpen: (value: boolean) => void;
  columns: number;
  categories: string[];
  defaultCategory?: string;
  onConfirm: (confirmValue: string) => void;
}

/**
 * 自定义弹出层选择器 - MoePicker
 * 
 * 一个美观的底部弹出选择器组件，支持动画效果、自定义列数和分类选项。
 * 
 * @remarks
 * 该组件提供了完整的底部弹出选择器功能，包括：
 * - 背景透明黑色渐变动画
 * - 选择器从底部滑入/滑出动画
 * - 支持自定义列数布局
 * - 分类选项点击高亮效果
 * - 确认按钮状态切换动画
 * - 响应式设计适配各种屏幕
 * 
 * @example
 * ```tsx
 * import { useState } from 'react';
 * import { View, Button } from '@tarojs/components';
 * import MoePicker from '@/components/MoePicker';
 * 
 * export default function Demo() {
 *   const [open, setOpen] = useState(false);
 *   const [selected, setSelected] = useState('');
 *   const categories = ["日常", "工作", "学习", "娱乐", "运动"];
 * 
 *   return (
 *     <View>
 *       <Button onClick={() => setOpen(true)}>打开选择器</Button>
 *       <MoePicker
 *         open={open}
 *         setOpen={setOpen}
 *         categories={categories}
 *         columns={2}
 *         closeable={true}
 *         defaultCategory="日常"
 *       />
 *     </View>
 *   );
 * }
 * ```
 * 
 * @interface IMoePicker - 组件属性接口
 */
const MoePicker: FC<IMoePicker> = ({
  closeable,
  open,
  setOpen,
  columns,
  categories,
  defaultCategory = "",
  onConfirm
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
      className={classnames(
        "moe-picker-main",
        open ? "show" : "hide"
      )}
      onClick={handleClose}
    >
      <View
        className={classnames(
          "moe-picker-main-container",
          open ? "slide-up" : "slide-down"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/*顶部标题*/}
        <View className="moe-picker-title">选择分类</View>
        {/*选择部分 允许进行选择*/}
        <View
          className="category-list"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {categories.map((category) => (
            <View
              key={category}
              className={`category-item ${selectedCategory === category ? "category-item-selected" : ""
                }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </View>
          ))}
        </View>

        {/*下方的确认按钮*/}
        <Button
          className={classnames(
            "confirm-button",
            !selectedCategory ? "btn-disabled" : "btn-active",
          )}
          hoverClass={classnames(
            !selectedCategory ? "" : "btn-active-hover",
          )}
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
