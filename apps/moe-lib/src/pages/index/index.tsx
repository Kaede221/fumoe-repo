import { View } from "@tarojs/components";
import { MoeHeader, MoeButton } from "@fumoe/taro-components";
import { useNavInfo } from "@fumoe/taro-hooks";

import "./index.scss";

export default function Index() {
  const navInfo = useNavInfo();
  return (
    <View>
      <MoeHeader backgroundColor="#FFFFFF">Moe 组件库</MoeHeader>
      <View
        className="main-container"
        style={{
          height: `calc(100vh - ${navInfo.appHeaderHeight}px)`,
        }}
      >
        <MoeButton color="primary" variant="outlined">
          Hello World
        </MoeButton>
        <MoeButton color="danger" disabled>
          测试
        </MoeButton>
        <MoeButton color="info" rounded variant="outlined">
          测试按钮
        </MoeButton>
        <MoeButton variant="text">文本按钮</MoeButton>
      </View>
    </View>
  );
}
