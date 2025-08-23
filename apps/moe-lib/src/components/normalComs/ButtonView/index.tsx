import React from "react";
import { View } from "@tarojs/components";
import { MoeButton } from "@fumoe/taro-components";
import Title from "@/components/Title";

const ButtonView: React.FC = () => {
  return (
    <View>
      <Title>不同颜色</Title>
      <MoeButton>测试按钮</MoeButton>
      <MoeButton color="danger">测试按钮</MoeButton>
      <MoeButton color="info">测试按钮</MoeButton>
      <MoeButton color="primary">测试按钮</MoeButton>
      <MoeButton color="success">测试按钮</MoeButton>
      <MoeButton color="warning">测试按钮</MoeButton>

      <Title>圆角</Title>
      <MoeButton rounded>圆角按钮</MoeButton>
      <MoeButton rounded color="primary">
        圆角按钮
      </MoeButton>

      <Title>不同大小</Title>
      <MoeButton size="large">大按钮</MoeButton>
      <MoeButton>普通</MoeButton>
      <MoeButton size="small">小按钮</MoeButton>
      <MoeButton size="mini">迷你按钮</MoeButton>

      <Title>镂空按钮</Title>
      <MoeButton variant="outlined">镂空按钮</MoeButton>
      <MoeButton variant="outlined" color="primary">
        镂空按钮
      </MoeButton>
      <MoeButton variant="outlined" rounded color="success">
        镂空按钮
      </MoeButton>
      <MoeButton variant="outlined" rounded color="info" size="small">
        镂空按钮
      </MoeButton>

      <Title>禁用按钮</Title>
      <MoeButton disabled>禁用按钮</MoeButton>
      <MoeButton disabled rounded>
        禁用按钮
      </MoeButton>
      <MoeButton disabled rounded color="primary" size="small">
        禁用按钮
      </MoeButton>
      <MoeButton disabled variant="outlined" color="success">
        禁用按钮
      </MoeButton>

      <Title>自定义style</Title>
      <MoeButton
        style={{
          width: "100%",
          borderRadius: "20rpx",
          background: "linear-gradient(to bottom right, blue, pink)",
          color: "white",
          fontWeight: "bold",
        }}
      >
        自定义按钮
      </MoeButton>
    </View>
  );
};

export default ButtonView;
