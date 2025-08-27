import { FC } from "react";
import { View } from "@tarojs/components";
import { MoeCell, MoeRadio } from "@fumoe/taro-components";
import { MoeTypography } from "@fumoe/taro-components";

const { Title } = MoeTypography;

const RadioView: FC = () => {
  return (
    <View>
      <MoeRadio.Group
        defaultValue="1"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          margin: "30px 0",
        }}
      >
        <MoeRadio value="1"></MoeRadio>
        <MoeRadio value="2"></MoeRadio>
        <MoeRadio shape="round" value="3"></MoeRadio>
        <MoeRadio shape="round" value="4" disabled></MoeRadio>
        <MoeRadio shape="round" value="5"></MoeRadio>
      </MoeRadio.Group>

      <Title level={3}>结合单元格使用</Title>
      <MoeRadio.Group>
        <MoeCell title="选项1">
          <MoeRadio value={"1"} />
        </MoeCell>
        <MoeCell title="选项2">
          <MoeRadio value={"2"} />
        </MoeCell>
        <MoeCell title="选项3">
          <MoeRadio value={"3"} />
        </MoeCell>
      </MoeRadio.Group>
    </View>
  );
};

export default RadioView;
