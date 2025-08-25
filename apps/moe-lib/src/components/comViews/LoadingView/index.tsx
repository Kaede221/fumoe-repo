import { FC, useState } from "react";
import { View, Slider } from "@tarojs/components";
import Title from "@/components/Title";
import { MoeCell, MoeLoading } from "@fumoe/taro-components";
import { useCounter } from "@fumoe/taro-hooks";

const LoadingView: FC = () => {
  const [size, setSize] = useState(70);
  const [colorIndex, { inc: incColorIndex }] = useCounter(0);
  // 定义可切换的颜色列表
  const colorList = ["#C8C9CC", "#769fcd", "#9896f1", "#ffd460"];
  return (
    <>
      <Title>基础使用</Title>
      <View
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20rpx",
          gap: "20rpx",
        }}
      >
        <MoeLoading
          size={size}
          color={colorList[colorIndex % colorList.length]}
        />
        <MoeLoading
          size={size}
          color={colorList[colorIndex % colorList.length]}
          type="spinner"
        />
      </View>
      <MoeCell
        title="调整大小"
        label={
          <Slider
            style={{
              width: "100%",
            }}
            value={size}
            min={10}
            max={100}
            onChanging={(e) => {
              setSize(e.detail.value);
            }}
          />
        }
      ></MoeCell>
      <MoeCell title="切换颜色" isLink onClick={incColorIndex}></MoeCell>
    </>
  );
};

export default LoadingView;
