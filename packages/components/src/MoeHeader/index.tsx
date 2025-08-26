import Taro from "@tarojs/taro";
import React, { ReactNode } from "react";
import { View, Image, ViewProps } from "@tarojs/components";

const arrowIcon =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzU1MzE3NjIwMzg2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ5MDIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTEwOS41OTM2IDUwOS4zODg4bDM4Ni4wNDgtMzgzLjEyOTZjMTYuMTI4LTE3LjkyIDE1LjIwNjQtNDUuMjg2NC0yLjA3MzYtNjIuMTMxMmE0NS42NzA0IDQ1LjY3MDQgMCAwIDAtNjIuNjQzMi0wLjk3MjhMMTMuMzEyIDQ3Ny42MTkyYTQ0LjkwMjQgNDQuOTAyNCAwIDAgMCAwIDYzLjc5NTJsNDE3LjYxMjggNDE0LjIwOGE0NS41OTM2IDQ1LjU5MzYgMCAwIDAgNDUuNTY4IDE2LjA3NjggNDUuMjYwOCA0NS4yNjA4IDAgMCAwIDM0LjMyOTYtMzMuODE3NiA0NC44NzY4IDQ0Ljg3NjggMCAwIDAtMTUuODcyLTQ1LjM2MzJMMTA5LjU5MzYgNTA5LjM4ODh6IiBmaWxsPSIjMjIyMjIyIiBwLWlkPSI0OTAzIiBkYXRhLXNwbS1hbmNob3ItaWQ9ImEzMTN4LnNlYXJjaF9pbmRleC4wLmkwLjJjNmEzYTgxQTAxdjFsIj48L3BhdGg+PC9zdmc+";

import "./index.scss";

export interface IMoeHeader extends ViewProps {
  /** 标题大小 */
  fontSize?: number;
  /** 返回图标大小 */
  iconSize?: number;
  /** 标题是否靠左 */
  titleLeft?: boolean;
  /** 是否固定在顶部 */
  fixed?: boolean;
  /** 是否显示返回图标 */
  back?: boolean;
  /** 返回部分的图标, 支持路径字符串或者图片base64 */
  backIcon?: string;
  /** 点击返回区域的回调事件 */
  backHandler?: () => void;
  /** 背景颜色 */
  backgroundColor?: string;
  /** 层级高度 */
  zIndex?: number;
  /** 标题内部元素 */
  children?: ReactNode;
}

/**
 * 通用小程序顶部组件
 * @param fontSize 标题大小
 * @param iconSize 图标大小
 * @param titleLeft 标题是否靠左
 * @param fixed 是否固定在顶部
 * @param back 是否显示返回图标
 * @param backIcon 返回部分的图标, 支持路径字符串或者图片base64
 * @param backHandler 点击返回区域的回调事件
 * @param backgroundColor 背景颜色
 * @param zIndex 层级高度
 * @param children 标题内部元素
 * @param restProps
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 */
const MoeHeader: React.FC<IMoeHeader> = ({
  fontSize = 32,
  iconSize = 32,
  titleLeft,
  fixed,
  back,
  backIcon,
  backHandler,
  backgroundColor = "transparent",
  zIndex = 1000,
  children,
  ...restProps
}) => {
  // 防止当前不存在这个东西
  const { statusBarHeight } = Taro.getWindowInfo
    ? Taro.getWindowInfo()
    : { statusBarHeight: 0 };

  // 获取胶囊信息
  const { height, top } = Taro.getMenuButtonBoundingClientRect
    ? Taro.getMenuButtonBoundingClientRect()
    : { height: 32, top: 0 };

  // 计算标题栏高度
  const titleBarHeight = height + (top - statusBarHeight!) * 2;
  // 计算导航栏高度
  const appHeaderHeight = statusBarHeight! + titleBarHeight;

  const containerHeight = appHeaderHeight - (statusBarHeight || 0);

  // 定义点击回调事件
  const onClickBackIcon = async () => {
    if (backHandler) {
      backHandler();
    } else {
      // 否则, 尝试返回上一页
      Taro.navigateBack({
        delta: 1,
      }).catch((err) => {
        console.warn("返回出错", err.errMsg);
      });
    }
  };

  // 如果没有children, 报错
  if (!children) {
    console.warn("MoeHeader 需要一个内容哦");
  }

  return (
    <>
      {/*占位元素 用来判断是否固定*/}
      {fixed && (
        <View
          style={{
            height: appHeaderHeight + "px",
            width: "100%",
          }}
        ></View>
      )}
      <View
        className={"moe-header"}
        style={{
          position: fixed ? "fixed" : "static",
          height: appHeaderHeight + "px",
          top: fixed ? 0 : "auto",
          backgroundColor,
          zIndex,
        }}
        {...restProps}
      >
        {/*主要内容区域*/}
        <View
          className={"moe-header-container"}
          style={{
            height: containerHeight + "px",
            fontSize: Taro.pxTransform(fontSize),
            justifyContent: titleLeft ? "flex-start" : "center",
            paddingLeft: titleLeft ? (back ? fontSize + 25 + "px" : "0") : "0",
          }}
        >
          {back && (
            <Image
              className={"back-icon"}
              src={!!backIcon ? backIcon : arrowIcon}
              onClick={onClickBackIcon}
              style={{
                width: Taro.pxTransform(iconSize),
                height: Taro.pxTransform(iconSize),
              }}
            ></Image>
          )}

          {/*中间的文本部分*/}
          <View
            style={{
              marginBottom: "0.025em",
              display: "flex",
              fontSize: Taro.pxTransform(fontSize),
            }}
          >
            {children}
          </View>
        </View>
      </View>
    </>
  );
};

export default MoeHeader;
