import { FC } from "react";
import { View } from "@tarojs/components";

import iconTest from "@/assets/ic-debug.svg";

import { MoeTag, MoeCell, MoeTypography } from "@fumoe/taro-components";

const { Title } = MoeTypography;

const TagView: FC = () => {
  return (
    <View>
      <Title>自定义颜色字段</Title>
      <MoeCell
        title="default"
        label={<MoeTag label="标签" color="default" />}
      ></MoeCell>
      <MoeCell
        title="primary"
        label={<MoeTag label="标签签" color="primary" />}
      ></MoeCell>
      <MoeCell
        title="info"
        label={<MoeTag label="标签签签" color="info" />}
      ></MoeCell>
      <MoeCell
        title="warning"
        label={<MoeTag label="标签签签签" color="warning" />}
      ></MoeCell>
      <MoeCell
        title="danger"
        label={<MoeTag label="标签签签签签" color="danger" />}
      ></MoeCell>
      <MoeCell
        title="success"
        label={<MoeTag label="标签签签签签签" color="success" />}
      ></MoeCell>
      <Title>不同样式</Title>
      <MoeCell
        title="outlined"
        label={<MoeTag label="镂空效果" color="default" variant="outlined" />}
      ></MoeCell>
      <MoeCell
        title="outlined + color"
        label={<MoeTag label="镂空效果" color="success" variant="outlined" />}
      ></MoeCell>
      <Title>不同大小</Title>
      <MoeCell
        title="默认"
        label={<MoeTag label="标签" color="default" size="default" />}
      ></MoeCell>
      <MoeCell
        title="中"
        label={<MoeTag label="标签" color="default" size="medium" />}
      ></MoeCell>
      <MoeCell
        title="大"
        label={<MoeTag label="标签" color="default" size="large" />}
      ></MoeCell>

      <Title>不同形状</Title>
      <MoeCell
        title="square"
        label={
          <MoeTag label="标签" color="default" size="default" shape="square" />
        }
      ></MoeCell>
      <MoeCell
        title="rounded"
        label={
          <MoeTag label="标签" color="primary" size="large" shape="rounded" />
        }
      ></MoeCell>
      <MoeCell
        title="roundedLeft"
        label={
          <MoeTag
            label="标签"
            color="danger"
            variant="outlined"
            size="default"
            shape="roundedLeft"
          />
        }
      ></MoeCell>
      <MoeCell
        title="roundedRight"
        label={
          <MoeTag
            label="标签"
            color="success"
            size="default"
            shape="roundedRight"
          />
        }
      ></MoeCell>
      <Title>带图标</Title>
      <MoeCell
        title="default"
        label={<MoeTag label="标签" color="default" icon={iconTest} />}
      ></MoeCell>
      <MoeCell
        title="default"
        label={
          <MoeTag label="标签" size="large" color="success" icon={iconTest} />
        }
      ></MoeCell>
      <MoeCell
        title="default"
        label={<MoeTag label="标签" color="info" icon={iconTest} />}
      ></MoeCell>
    </View>
  );
};

export default TagView;
