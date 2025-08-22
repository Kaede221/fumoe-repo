import { View } from "@tarojs/components";
import { MoeHeader } from "@fumoe/taro-components";
import { useNavInfo } from "@fumoe/taro-hooks";

import "./index.scss";

export default function Index() {
  const navInfo = useNavInfo();
  return (
    <View>
      <MoeHeader backgroundColor="#FFFFFF">MoeLib - 钩子</MoeHeader>
      <View
        className="main-container"
        style={{
          height: `calc(100vh - ${navInfo.appHeaderHeight}px)`,
        }}
      ></View>
    </View>
  );
}
