import { CSSProperties, FC, ReactNode } from "react";
import { View, Image } from "@tarojs/components";
import { useToggle } from "@fumoe/taro-hooks";

import classNames from "classnames";

import "./index.scss";

// 默认的图标
const DEFAULT_CHECK_ICON =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzU2MTEzMjAzMTc3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijc5ODIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTk5Ny44ODggNzAuMTQ0QzY4Ni41OTIgMjYxLjEyIDQ2MC44IDUwMi4yNzIgMzU4LjkxMiA2MjMuMTA0TDExMC4wOCA0MjguMDMyIDAgNTE2LjYwOGw0MjkuNTY4IDQzNy4yNDhDNTAzLjI5NiA3NjQuNDE2IDczNy43OTIgMzk0LjI0IDEwMjQgMTMxLjA3MmwtMjYuMTEyLTYwLjkyOG0wIDB6IiBwLWlkPSI3OTgzIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+";

export interface IMoeCheckbox {
  /**
   * 是否为选中状态 (可以理解为默认值)
   */
  checked?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 形状
   */
  shape?: "square" | "round";
  /**
   * 图标大小
   */
  iconSize?: number;
  /**
   * 自定义图标的链接, 地址, base64字符串
   */
  iconUrl?: string;
  /**
   * 激活的背景颜色
   */
  activeBackgroundColor?: string;
  /**
   * 复选框右侧内容部分
   */
  children?: ReactNode;
  /**
   * 自定义样式表
   */
  style?: CSSProperties;
  /**
   * 切换的时候调用, 传入切换后的值
   * @param newValue
   */
  onChange?: (newValue: boolean) => void;
}

const MoeCheckbox: FC<IMoeCheckbox> = ({
  checked,
  disabled,
  shape = "square",
  iconSize = 20,
  iconUrl,
  activeBackgroundColor = "#1989FA",
  children,
  style,
  onChange,
}) => {
  // 判断当前是否点击
  const [isChecked, { toggle: toggleIsChecked }] = useToggle(checked);

  // 点击事件
  const handleClick = () => {
    if (disabled) return;
    // 先调用
    if (onChange) onChange(!isChecked);
    // 先切换
    toggleIsChecked();
  };

  return (
    <View
      className="moe-checkbox-container"
      style={style}
      onClick={(e) => {
        e.stopPropagation();
        // 调用
        handleClick();
      }}
    >
      {/* 选择框 */}
      <View
        className={classNames("moe-checkbox-container-box", `shape-${shape}`, {
          active: isChecked,
          disabled,
        })}
        style={
          {
            height: iconSize + "px",
            width: iconSize + "px",
            "--moe-checkbox-active": activeBackgroundColor,
          } as CSSProperties
        }
      >
        {/* 里面放一个对勾 */}
        <Image
          className={classNames("moe-checkbox-container-box-image", {
            active: isChecked,
          })}
          style={{
            width: iconSize - 5 + "px",
            height: iconSize - 5 + "px",
          }}
          src={iconUrl ? iconUrl : DEFAULT_CHECK_ICON}
        />
      </View>
      {/* 右边的部分 */}
      {children}
    </View>
  );
};

export default MoeCheckbox;
