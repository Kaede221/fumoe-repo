import { FC } from "react";
import { View } from "@tarojs/components";
import { MoeButton } from "@fumoe/taro-components";
import { useResetState } from "@fumoe/taro-hooks";

const Index: FC = () => {
  const [initState, setInitState, resetState] = useResetState({
    name: "Kaede",
    age: 18,
  });

  return (
    <View>
      <View>
        初始值:
        {JSON.stringify({
          name: "Kaede",
          age: 18,
        })}
      </View>
      <View>
        当前值:
        {JSON.stringify(initState)}
      </View>
      <View>
        <MoeButton
          onClick={() => {
            setInitState({ ...initState, age: initState.age + 1 });
          }}
        >
          age++
        </MoeButton>
        <MoeButton onClick={resetState}>Reset</MoeButton>
      </View>
    </View>
  );
};

export default Index;
