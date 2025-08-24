import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { MoeHeader, MoeCell, IMoeCell } from "@fumoe/taro-components";
import Title from "@/components/Title";

import "./index.scss";

const renderList1: IMoeCell[] = [
  {
    title: "MoeButton",
    label: "按钮组件",
  },
  {
    title: "MoeFloatButton",
    label: "悬浮按钮组件",
  },
  {
    title: "MoeCell",
    label: "单元格组件",
  },
  {
    title: "MoeHeader",
    label: "通用的顶部组件",
  },
  {
    title: "MoeTag",
    label: "标签组件",
  },
];

// 表单组件的渲染列表
const renderList2: IMoeCell[] = [
  {
    title: "MoePicker",
    label: "弹出选择器",
  },
];

// 最终渲染列表
const finalList = [
  {
    title: "基础组件",
    item: renderList1.slice().sort((a, b) => {
      // 提取首字母并转为小写进行比较（忽略大小写）
      const firstLetterA = String(a.title).charAt(3).toLowerCase();
      const firstLetterB = String(b.title).charAt(3).toLowerCase();
      return firstLetterA.localeCompare(firstLetterB);
    }),
  },
  {
    title: "表单组件",
    item: renderList2.slice().sort((a, b) => {
      // 提取首字母并转为小写进行比较（忽略大小写）
      const firstLetterA = String(a.title).charAt(3).toLowerCase();
      const firstLetterB = String(b.title).charAt(3).toLowerCase();
      return firstLetterA.localeCompare(firstLetterB);
    }),
  },
];

const Index = () => {
  return (
    <View>
      <MoeHeader backgroundColor="#FFFFFF" iconSize={50}>
        MoeLib - 组件
      </MoeHeader>
      {finalList.map((listObj) => (
        <>
          <Title>{listObj.title}</Title>
          {listObj.item.map((item, index) => (
            <MoeCell
              key={`renderlist1-${index}`}
              title={item.title}
              label={item.label}
              isLink
              onClick={async () => {
                await Taro.navigateTo({
                  url: "/pages/comsPage/index?id=" + item.title,
                });
              }}
            ></MoeCell>
          ))}
        </>
      ))}
    </View>
  );
};

export default Index;
