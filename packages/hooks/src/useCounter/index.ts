import { useState } from "react";

/**
 * 管理计数器的Hook
 * @param initValue 初始值
 * @param options 可以设定min和max的限制
 * @description 如果设置了min或者max, 当初始值超过或者小于区间值时, 会自动变为对应区间值
 * @example
 * const [counter, { inc, dec, set, reset }] = useCounter(100, {
 *   min: -1,
 *   max: 2,
 * });
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 */
const useCounter = (
  initValue: number,
  options?: { min?: number; max?: number },
): [
  number,
  {
    inc: () => void;
    dec: () => void;
    set: (newValue: number) => void;
    reset: () => void;
  },
] => {
  const [counter, setCounter] = useState(
    options?.max && initValue > options.max
      ? options.max
      : options?.min && initValue < options.min
        ? options.min
        : initValue,
  );

  const inc = () => {
    if (options?.max) {
      if (counter + 1 > options.max) return;
    }
    setCounter((prevState) => prevState + 1);
  };

  const dec = () => {
    if (options?.min) {
      if (counter - 1 < options.min) return;
    }
    setCounter((prevState) => prevState - 1);
  };

  const set = (newValue: number) => {
    setCounter(
      options?.max && newValue > options.max
        ? options.max
        : options?.min && newValue < options.min
          ? options.min
          : newValue,
    );
  };

  const reset = () => {
    setCounter(
      options?.max && initValue > options.max
        ? options.max
        : options?.min && initValue < options.min
          ? options.min
          : initValue,
    );
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
