import { FC } from "react";
import { View } from "@tarojs/components";
import { MoeCell } from "@fumoe/taro-components";

import icDebug from "@/assets/ic-debug.svg";

const CellView: FC = () => {
  return (
    <View>
      <MoeCell title="基础使用" />
      <MoeCell title="基础使用" label="带有内容的单元格" />
      <MoeCell title="基础使用" label="带有箭头的单元格" isLink />
      <MoeCell
        title="基础使用"
        label="带有图标的单元格"
        isLink
        icon={icDebug}
      />
      <MoeCell title="无法点击" clickable={false} />
    </View>
  );
};

export default CellView;
