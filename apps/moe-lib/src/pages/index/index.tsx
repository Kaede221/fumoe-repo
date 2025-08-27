import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import {
  MoeHeader,
  MoeCell,
  IMoeCell,
  MoeTypography,
} from "@fumoe/taro-components";

import "./index.scss";

// NOTE 基础组件
const renderList1: IMoeCell[] = [
  {
    title: "MoeButton",
    children: "按钮组件",
  },
  {
    title: "MoeFloatButton",
    children: "悬浮按钮组件",
  },
  {
    title: "MoeCell",
    children: "单元格组件",
  },
  {
    title: "MoeHeader",
    children: "通用的顶部组件",
  },
  {
    title: "MoeTypography",
    children: "排版",
  },
];

// NOTE 表单组件
const renderList2: IMoeCell[] = [
  {
    title: "MoePicker",
    children: "弹出选择器",
  },
  {
    title: "MoeSwitch",
    children: "开关",
  },
  {
    title: "MoeCheckbox",
    children: "复选框",
  },
  {
    title: "MoeRadio",
    children: "单选框",
  },
];

// NOTE 反馈组件
const renderList3: IMoeCell[] = [
  {
    title: "MoeBackdrop",
    children: "背景弹出层",
  },
  {
    title: "MoeLoading",
    children: "加载组件",
  },
];

// NOTE 展示组件
const renderList4: IMoeCell[] = [
  {
    title: "MoeTag",
    children: "标签组件",
  },
];

// 最终渲染列表
const finalList: { title: string; item: IMoeCell[] }[] = [
  {
    title: "基础组件",
    item: renderList1,
  },
  {
    title: "表单组件",
    item: renderList2,
  },
  {
    title: "反馈组件",
    item: renderList3,
  },
  {
    title: "展示组件",
    item: renderList4,
  },
];

const Index = () => {
  return (
    <View>
      <MoeHeader backgroundColor="#FFFFFF" iconSize={50} fixed>
        MoeLib - 组件
      </MoeHeader>
      {finalList.map((listObj, index) => (
        <>
          <MoeTypography.Title
            key={`title-${index}`}
            level={3}
            style={{
              paddingLeft: "20px",
            }}
          >
            {listObj.title}
          </MoeTypography.Title>
          {listObj.item
            .slice()
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
                isLink
                onClick={async () => {
                  await Taro.navigateTo({
                    url: "/pages/comsPage/index?id=" + item.title,
                  });
                }}
              >
                {item.children}
              </MoeCell>
            ))}
        </>
      ))}
    </View>
  );
};

export default Index;
