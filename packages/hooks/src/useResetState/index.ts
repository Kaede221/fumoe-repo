import { useState, Dispatch, SetStateAction } from "react";

/**
 * 提供重置 state 方法的 Hooks
 * @description 用法与 `React.useState` 基本一致，但额外提供了一个重置状态的方法
 * @param {T | (() => T)} initialState - 初始状态值，可以是一个值或返回值的函数
 * @returns {[T, Dispatch<SetStateAction<T>>, () => void]} - 返回一个数组，包含当前状态、设置状态的函数和重置状态的函数
 * @example
 * ```tsx
 * const [count, setCount, resetCount] = useResetState(0);
 * // 增加计数
 * setCount(prev => prev + 1);
 * // 重置计数为初始值 0
 * resetCount();
 * ```
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 */
const useResetState = <T>(
  initialState: T | (() => T),
): [T, Dispatch<SetStateAction<T>>, () => void] => {
  const [state, setState] = useState(initialState);
  const [initState] = useState(initialState);

  // 重置状态的方法
  const resetState = () => {
    setState(initState);
  };

  return [state, setState, resetState];
};

export default useResetState;
