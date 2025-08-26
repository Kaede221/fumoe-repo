import { FC } from "react";
import { View } from "@tarojs/components";
import { MoeTypography } from "@fumoe/taro-components";

const TypographyView: FC = () => {
  return (
    <View>
      <MoeTypography.Title>大标题 H1</MoeTypography.Title>
      <MoeTypography.Title level={2}>大标题 H2</MoeTypography.Title>
      <MoeTypography.Title level={3}>大标题 H3</MoeTypography.Title>
      <MoeTypography.Title level={4}>大标题 H4</MoeTypography.Title>
      <MoeTypography.Title level={5}>大标题 H5</MoeTypography.Title>
      <MoeTypography.Title level={6}>大标题 h6</MoeTypography.Title>
    </View>
  );
};

export default TypographyView;
