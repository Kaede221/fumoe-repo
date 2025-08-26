import { FC } from "react";
import { View } from "@tarojs/components";
import { MoeButton } from "@fumoe/taro-components";
import { useToggle } from "@fumoe/taro-hooks";

const Index: FC = () => {
  const [value, { toggle, set }] = useToggle(false);
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
        useToggle - Value is {value ? "true" : "false"}
      </View>
      <View
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <MoeButton onClick={toggle} size="small">
          toggle
        </MoeButton>
        <MoeButton onClick={() => set(true)} size="small">
          setTrue
        </MoeButton>
      </View>
    </View>
  );
};

export default Index;
