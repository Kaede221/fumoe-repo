import { FC, ReactNode, createContext, useState, CSSProperties } from "react";
import { View, ViewProps } from "@tarojs/components";

import "./moe-radio-group.scss";

export interface IMoeRadioGroup extends ViewProps {
  /**
   * 内部元素, 只建议使用Radio
   */
  children?: ReactNode;
  /**
   * 默认选中的内容
   */
  defaultValue?: string;
  /**
   * 自定义样式表
   */
  style?: CSSProperties;
}

// 定义上下文的类型
interface IMoeRadioGroupContext {
  currentValue?: string;
  onClick?: (currentValue: string) => void;
}

// 创建传输上下文
export const MoeRadioGroupContext = createContext<IMoeRadioGroupContext>({});

/**
 * 单选框组
 * @param children 包含单选框的元素
 * @param defaultValue 默认选中的值
 * @param style 自定义样式表
 * @param props 剩余参数
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 */
const MoeRadioGroup: FC<IMoeRadioGroup> = ({
  children,
  defaultValue,
  style,
  ...props
}) => {
  // 修改的时候, 监听修改的内容
  const handleChangeValue = (newValue: string) => {
    setCurrentContext({
      ...currentContext,
      currentValue: newValue,
    });
  };

  // 记录当前的上下文对象
  const [currentContext, setCurrentContext] = useState<IMoeRadioGroupContext>({
    onClick: handleChangeValue,
    currentValue: defaultValue,
  });

  return (
    <MoeRadioGroupContext.Provider value={currentContext}>
      <View children={children} style={style} {...props}></View>
    </MoeRadioGroupContext.Provider>
  );
};

export default MoeRadioGroup;
