import { View, Image } from "@tarojs/components";
import { MoeHeader } from "@fumoe/taro-components";
import { useToggle } from "@fumoe/taro-hooks";
import { MoeFloatButton } from "@fumoe/taro-components";

import testIcon from "@/assets/testIcon.png";
import testSvgIcon from "@/assets/e-station-icon.svg";

import "./index.scss";

const Index = () => {
  const [visiable, { toggle: changeVisiable }] = useToggle(true);
  return (
    <View>
      <MoeHeader
        back
        backgroundColor="#FFFFFF"
        backIcon={testSvgIcon}
        iconSize={32}
      >
        Debug Page
      </MoeHeader>
      <View onClick={changeVisiable}>修改是否显示</View>
      <MoeFloatButton size={100} backgroundColor="#FFFFFF" visible={visiable}>
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
