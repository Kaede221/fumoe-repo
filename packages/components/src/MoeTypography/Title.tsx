import { FC } from "react";
import { View, ViewProps } from "@tarojs/components";

import classNames from "classnames";

import "./Title.scss";

export interface ITitle extends ViewProps {
  /**
   * 标题级别, 对应H1~H6, 默认H1
   */
  level?: number;
  /**
   * 标题的文本内容
   */
  children?: string;
}

/**
 * 标题组件
 * @description 展示不同级别的标题
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 */
const Title: FC<ITitle> = ({ level = 1, children, ...rest }) => {
  return (
    <View className={classNames("moe-typography-title", `h${level}`)} {...rest}>
      {children}
    </View>
  );
};

export default Title;
