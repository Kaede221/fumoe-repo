import { View } from "@tarojs/components";
import { MoeHeader } from "@fumoe/taro-components";
import UpdateHookTest from "@/components/UpdateHookTest";

import "./index.scss";

export default function Index() {
  return (
    <View className="index">
      <MoeHeader back titleLeft>
        测试场地
      </MoeHeader>
      <UpdateHookTest></UpdateHookTest>
    </View>
  );
}
