import { CSSProperties, FC, ReactNode } from "react";
import { View, ViewProps } from "@tarojs/components";

import classNames from "classnames";

import "./index.scss";

export interface IMoeBackdrop extends ViewProps {
  /**
   * 是否展示遮罩层
   */
  show: boolean;
  /**
   * 点击遮罩层时是否关闭
   */
  closeable?: boolean;
  /**
   * 关闭遮罩层的时候触发
   */
  onClose?: () => void;
  /**
   * 内嵌内容
   */
  children?: ReactNode;
  /**
   * 自定义CSS样式
   */
  style?: CSSProperties;
}

/**
 * 通用遮罩层
 * @param show 是否展示遮罩层
 * @param closeable 点击遮罩层时是否关闭
 * @param onClose 关闭遮罩层的时候触发
 * @param children 内嵌内容
 * @param style 自定义CSS样式
 * @param restProps
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 */
const MoeBackdrop: FC<IMoeBackdrop> = ({
  show,
  closeable = true,
  onClose,
  children,
  style,
  ...restProps
}) => {
  // 关闭的回调函数
  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <View
      className={classNames("moe-backdrop", {
        show: show,
        hide: !show,
      })}
      style={{
        pointerEvents: show ? "auto" : "none",
        ...style,
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (closeable) {
          handleClose();
        }
      }}
      {...restProps}
    >
      {children}
    </View>
  );
};

export default MoeBackdrop;
