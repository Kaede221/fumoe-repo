/// <reference path="node_modules/@tarojs/taro/types/index.d.ts" />

declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV:
    | "weapp"
    | "swan"
    | "alipay"
    | "h5"
    | "rn"
    | "tt"
    | "quickapp"
    | "qq"
    | "jd";
  }
}
