import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { MoeHeader, MoeCell, IMoeCell } from "@fumoe/taro-components";
import Title from "@/components/Title";

import "./index.scss";

// 通用组件的渲染列表
const renderList1: IMoeCell[] = [
  {
    title: "MoeButton",
    label: "按钮组件",
    onClick: async () => {
      await Taro.navigateTo({
        url: "/pages/comsPage/index" + "?id=MoeButton",
      });
    },
  },
];

const Index = () => {
  return (
    <View>
      <MoeHeader
        backgroundColor="#FFFFFF"
        back
        backHandler={async () => {
          await Taro.navigateTo({
            url: "/pages/debugPage/index",
          });
        }}
      >
        MoeLib - 组件
      </MoeHeader>
      <Title>通用组件</Title>
      {renderList1.map((item, index) => (
        <MoeCell
          key={`renderlist1-${index}`}
          title={item.title}
          label={item.label}
          isLink
          onClick={item.onClick}
        ></MoeCell>
      ))}
    </View>
  );
};

export default Index;
