import { FC } from "react";
import { View } from "@tarojs/components";
import { MoeTypography } from "@fumoe/taro-components";
import { MoeHeader } from "@fumoe/taro-components";

import iconTest from "@/assets/ic-debug.svg";
import Taro from "@tarojs/taro";

const { Title } = MoeTypography;

const HeaderView: FC = () => {
  return (
    <View>
      <Title level={3}>例如上面的，这个组件就是一个通用的顶部</Title>
      <MoeHeader backgroundColor="#FFFFFF">啥都没有的顶部</MoeHeader>
      <Title level={3}>也可以带有左边的图标</Title>
      <MoeHeader backgroundColor="#FFFFFF" back>
        带有左边的图标 back
      </MoeHeader>
      <Title level={3}>左边的图标可以自定义</Title>
      <MoeHeader backgroundColor="#FFFFFF" back backIcon={iconTest}>
        自定义图标 back + backIcon
      </MoeHeader>
      <Title level={3}>图标大小和字体大小都可以更改</Title>
      <MoeHeader
        backgroundColor="#FFFFFF"
        back
        backIcon={iconTest}
        iconSize={50}
        fontSize={25}
      >
        自定义图标 back + backIcon
      </MoeHeader>
      <Title level={3}>返回按钮的回调函数可以自定义</Title>
      <MoeHeader
        backgroundColor="#FFFFFF"
        back
        backIcon={iconTest}
        backHandler={async () => {
          await Taro.showToast({
            title: "点击了",
          });
        }}
      >
        点击返回试试
      </MoeHeader>
    </View>
  );
};

export default HeaderView;
