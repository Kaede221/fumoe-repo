import { FC } from "react";
import { Image, View } from "@tarojs/components";
import { useCounter, useToggle } from "@fumoe/taro-hooks";
import { MoeFloatButton, MoeButton } from "@fumoe/taro-components";
import refreshIcon from "@/assets/refresh.svg";

import "./index.scss";

const FloatButtonView: FC = () => {
  const [circleShape, { toggle: toggleCircleShape }] = useToggle(true);
  const [colorIndex, { inc: incColorIndex }] = useCounter(0);
  const colorList = ["#008cff", "#6600ff", "#a100ff", "#ff9100"];
  return (
    <View className="float-button-view">
      {/* 提供控制原件 */}
      <MoeButton onClick={toggleCircleShape}>切换圆/方形</MoeButton>
      <MoeButton onClick={incColorIndex}>修改颜色</MoeButton>
      <MoeFloatButton
        shape={circleShape ? "circle" : "square"}
        backgroundColor={colorList[colorIndex % colorList.length]}
        size="small"
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
