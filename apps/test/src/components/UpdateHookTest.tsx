import { FC } from "react";
import { useCounter, useUpdateEffect } from "@fumoe/taro-hooks";
import { Button, View } from "@tarojs/components";

const UpdateHookTest: FC = () => {
  const [counter, { inc }] = useCounter(0);

  useUpdateEffect(() => {
    console.log("我执行了", counter);
  }, [counter]);

  return (
    <View>
      <View>Update Hook Test {counter}</View>
      <Button onClick={inc}>+1</Button>
    </View>
  );
};

export default UpdateHookTest;
