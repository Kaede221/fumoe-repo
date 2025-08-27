import { FC } from "react";
import { Image, View } from "@tarojs/components";
import { useCounter, useToggle } from "@fumoe/taro-hooks";
import { MoeFloatButton, MoeButton } from "@fumoe/taro-components";
import refreshIcon from "@/assets/refresh.svg";

import "./index.scss";

const FloatButtonView: FC = () => {
  const [circleShape, { toggle: toggleCircleShape }] = useToggle(true);
  const [visiable, { toggle: toggleVisiable }] = useToggle(true);
  const [colorIndex, { inc: incColorIndex }] = useCounter(0);
  const colorList = ["#008cff", "#6600ff", "#a100ff", "#ff9100"];
  const [sizeIndex, { inc: incSizeIndex }] = useCounter(0);
  const sizeList = ["small", "default", "large"] as const;
  return (
    <View className="float-button-view">
      {/* 提供控制原件 */}
      <MoeButton onClick={toggleCircleShape}>切换圆/方形</MoeButton>
      <MoeButton onClick={incColorIndex}>修改颜色</MoeButton>
      <MoeButton onClick={incSizeIndex}>修改大小</MoeButton>
      <MoeButton onClick={toggleVisiable}>切换是否显示</MoeButton>
      <MoeFloatButton
        shape={circleShape ? "circle" : "square"}
        backgroundColor={colorList[colorIndex % colorList.length]}
        size={sizeList[sizeIndex % sizeList.length]}
        visible={visiable}
        icon={
          <Image
            src={refreshIcon}
            style={{
              width: "55%",
              height: "55%",
            }}
          />
        }
      ></MoeFloatButton>
    </View>
  );
};

export default FloatButtonView;
