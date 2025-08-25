import { CSSProperties, FC } from "react";
import { View } from "@tarojs/components";

import classNames from "classnames";

import "./index.scss";

export interface IMoeSwitch {
  /**
   * 开关显示值
   */
  value: boolean;
  /**
   * 开关状态切换时触发
   */
  onChange: (value: boolean) => void;
  /**
   * 开关大小
   */
  size?: number;
  /**
   * 是否禁用 (禁用不可点击)
   */
  disabled?: boolean;
  /**
   * 激活时的背景颜色, 默认 `#1989FA`
   */
  activeBackgroundColor?: string;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
}

const MoeSwitch: FC<IMoeSwitch> = ({
  value,
  onChange,
  size = 40,
  disabled,
  activeBackgroundColor = "#1989FA",
  style,
}) => {
  // 切换的时候的回调函数
  const handleChange = () => {
    onChange(!value);
  };

  return (
    <View
      style={
        {
          "--button-size": size + "rpx",
          "--container-height": size + 10 + "rpx",
          "--active-background-color": activeBackgroundColor,
          ...style,
        } as CSSProperties
      }
      className={classNames("moe-switch-container", {
        active: value,
        disabled,
      })}
      onClick={(e) => {
        e.stopPropagation();
        if (!disabled) handleChange();
      }}
    >
      <View
        className={classNames("moe-switch-container-button", { active: value })}
      ></View>
    </View>
  );
};

export default MoeSwitch;
