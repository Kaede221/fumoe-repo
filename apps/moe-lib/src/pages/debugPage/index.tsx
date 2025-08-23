import { View } from "@tarojs/components";
import { MoeHeader } from "@fumoe/taro-components";
import MoeFloatButton from "@/components/MoeFloatButton";

import "./index.scss";

const Index = () => {
  return (
    <View>
      <MoeHeader backgroundColor="#FFFFFF">Debug Page</MoeHeader>
      <MoeFloatButton></MoeFloatButton>
    </View>
  );
};

export default Index;
