import { FC } from "react";
import { View } from "@tarojs/components";
import { useLayoutHeight } from "@fumoe/taro-hooks";

const ComUseLayoutHeight: FC = () => {
  const boxHeight = useLayoutHeight(["#testBox"]);
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "15rpx",
      }}
    >
      <View
        id="testBox"
        style={{
          width: "100rpx",
          height: "100rpx",
          backgroundColor: "red",
        }}
      ></View>
      <View
        style={{
          fontSize: "30rpx",
          fontWeight: "bold",
        }}
      >
        useLayoutHeight
      </View>
      <View
        style={{
          fontSize: "30rpx",
          fontWeight: "bold",
        }}
      >
        上方的box高度为: {boxHeight}px
      </View>
    </View>
  );
};

export default ComUseLayoutHeight;
