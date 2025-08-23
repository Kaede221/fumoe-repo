import { FC } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { MoeButton, MoePicker } from "@fumoe/taro-components";
import { useToggle } from "@fumoe/taro-hooks";

import "./index.scss";

const PickerView: FC = () => {
  const [showPicker, { toggle: togglePicker, set: setShowPicker }] =
    useToggle(false);
  return (
    <View className="picker-view-test">
      <MoeButton onClick={togglePicker}>显示弹出层</MoeButton>
      <MoePicker
        open={showPicker}
        setOpen={setShowPicker}
        columns={3}
        closeable
        categories={[
          "选项 1",
          "选项 2",
          "选项 3",
          "选项 4",
          "选项 5",
          "选项 6",
          "选项 7",
          "选项 8",
          "选项 9",
          "选项 10",
        ]}
        onConfirm={async (res) => {
          await Taro.showToast({
            title: res,
          });
        }}
      />
    </View>
  );
};

export default PickerView;
