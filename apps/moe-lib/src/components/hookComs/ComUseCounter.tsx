import { FC } from "react";
import { View } from "@tarojs/components";
import { MoeButton } from "@fumoe/taro-components";
import { useCounter } from "@fumoe/taro-hooks";

const ComUseCounter: FC = () => {
  const [value, { inc, dec, set, reset }] = useCounter(0, { min: 0, max: 10 });
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "15rpx",
      }}
    >
      <View
        style={{
          fontSize: "30rpx",
          fontWeight: "bold",
          marginTop: "20rpx",
        }}
      >
        useCounter - Value is {value}
      </View>
      <View
        style={{
          display: "flex",
          gap: "10rpx",
        }}
      >
        <MoeButton onClick={inc} size="small">
          inc
        </MoeButton>
        <MoeButton onClick={dec} size="small">
          dec
        </MoeButton>
        <MoeButton onClick={reset} size="small">
          reset
        </MoeButton>
        <MoeButton onClick={() => set(100)} size="small">
          set 100
        </MoeButton>
      </View>
    </View>
  );
};

export default ComUseCounter;
