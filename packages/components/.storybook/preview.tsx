import {
  defineCustomElements,
  applyPolyfills,
} from "@tarojs/components/loader";
// @ts-ignore
import Taro from "@tarojs/taro";
import "@tarojs/components/dist/taro-components/taro-components.css";
// @ts-ignore
import React from "react";

export const decorators = [
  (Story) => {
    applyPolyfills().then(function () {
      defineCustomElements(window);
    });

    Taro.initPxTransform({
      designWidth: 750,
      deviceRatio: {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2,
      },
    });
    return <Story />;
  },
];

//设置全局的配置
export const parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};
