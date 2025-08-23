import { View, Image } from "@tarojs/components";
import { MoeHeader } from "@fumoe/taro-components";
import { useToggle } from "@fumoe/taro-hooks";
import { MoeFloatButton } from "@fumoe/taro-components";

import testIcon from "@/assets/testIcon.png";

import "./index.scss";

const Index = () => {
  const [visiable, { toggle: changeVisiable }] = useToggle(true);
  return (
    <View>
      <MoeHeader backgroundColor="#FFFFFF">Debug Page</MoeHeader>
      <View onClick={changeVisiable}>修改是否显示</View>
      <MoeFloatButton
        size="default"
        backgroundColor="#FFFFFF"
        visible={visiable}
      >
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
