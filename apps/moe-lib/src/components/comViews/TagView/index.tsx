import { FC } from "react";
import { View } from "@tarojs/components";
import Title from "@/components/Title";

import { MoeTag } from "@fumoe/taro-components";

const TagView: FC = () => {
  return (
    <View>
      <Title>自定义颜色字段</Title>
      <View
        style={{
          width: "100%",
          padding: "0 20rpx",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20rpx",
        }}
      >
        <MoeTag label="默认颜色" />
        <MoeTag label="蓝色" mainColor="#FFFFFF" backgroundColor="#FFFFFF" />
      </View>
    </View>
  );
};

export default TagView;
