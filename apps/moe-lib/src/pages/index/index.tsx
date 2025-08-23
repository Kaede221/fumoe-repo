import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { MoeHeader, MoeCell, IMoeCell } from "@fumoe/taro-components";
import Title from "@/components/Title";

import icDebug from "@/assets/ic-debug.svg";

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
  {
    title: "MoeFloatButton",
    label: "悬浮按钮组件",
    onClick: async () => {
      await Taro.navigateTo({
        url: "/pages/comsPage/index" + "?id=MoeFloatButton",
      });
    },
  },
  {
    title: "MoeCell",
    label: "单元格组件",
    onClick: async () => {
      await Taro.navigateTo({
        url: "/pages/comsPage/index" + "?id=MoeCell",
      });
    },
  },
];

// 表单组件的渲染列表
const renderList2: IMoeCell[] = [
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
        backIcon={icDebug}
        iconSize={50}
        backHandler={async () => {
          await Taro.navigateTo({
            url: "/pages/debugPage/index",
          });
        }}
      >
        MoeLib - 组件
      </MoeHeader>
      <Title>通用组件</Title>
      {renderList1
        .slice() // 创建数组副本，避免修改原数组
        .sort((a, b) => {
          // 提取首字母并转为小写进行比较（忽略大小写）
          const firstLetterA = String(a.title).charAt(3).toLowerCase();
          const firstLetterB = String(b.title).charAt(3).toLowerCase();
          return firstLetterA.localeCompare(firstLetterB);
        })
        .map((item, index) => (
          <MoeCell
            key={`renderlist1-${index}`}
            title={item.title}
            label={item.label}
            isLink
            onClick={item.onClick}
          ></MoeCell>
        ))}

      <Title>表单组件</Title>
      {renderList2
        .slice() // 创建数组副本，避免修改原数组
        .sort((a, b) => {
          // 提取首字母并转为小写进行比较（忽略大小写）
          const firstLetterA = String(a.title).charAt(3).toLowerCase();
          const firstLetterB = String(b.title).charAt(3).toLowerCase();
          return firstLetterA.localeCompare(firstLetterB);
        })
        .map((item, index) => (
          <MoeCell
            key={`renderlist2-${index}`}
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
