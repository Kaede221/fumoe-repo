import { FC, ReactNode } from "react";
import {
  default as MoeRadioCore,
  type IMoeRadio as IMoeRadioCore,
} from "./moe-radio";
import {
  default as MoeRadioGroupCore,
  type IMoeRadioGroup,
} from "./moe-radio-group";

export interface IMoeRadio {
  (props: IMoeRadioCore): ReactNode;

  /**
   * 单选框组
   * @param children 包含单选框的元素
   * @param defaultValue 默认选中的值
   * @param style 自定义样式表
   * @param props 剩余参数
   * @author kaedeshimizu
   * @email kaedeshimizu@qq.com
   */
  Group: FC<IMoeRadioGroup>;
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
const MoeRadio = MoeRadioCore as IMoeRadio;

MoeRadio.Group = MoeRadioGroupCore;

export default MoeRadio;
