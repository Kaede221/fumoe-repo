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
 * @param level 标题级别
 * @param children 标题文本内容
 * @param restProps
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 */
const Title: FC<ITitle> = ({ level = 1, children, ...restProps }) => {
  return (
    <View
      className={classNames("moe-typography-title", `h${level}`)}
      {...restProps}
    >
      {children}
    </View>
  );
};

export default Title;
