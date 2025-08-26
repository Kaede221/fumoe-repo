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
        gap: "15px",
      }}
    >
      <View
        id="testBox"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
        }}
      ></View>
      <View
        style={{
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        useLayoutHeight
      </View>
      <View
        style={{
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        上方的box高度为: {boxHeight}px
      </View>
    </View>
  );
};

export default ComUseLayoutHeight;
