import { Slider } from "@tarojs/components";
import { MoeCell, MoeSwitch } from "@fumoe/taro-components";
import { useToggle } from "@fumoe/taro-hooks";
import { useState } from "react";

const SwitchView = () => {
  const [value, { set: setValue }] = useToggle(false);
  const [size, setSize] = useState(40);
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <MoeCell title="开关状态" label={value ? "true" : "false"}></MoeCell>
      <MoeCell
        title="尝试切换"
        label={
          <MoeSwitch
            value={value}
            onChange={setValue}
            size={size}
            disabled={disabled}
          />
        }
      />
      <MoeCell
        title="自定义颜色"
        label={
          <MoeSwitch
            value={value}
            onChange={setValue}
            size={size}
            disabled={disabled}
            activeBackgroundColor={"#e8ac18"}
          />
        }
      />
      <MoeCell
        title="不同大小"
        label={
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
        }
      />
      <MoeCell
        title="是否禁用"
        label={
          <MoeSwitch
            value={disabled}
            onChange={(value: boolean) => {
              setDisabled(value);
            }}
          />
        }
      ></MoeCell>
    </>
  );
};

export default SwitchView;
