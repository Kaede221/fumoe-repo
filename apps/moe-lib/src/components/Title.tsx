import { ReactNode } from "react";
import { View } from "@tarojs/components";

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <View
      style={{
        fontWeight: "bold",
        margin: "20rpx 40rpx",
        fontSize: "30rpx",
      }}
    >
      {children}
    </View>
  );
};

export default Title;
