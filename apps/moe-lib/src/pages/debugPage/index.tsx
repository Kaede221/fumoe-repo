import { View, Image } from "@tarojs/components";
import { MoeHeader } from "@fumoe/taro-components";
import { MoeFloatButton } from "@fumoe/taro-components";

import testIcon from "@/assets/testIcon.png";

import "./index.scss";

const Index = () => {
  return (
    <View>
      <MoeHeader backgroundColor="#FFFFFF">Debug Page</MoeHeader>
      <MoeFloatButton size={60} backgroundColor="#FFFFFF">
        <Image
          src={testIcon}
          style={{
            width: "50%",
            height: "50%",
          }}
        />
      </MoeFloatButton>
    </View>
  );
};

export default Index;
