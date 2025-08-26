import { FC } from "react";
import { View } from "@tarojs/components";
import { MoeButton } from "@fumoe/taro-components";
import { useUpdateEffect, useCounter } from "@fumoe/taro-hooks";

const Index: FC = () => {
  const [counter, { inc }] = useCounter(0);
  useUpdateEffect(() => {
    inc();
  }, []);
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <View
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        useUpdateEffect - Value is {counter} {"\n"}
        进入页面不会自动调用 (默认 0)
      </View>
      <View
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <MoeButton onClick={inc} size="small">
          inc
        </MoeButton>
      </View>
    </View>
  );
};

export default Index;
