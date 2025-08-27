import { FC } from "react";
import { View } from "@tarojs/components";
import { MoeCell, MoeCheckbox, MoeTypography } from "@fumoe/taro-components";
import Taro from "@tarojs/taro";

const CheckboxView: FC = () => {
  return (
    <View>
      <MoeTypography.Title level={3}>基础使用</MoeTypography.Title>
      <View
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px 0",
          gap: "20px",
        }}
      >
        <MoeCheckbox>复选框</MoeCheckbox>
        <MoeCheckbox shape="round" />
      </View>
      <MoeCell title="结合单元格">
        <MoeCheckbox />
      </MoeCell>
      <MoeCell title="禁用状态">
        <MoeCheckbox disabled checked />
      </MoeCell>
      <MoeCell title="自定义颜色">
        <MoeCheckbox
          defaultChecked
          activeBackgroundColor="#ff9a3c"
          onChange={async (value) => {
            await Taro.showToast({
              title: value ? "开启" : "关闭",
            });
          }}
        />
      </MoeCell>
      <MoeTypography.Title level={3}>受控模式</MoeTypography.Title>
      <MoeCell title="我无法取消选择">
        <MoeCheckbox checked={true} />
      </MoeCell>
    </View>
  );
};

export default CheckboxView;
