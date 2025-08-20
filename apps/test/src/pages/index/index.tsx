import { View, Text, Button } from "@tarojs/components";
import { MoeTag, MoeHeader, MoePicker } from "@fumoe/taro-components";
import { useState } from "react";
import { useNavInfo } from "@fumoe/taro-hooks";

import "./index.scss";

export default function Index() {
  const navInfo = useNavInfo();
  const [open, setOpen] = useState(false);
  return (
    <View className="index">
      <MoeHeader>首页测试2</MoeHeader>
      <Text>高度: {navInfo.appHeaderHeight}</Text>
      <MoeTag label="标签"></MoeTag>
      <Button onClick={() => setOpen(!open)}>切换显示</Button>
      <MoePicker
        closeable
        setOpen={setOpen}
        open={open}
        columns={2}
        categories={["A", "B", "C"]}
        onConfirm={(e) => {
          console.log(e);
          setOpen(false);
        }}
      ></MoePicker>
    </View>
  );
}
