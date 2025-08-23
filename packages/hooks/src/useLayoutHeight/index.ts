import { useState, useLayoutEffect, useRef } from "react";
import Taro from "@tarojs/taro";

// 单个元素的查询结果类型
type ElementRect = { height: number } | null;
// 多个元素的查询结果类型（每个选择器可能返回多个元素）
type QueryResult = ElementRect[] | null;

/**
 * 获取多个选择器对应的所有元素的总高度
 * @param selectors 选择器列表
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 * @example
 * const scrollHeight = useLayoutHeight([
 *   ".forum-nav-bar-root",
 *   ".forum-tabs-bar",
 *   ".tabbar-container",
 * ]);
 *
 * return (
 *   <PostList
 *     theme={activeTheme}
 *     sortMethod={tabIndex}
 *     height={`calc(100vh - ${scrollHeight}px)`}
 *   />
 * )
 */
const useLayoutHeight = (selectors: string[]) => {
  const [height, setHeight] = useState(0);
  const prevSelectors = useRef<string[]>([]);

  useLayoutEffect(() => {
    // 避免选择器未变化时重复计算
    if (Object.is(selectors, prevSelectors.current)) {
      return;
    }
    prevSelectors.current = [...selectors];

    let isMounted = true;
    // 添加一个判断, 如果没有的话, 直接报错, 这个钩子就不做其他的事情了.
    try {
      const query = Taro.createSelectorQuery();

      // 关键修改：使用selectAll查询每个选择器对应的所有元素
      selectors.forEach((sel) => {
        query.selectAll(sel).boundingClientRect();
      });

      query.exec((res: QueryResult[]) => {
        if (!isMounted) return;

        // 计算总高度：先遍历每个选择器的结果数组，再累加每个元素的高度
        const totalHeight = res.reduce((acc, rects) => {
          // 处理当前选择器对应的所有元素
          const groupHeight =
            rects?.reduce((groupAcc, rect) => {
              return groupAcc + (rect?.height || 0);
            }, 0) || 0;

          return acc + groupHeight;
        }, 0);

        setHeight(totalHeight);
      });

      return () => {
        isMounted = true;
      };
    } catch (err) {
      console.error(err);
    }
  }, [selectors]);

  return height;
};

export default useLayoutHeight;
