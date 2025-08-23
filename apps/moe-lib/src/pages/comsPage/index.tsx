import { useRouter } from "@tarojs/taro";
import { useEffect, useState } from "react";
import { View } from "@tarojs/components";
import { MoeHeader } from "@fumoe/taro-components";

import ButtonView from "@/components/normalComs/ButtonView";
import FloatButtonView from "@/components/normalComs/FloatButtonView";

import "./index.scss";

// 定义映射列表
const componentMap = {
  MoeButton: <ButtonView />,
  MoeFloatButton: <FloatButtonView />,
};

const Index = () => {
  const [showId, setShowId] = useState("");
  const router = useRouter();

  // 进入页面 判断当前的路由参数
  useEffect(() => {
    if (router.params.id) {
      setShowId(router.params.id);
    }
  }, [router.params.id]);

  return (
    <View>
      <MoeHeader back backgroundColor="#FFFFFF">
        {showId}
      </MoeHeader>
      {/* 渲染对应的列表就行 */}
      {componentMap[showId]}
    </View>
  );
};

export default Index;
