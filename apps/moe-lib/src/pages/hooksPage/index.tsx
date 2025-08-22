import { View, ScrollView } from "@tarojs/components";
import { MoeHeader } from "@fumoe/taro-components";
import { useNavInfo } from "@fumoe/taro-hooks";

import ComUseBoolean from "@/components/hookComs/ComUseBoolean";
import ComUseCounter from "@/components/hookComs/ComUseCounter";
import ComUseLayoutHeight from "@/components/hookComs/ComUseLayoutHeight";
import ComUseNavInfo from "@/components/hookComs/ComUseNavInfo";
import ComUseToggle from "@/components/hookComs/ComUseToggle";
import ComUpdateEffect from "@/components/hookComs/ComUpdateEffect";

import "./index.scss";

export default function Index() {
  const navInfo = useNavInfo();
  return (
    <View>
      <MoeHeader backgroundColor="#FFFFFF">MoeLib - 钩子</MoeHeader>
      <ScrollView
        scrollY
        style={{
          height: `calc(100vh - ${navInfo.appHeaderHeight}px)`,
        }}
      >
        <View className="scroll-view-part">
          <ComUseBoolean />
          <ComUseToggle />
          <ComUseCounter />
          <ComUseLayoutHeight />
          <ComUseNavInfo />
          <ComUpdateEffect />
        </View>
      </ScrollView>
    </View>
  );
}
