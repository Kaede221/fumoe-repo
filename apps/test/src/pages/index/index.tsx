import { View, Text, Button } from "@tarojs/components";
import { MoeTag, MoeHeader, MoePicker } from "@fumoe/taro-components";
import {
  useNavInfo,
  useLayoutHeight,
  useCounter,
  useToggle,
  useBoolean,
} from "@fumoe/taro-hooks";

import "./index.scss";

export default function Index() {
  const navInfo = useNavInfo();
  const [showDialog, { toggle, set: setDialogOpen }] = useToggle(false);
  const [boolVal, { toggle: toggleBoolVal }] = useBoolean();
  const [counter, { inc, dec, set: setCounterValue, reset }] = useCounter(100, {
    min: -1,
    max: 2,
  });
  return (
    <View className="index">
      <MoeHeader>首页测试2</MoeHeader>
      <Text>高度: {navInfo.appHeaderHeight}</Text>
      <MoeTag label="标签"></MoeTag>
      <Button onClick={toggle}>切换显示</Button>
      <View
        className="test-box"
        style={{
          height: "100rpx",
          width: "100rpx",
          backgroundColor: "red",
        }}
      >
        Hello World
      </View>
      <View>测试盒子高度为: {useLayoutHeight([".test-box"])}</View>
      <View>Counter is {counter}</View>
      <Button onClick={inc}>+1</Button>
      <Button onClick={dec}>-1</Button>
      <Button onClick={() => setCounterValue(65)}>set to 65</Button>
      <Button onClick={reset}>Reset</Button>
      <View onClick={toggleBoolVal}>当前Bool: {boolVal ? "Yes" : "No"}</View>
      <MoePicker
        closeable
        setOpen={setDialogOpen}
        open={showDialog}
        columns={2}
        categories={["A", "B", "C"]}
        onConfirm={(e) => {
          console.log(e);
          toggle();
        }}
      ></MoePicker>
    </View>
  );
}
