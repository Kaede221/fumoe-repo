import { View } from "@tarojs/components";
import { MoeHeader, MoeCell } from "@fumoe/taro-components";

import testIcon from "@/assets/testIcon.png";

import "./index.scss";

const Index = () => {
  return (
    <View>
      <MoeHeader backgroundColor="#FFFFFF">MoeLib - 组件</MoeHeader>
      <MoeCell title="你好" label="看起来不错" icon={testIcon} isLink></MoeCell>
    </View>
  );
};

export default Index;
