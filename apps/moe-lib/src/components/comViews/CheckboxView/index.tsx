import { FC } from "react";
import { View } from "@tarojs/components";
import { MoeCell, MoeCheckbox } from "@fumoe/taro-components";
import Taro from "@tarojs/taro";

const CheckboxView: FC = () => {
  return (
    <View>
      <MoeCell title="基础使用" />
      <View
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20rpx 0",
          gap: "20rpx",
        }}
      >
        <MoeCheckbox>复选框</MoeCheckbox>
        <MoeCheckbox shape="round" />
      </View>
      <MoeCell title="结合单元格" label={<MoeCheckbox />}></MoeCell>
      <MoeCell
        title="禁用状态"
        label={<MoeCheckbox disabled checked />}
      ></MoeCell>
      <MoeCell
        title="自定义颜色"
        label={
          <MoeCheckbox
            checked
            activeBackgroundColor="#ff9a3c"
            onChange={async (value) => {
              await Taro.showToast({
                title: value ? "开启" : "关闭",
              });
            }}
          />
        }
      ></MoeCell>
    </View>
  );
};

export default CheckboxView;
