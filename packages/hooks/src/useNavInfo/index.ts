import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";

interface INavInfo {
  statusBarHeight: number;
  titleBarHeight: number;
  titleBarWidth: number;
  appHeaderHeight: number;
  marginSides: number;
  capsuleWidth: number;
  capsuleHeight: number;
  capsuleLeft: number;
  contentHeight: number;
  screenHeight: number;
  windowHeight: number;
}

/**
 * useNavInfo
 * @description 用来获取顶部高度, 宽度相关操作的钩子
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 * @example
 * const navInfo = useNavInfo();
 * return (
 *   <View
 *     className="background-card"
 *     style={{
 *       marginTop: navInfo.appHeaderHeight + "px",
 *     }}
 *   ></View>
 * )
 */
const useNavInfo = (): INavInfo => {
  const [navInfo, setNavInfo] = useState({
    statusBarHeight: 0,
    titleBarHeight: 0,
    titleBarWidth: 0,
    appHeaderHeight: 0,
    marginSides: 0,
    capsuleWidth: 0,
    capsuleHeight: 0,
    capsuleLeft: 0,
    contentHeight: 0,
    screenHeight: 0,
    windowHeight: 0,
  });

  useEffect(() => {
    // 判断当前环境是否可用, 不可用则直接返回0
    const { statusBarHeight, screenWidth, screenHeight, windowHeight } =
      Taro.getEnv() === "WEAPP" || Taro.getEnv() === "HARMONYHYBRID"
        ? Taro.getWindowInfo()
        : {
            statusBarHeight: 70,
            screenWidth: 0,
            screenHeight: 0,
            windowHeight: 0,
          };

    // 获取胶囊信息
    const { width, height, left, top, right } =
      Taro.getEnv() === "WEAPP" ||
      Taro.getEnv() === "TT" ||
      Taro.getEnv() === "HARMONYHYBRID"
        ? Taro.getMenuButtonBoundingClientRect()
        : { width: 0, height: 0, left: 0, top: 0, right: 0 };
    // 计算标题栏高度
    const titleBarHeight = height + (top - statusBarHeight!) * 2;
    // 计算导航栏高度
    const appHeaderHeight = statusBarHeight! + titleBarHeight;
    //边距，两边的
    const marginSides = screenWidth - right;
    //标题宽度
    const titelBarWidth = screenWidth - width - marginSides * 3;
    //去掉导航栏，屏幕剩余的高度
    const contentHeight = screenHeight - appHeaderHeight;

    setNavInfo({
      statusBarHeight: statusBarHeight || 0, //状态栏高度
      titleBarHeight: titleBarHeight, //标题栏高度
      titleBarWidth: titelBarWidth, //标题栏宽度
      appHeaderHeight: appHeaderHeight, //整个导航栏高度
      marginSides: marginSides, //侧边距
      capsuleWidth: width, //胶囊宽度
      capsuleHeight: height, //胶囊高度
      capsuleLeft: left,
      contentHeight: contentHeight,
      screenHeight: screenHeight,
      windowHeight: windowHeight,
    });
  }, []);

  return navInfo;
};

export default useNavInfo;
