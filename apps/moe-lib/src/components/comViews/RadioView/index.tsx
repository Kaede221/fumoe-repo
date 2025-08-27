import { FC } from "react";
import { View } from "@tarojs/components";
import { MoeRadio } from "@fumoe/taro-components";

const RadioView: FC = () => {
  return (
    <View>
      <MoeRadio.Group defaultValue="1">
        <MoeRadio value="1"></MoeRadio>
        <MoeRadio value="2"></MoeRadio>
        <MoeRadio value="3"></MoeRadio>
      </MoeRadio.Group>
    </View>
  );
};

export default RadioView;
