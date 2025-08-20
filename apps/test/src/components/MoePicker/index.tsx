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
}

/**
 * 自定义弹出层选择器
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 */
const MoePicker: FC<IMoePicker> = ({
  closeable,
  open,
  setOpen,
  columns,
  categories,
  defaultCategory = "",
}) => {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  return (
    <View
      className={classnames("moe-picker-main", open ? "" : "hide")}
      onClick={() => {
        if (closeable) setOpen(false);
      }}
    >
      <View
        className="moe-picker-main-container"
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
          className={classnames(
            "confirm-button",
            !selectedCategory ? "btn-disabled" : "btn-active",
          )}
          hoverClass={classnames(
            !selectedCategory ? "btn-disabled-cover" : "btn-active-cover",
          )}
          disabled={!selectedCategory}
        >
          确定
        </Button>
      </View>
    </View>
  );
};

export default MoePicker;
