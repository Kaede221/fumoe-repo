import { CSSProperties, FC } from "react";
import { View, ViewProps } from "@tarojs/components";
import { MoeLoading } from "../index";

import classNames from "classnames";

import "./index.scss";

export interface IMoeSwitch extends ViewProps {
  /**
   * 开关显示值
   */
  value: boolean;
  /**
   * 开关大小
   */
  size?: number;
  /**
   * 是否为加载状态
   */
  loading?: boolean;
  /**
   * 加载动画的类型
   */
  loadingType?: "circular" | "spinner";
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
  /**
   * 开关状态切换时触发
   */
  onChange: (value: boolean) => void;
}

/**
 * 开关
 * @param value 开关显示值
 * @param loading 是否为加载状态
 * @param onChange 开关状态切换时触发
 * @param size 开关大小
 * @param loadingType 加载动画的类型
 * @param disabled 是否禁用 (禁用不可点击)
 * @param activeBackgroundColor 激活时的背景颜色, 默认 `#1989FA`
 * @param style 自定义样式
 * @param restProps
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 */
const MoeSwitch: FC<IMoeSwitch> = ({
  value,
  size = 20,
  loading,
  loadingType = "circular",
  disabled,
  activeBackgroundColor = "#1989FA",
  style,
  onChange,
  ...restProps
}) => {
  // 切换的时候的回调函数
  const handleChange = () => {
    onChange(!value);
  };

  return (
    <View
      style={
        {
          "--button-size": size + "px",
          "--container-height": size + 7 + "px",
          "--active-background-color": activeBackgroundColor,
          ...style,
        } as CSSProperties
      }
      className={classNames("moe-switch-container", {
        active: value,
        disabled: disabled || loading,
      })}
      onClick={(e) => {
        e.stopPropagation();
        if (!(disabled || loading)) handleChange();
      }}
      {...restProps}
    >
      <View
        className={classNames("moe-switch-container-button", { active: value })}
      >
        {/* 判断是否为正在加载的状态 */}
        {loading && <MoeLoading type={loadingType} size={size * 0.65} />}
      </View>
    </View>
  );
};

export default MoeSwitch;
