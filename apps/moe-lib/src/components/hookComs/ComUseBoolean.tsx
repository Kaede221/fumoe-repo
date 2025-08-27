import { FC } from "react";
import { View } from "@tarojs/components";
import { MoeButton } from "@fumoe/taro-components";
import { useBoolean } from "@fumoe/taro-hooks";

const ComUseBoolean: FC = () => {
  const [value, { toggle, setTrue, setFalse }] = useBoolean(false);
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
        useBoolean - Value is {value ? "true" : "false"}
      </View>
      <View
        style={{
          display: "flex",
          gap: "10rpx",
        }}
      >
        <MoeButton onClick={toggle} size="small">
          Toggle
        </MoeButton>
        <MoeButton onClick={setTrue} size="small">
          setTrue
        </MoeButton>
        <MoeButton onClick={setFalse} size="small">
          setFalse
        </MoeButton>
      </View>
    </View>
  );
};

export default ComUseBoolean;
