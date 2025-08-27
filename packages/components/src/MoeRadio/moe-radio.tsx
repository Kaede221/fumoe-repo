import { FC, useContext, ReactNode, CSSProperties } from "react";
import { MoeRadioGroupContext } from "./moe-radio-group";
import { MoeCheckbox } from "../index";

import "./moe-radio.scss";

export interface IMoeRadio {
  /**
   * 当前单选框的值
   */
  value: string;
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
   * 自定义样式
   */
  style?: CSSProperties;
}

/**
 * 单选框组件
 * @param value 当前选项的值
 * @param disabled 是否禁用
 * @param shape 形状
 * @param iconSize 图标大小
 * @param iconUrl 自定义图标的链接, 地址, base64字符串
 * @param children 显示的内容
 * @param activeBackgroundColor 激活的背景颜色
 * @param style 自定义样式
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 */
const MoeRadio: FC<IMoeRadio> = ({
  value,
  disabled,
  shape = "square",
  iconSize = 20,
  iconUrl,
  children,
  activeBackgroundColor = "#1989FA",
  style,
}) => {
  // 获取组件的上下文
  const content = useContext(MoeRadioGroupContext);
  return (
    <MoeCheckbox
      disabled={content.disabled || disabled}
      shape={shape}
      iconSize={content.size || iconSize}
      iconUrl={iconUrl}
      activeBackgroundColor={activeBackgroundColor}
      onChange={(newValue) => {
        if (!newValue) return;

        if (!content.onClick) return;
        content.onClick(value);
      }}
      checked={value === content.currentValue}
      defaultChecked={value === content.defaultValue}
      style={style}
    >
      {children}
    </MoeCheckbox>
  );
};

export default MoeRadio;
