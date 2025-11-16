import { useEffect, useRef } from "react";
import type { DependencyList } from "react";

/**
 * @name AsyncEffectCleanup
 * @description 异步 effect 返回的清理函数类型
 */
type AsyncEffectCleanup = () => void;

/**
 * @name AsyncEffectCallback
 * @description useAsyncEffect 的回调函数类型
 * 它可以返回一个 Promise，该 Promise resolve 为一个清理函数，
 * 或者 resolve 为 void。
 */
type AsyncEffectCallback = () => Promise<AsyncEffectCleanup | void>;

/**
 * 一个健壮的 useAsyncEffect Hook，允许 effect 异步执行，
 * 并且不需要调用者手动使用 useCallback。
 *
 * @param {AsyncEffectCallback} asyncEffect
 * 一个异步函数。它可以选择性地返回一个 Promise，
 * 该 Promise resolve 为一个“清理函数”。
 *
 * @param {DependencyList} [deps]
 * 依赖项数组。可选，行为与 useEffect 一致。
 */
const useAsyncEffect = (
  asyncEffect: AsyncEffectCallback,
  deps: DependencyList,
): void => {
  // 使用 ref 存储最新的 effect 回调
  const effectRef = useRef<AsyncEffectCallback>(asyncEffect);

  // 每次渲染时，更新 ref 的值
  effectRef.current = asyncEffect;

  useEffect(() => {
    let isMounted = true;

    // 明确定义清理函数的类型
    let cleanup: AsyncEffectCleanup = () => {};

    const execute = async () => {
      try {
        // 从 ref 中调用
        // 'result' 的类型被 TS 推断为 `AsyncEffectCleanup | void`
        const result = await effectRef.current();

        if (isMounted && typeof result === "function") {
          // TS 知道 'result' 现在是 `AsyncEffectCleanup`
          cleanup = result;
        } else if (!isMounted && typeof result === "function") {
          // 如果在 resolve 之前就卸载了，立即执行清理
          result();
        }
      } catch (e) {
        // 在组件挂载时才抛出错误，避免内存泄漏
        if (isMounted) {
          console.error("Error in useAsyncEffect:", e);
        }
      }
    };

    // 执行
    execute();

    // 主清理
    return () => {
      isMounted = false;
      // 在卸载时执行 effect 返回的清理函数
      cleanup();
    };

    // 依赖项
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useAsyncEffect;
