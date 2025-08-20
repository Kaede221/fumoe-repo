/// <reference types="@tarojs/taro" />
/// <reference types="react" />

// Taro 相关类型增强
declare namespace Taro {
  interface GeneralCallbackResult {
    errMsg: string;
  }
}

// NodeJS 环境变量
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV?: 'development' | 'production' | 'test';
    TARO_ENV?: 'weapp' | 'h5' | 'rn' | 'tt' | 'qq' | 'jd' | 'swan' | 'alipay';
  }
}