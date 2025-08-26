import { FC } from "react";
import { View } from "@tarojs/components";
import { useNavInfo } from "@fumoe/taro-hooks";

const ComUseNavInfo: FC = () => {
  const navInfo = useNavInfo();
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
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        useNavInfo
      </View>
      <View
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        顶部高度: {navInfo.appHeaderHeight}px
      </View>
    </View>
  );
};

export default ComUseNavInfo;
