import { useState } from "react";

interface CounterActions {
  /**
   * 将计数器值增加 1
   * 如果设置了 max 且当前值已达最大值，则不会增加
   */
  inc: () => void;

  /**
   * 将计数器值减少 1
   * 如果设置了 min 且当前值已达最小值，则不会减少
   */
  dec: () => void;

  /**
   * 设置计数器为指定值
   * 如果设置了边界限制，值会被自动调整到有效范围内
   * @param newValue - 要设置的新值
   */
  set: (newValue: number) => void;

  /**
   * 将计数器重置为初始值
   * 如果初始值超出边界限制，会被调整到有效范围内
   */
  reset: () => void;
}

/**
 * 管理计数器的 Hook，提供计数器的基本操作和边界限制
 *
 * @template TOptions - 选项配置类型
 * @param {number} initValue - 计数器的初始值
 * @param {Object} [options] - 可选配置项
 * @param {number} [options.min] - 计数器的最小值限制
 * @param {number} [options.max] - 计数器的最大值限制
 *
 * @returns {[number, CounterActions]} 返回一个包含当前计数器和操作方法的元组
 * @returns {number} returns[0] - 当前计数器的值
 * @returns {CounterActions} returns[1] - 计数器操作方法集合
 *
 * @description
 * 这是一个功能完整的计数器 Hook，支持设置最小值和最大值限制。
 * 当设置了 min 或 max 时，初始值会被自动调整到有效范围内。
 * 所有操作（inc、dec、set、reset）都会自动处理边界检查。
 *
 * @example
 * // 基础使用
 * const [count, { inc, dec, set, reset }] = useCounter(0);
 *
 * @example
 * // 带边界限制的使用
 * const [count, { inc, dec, set, reset }] = useCounter(10, {
 *   min: 0,
 *   max: 100
 * });
 *
 * @example
 * // 在组件中的实际使用
 * function CounterComponent() {
 *   const [count, { inc, dec, set, reset }] = useCounter(0, { min: 0, max: 10 });
 *
 *   return (
 *     <div>
 *       <p>当前计数: {count}</p>
 *       <button onClick={inc}>增加</button>
 *       <button onClick={dec}>减少</button>
 *       <button onClick={() => set(5)}>设为5</button>
 *       <button onClick={reset}>重置</button>
 *     </div>
 *   );
 * }
 *
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 *
 * @interface CounterActions
 */
const useCounter = (
  initValue: number,
  options?: { min?: number; max?: number },
): [number, CounterActions] => {
  // 边界值验证和修正
  const getBoundedValue = (value: number): number => {
    if (isNaN(value) || !isFinite(value)) {
      return 0;
    }

    let boundedValue = value;

    // 确保 min <= max
    if (
      options?.min !== undefined &&
      options?.max !== undefined &&
      options.min > options.max
    ) {
      console.warn("useCounter: min 值不能大于 max 值，将交换两者");
      [options.min, options.max] = [options.max, options.min];
    }

    if (options?.max !== undefined && boundedValue > options.max) {
      boundedValue = options.max;
    }
    if (options?.min !== undefined && boundedValue < options.min) {
      boundedValue = options.min;
    }

    return boundedValue;
  };

  const [counter, setCounter] = useState(getBoundedValue(initValue));

  const inc = () => {
    setCounter((prevState) => {
      const newValue = prevState + 1;
      if (options?.max !== undefined && newValue > options.max) {
        return prevState; // 已达最大值，不增加
      }
      return newValue;
    });
  };

  const dec = () => {
    setCounter((prevState) => {
      const newValue = prevState - 1;
      if (options?.min !== undefined && newValue < options.min) {
        return prevState; // 已达最小值，不减少
      }
      return newValue;
    });
  };

  const set = (newValue: number) => {
    setCounter(getBoundedValue(newValue));
  };

  const reset = () => {
    setCounter(getBoundedValue(initValue));
  };

  return [
    counter,
    {
      inc,
      dec,
      set,
      reset,
    },
  ];
};

export default useCounter;

/**
 * 使用注意事项：
 * 1. 当 min 和 max 同时提供时，确保 min <= max
 * 2. 如果初始值、设置值或重置值不是有效数字，会被重置为 0
 * 3. 所有操作都是同步的，不会触发额外的渲染
 * 4. 边界检查是自动的，无需手动处理
 */
