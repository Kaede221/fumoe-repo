import { View } from "@tarojs/components";
import { MoeHeader } from "@fumoe/taro-components";

import "./index.scss";

export default function Index() {
  return (
    <View className="index">
      <MoeHeader backgroundColor="#FFFFFF">测试场地</MoeHeader>
      <View
        style={{
          width: "100%",
          height: "100vh",
          flexDirection: "column",
        }}
      ></View>
    </View>
  );
}
