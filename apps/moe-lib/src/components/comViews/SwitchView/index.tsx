import { Slider } from "@tarojs/components";
import { MoeCell, MoeSwitch } from "@fumoe/taro-components";
import { useToggle } from "@fumoe/taro-hooks";
import { useState } from "react";

const SwitchView = () => {
  const [value, { set: setValue }] = useToggle(false);
  const [size, setSize] = useState(20);
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <MoeCell title="开关状态">{value ? "true" : "false"}</MoeCell>
      <MoeCell title="尝试切换">
        <MoeSwitch
          value={value}
          onChange={setValue}
          size={size}
          disabled={disabled}
        />
      </MoeCell>
      <MoeCell title="加载状态">
        <MoeSwitch
          value={value}
          onChange={setValue}
          size={size}
          disabled={disabled}
          loading
        />
      </MoeCell>
      <MoeCell title="加载状态 动画2">
        <MoeSwitch
          value={value}
          onChange={setValue}
          size={size}
          disabled={disabled}
          loading
          loadingType="spinner"
        />
      </MoeCell>
      <MoeCell title="自定义颜色">
        <MoeSwitch
          value={value}
          onChange={setValue}
          size={size}
          disabled={disabled}
          activeBackgroundColor={"#e8ac18"}
        />
      </MoeCell>
      <MoeCell title="不同大小">
        <Slider
          style={{
            width: "100%",
          }}
          min={20}
          max={60}
          value={size}
          onChanging={(e) => {
            setSize(e.detail.value);
          }}
        />
      </MoeCell>
      <MoeCell title="是否禁用">
        <MoeSwitch
          value={disabled}
          onChange={(value: boolean) => {
            setDisabled(value);
          }}
        />
      </MoeCell>
    </>
  );
};

export default SwitchView;
