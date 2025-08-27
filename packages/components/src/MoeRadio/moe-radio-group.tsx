import { FC, ReactNode, createContext, useState, CSSProperties } from "react";
import { View } from "@tarojs/components";

import "./moe-radio-group.scss";

// 定义上下文的类型
interface IMoeRadioGroupContext {
  // 所有单选框的大小 px
  size?: number;
  // 默认选中的内容
  defaultValue?: string;
  // 是否禁用全部单选框
  disabled?: boolean;
  // 当前选中的内容
  currentValue?: string;
  // 点击的回调函数
  onClick?: (currentValue: string) => void;
}

// 创建传输上下文
export const MoeRadioGroupContext = createContext<IMoeRadioGroupContext>({});

export interface IMoeRadioGroup {
  /**
   * 默认选中的内容
   */
  defaultValue?: string;
  /**
   * 是否禁用全部单选框
   */
  disabled?: boolean;
  /**
   * 自定义样式表
   */
  style?: CSSProperties;
  /**
   * 所有单选框的图标大小 px
   */
  size?: number;
  /**
   * 内部元素
   */
  children?: ReactNode;
  /**
   * 修改内容时调用
   * @param newValue
   */
  onChange?: (newValue: string) => void;
}

/**
 * 单选框组
 * @param defaultValue 默认选中的内容
 * @param disabled 是否禁用全部单选框
 * @param style 自定义样式表
 * @param children 包含单选框的元素
 * @param onChange 修改内容时调用
 * @param size 所有单选框的图标大小 px
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 */
const MoeRadioGroup: FC<IMoeRadioGroup> = ({
  defaultValue,
  disabled,
  children,
  style,
  onChange,
  size,
}) => {
  // 修改的时候, 监听修改的内容
  const handleChangeValue = (newValue: string) => {
    setCurrentContext({
      ...currentContext,
      currentValue: newValue,
    });
    if (onChange) onChange(newValue);
  };

  // 记录当前的上下文对象
  const [currentContext, setCurrentContext] = useState<IMoeRadioGroupContext>({
    defaultValue,
    disabled,
    onClick: handleChangeValue,
    currentValue: defaultValue,
    size,
  });

  return (
    <MoeRadioGroupContext.Provider value={currentContext}>
      <View children={children} style={style}></View>
    </MoeRadioGroupContext.Provider>
  );
};

export default MoeRadioGroup;
