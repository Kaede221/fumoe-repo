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
      <MoeBackdrop show={show} onClose={toggleShow} closeable />
      <MoeButton onClick={toggleShow2}>内嵌内容</MoeButton>
      <MoeBackdrop show={show2} onClose={toggleShow2} closeable>
        <View
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "300rpx",
              height: "300rpx",
              backgroundColor: "#FFFFFF",
              borderRadius: "30rpx",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            This Is A Pannel
          </View>
        </View>
      </MoeBackdrop>
    </View>
  );
};

export default BackdropView;
