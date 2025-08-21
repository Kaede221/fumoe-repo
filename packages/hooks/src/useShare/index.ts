import {
  useShareAppMessage,
  useShareTimeline,
  showShareMenu,
  useReady,
} from "@tarojs/taro";

interface IUseShare {
  title: string;
  imageUrl?: string;
  path?: string;
  query?: string;
}

/**
 * 配置当前页面分享的钩子
 * @param title 分享标题
 * @param imageUrl 分享图片
 * @param path 分享路径 (分享到聊天)
 * @param query 分享到朋友圈的场景值 (分享到朋友圈)
 */
const index = ({ title, imageUrl, path, query }: IUseShare) => {
  useShareAppMessage(() => ({
    title,
    path,
    imageUrl,
  }));

  useShareTimeline(() => ({
    title,
    query,
    imageUrl,
  }));

  useReady(async () => {
    // 进入页面的时候, 开启分享功能
    await showShareMenu({
      showShareItems: ["shareAppMessage", "shareTimeline"],
    });
  });
};

export default index;
