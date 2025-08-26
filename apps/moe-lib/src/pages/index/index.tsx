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
    title: "MoeTypography",
    label: "排版",
  },
];

// NOTE 表单组件
const renderList2: IMoeCell[] = [
  {
    title: "MoePicker",
    label: "弹出选择器",
  },
  {
    title: "MoeSwitch",
    label: "开关",
  },
  {
    title: "MoeCheckbox",
    label: "复选框",
  },
];

// NOTE 反馈组件
const renderList3: IMoeCell[] = [
  {
    title: "MoeBackdrop",
    label: "背景弹出层",
  },
  {
    title: "MoeLoading",
    label: "加载组件",
  },
];

// NOTE 展示组件
const renderList4: IMoeCell[] = [
  {
    title: "MoeTag",
    label: "标签组件",
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
      <MoeHeader backgroundColor="#FFFFFF" iconSize={50}>
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
