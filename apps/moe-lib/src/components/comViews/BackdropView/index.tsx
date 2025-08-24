import { FC } from "react";
import { View } from "@tarojs/components";
import { useToggle } from "@fumoe/taro-hooks";
import { MoeButton, MoeBackdrop } from "@fumoe/taro-components";

const BackdropView: FC = () => {
  const [show, { toggle: toggleShow }] = useToggle(false);
  const [show2, { toggle: toggleShow2 }] = useToggle(false);
  return (
    <View>
      <MoeButton onClick={toggleShow}>普通显示</MoeButton>
      <MoeBackdrop show={show} setShow={toggleShow} closeable />
      <MoeButton onClick={toggleShow2}>内嵌内容</MoeButton>
      <MoeBackdrop show={show2} setShow={toggleShow2} closeable>
        <View
          style={{
            width: "300rpx",
            height: "300rpx",
            backgroundColor: "#FFFFFF",
            borderRadius: "30rpx",
          }}
        >
          This Is A Pannel
        </View>
      </MoeBackdrop>
    </View>
  );
};

export default BackdropView;
