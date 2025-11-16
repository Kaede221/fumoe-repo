import { useState, useLayoutEffect } from "react";
import Taro from "@tarojs/taro";

type ElementRect = { height: number } | null;
type QueryResult = ElementRect[] | null;

/**
 * 获取多个选择器对应的所有元素的总高度
 * @param selectors 选择器列表
 * @param dependences 依赖列表, 变化后会自动重新计算高度
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 */
const useLayoutHeight = (selectors: string[], dependences: any[] = []) => {
  const [height, setHeight] = useState(0);

  const selectorsKey = JSON.stringify(selectors);

  useLayoutEffect(() => {
    let isMounted = true;

    if (!selectors || selectors.length === 0) {
      setHeight(0);
      return;
    }

    try {
      const query = Taro.createSelectorQuery();

      selectors.forEach((sel) => {
        query.selectAll(sel).boundingClientRect();
      });

      query.exec((res: QueryResult[]) => {
        if (!isMounted) return;

        // 你的 reduce 逻辑非常健壮, 很好地处理了 null
        const totalHeight = res.reduce((acc, rects) => {
          const groupHeight =
            rects?.reduce((groupAcc, rect) => {
              return groupAcc + (rect?.height || 0);
            }, 0) || 0;

          return acc + groupHeight;
        }, 0);

        setHeight(totalHeight);
      });

      return () => {
        isMounted = false;
      };
    } catch (err) {
      console.error("useLayoutHeight 同步错误:", err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectorsKey, ...dependences]);

  return height;
};

export default useLayoutHeight;
