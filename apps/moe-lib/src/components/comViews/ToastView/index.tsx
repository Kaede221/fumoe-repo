import { FC } from "react";
import { View } from "@tarojs/components";
import { MoeButton } from "@fumoe/taro-components";
import { useNavInfo } from "@fumoe/taro-hooks";
import Taro from "@tarojs/taro";

// 尝试实现Toast
const Toast = {
  create: () => {
    // * 获取当前页面对象
    const pages = Taro.getCurrentPages();
    const currentPage = pages[pages.length - 1];
    console.log(currentPage);
  },
};

const ToastView: FC = () => {
  const navInfo = useNavInfo();
  return (
    <View
      style={{
        width: "100%",
        height: `calc(100vh - ${navInfo.appHeaderHeight}px)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MoeButton onClick={Toast.create}>Hello</MoeButton>
    </View>
  );
};

export default ToastView;
