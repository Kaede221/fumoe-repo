import {DependencyList, EffectCallback, useEffect, useState} from "react";

/**
 * 一个忽略首次执行的 useEffect 变体，只在依赖项更新时执行副作用函数
 *
 * @param {EffectCallback} effect - 要执行的副作用函数，可以返回一个清理函数
 * @param {DependencyList} [deps] - 依赖项数组，当依赖项发生变化时重新执行 effect
 *
 * @description
 * 这个 Hook 的行为类似于 React 的 useEffect，但有一个重要区别：它会跳过首次渲染时的执行，
 * 只在依赖项发生变化时才执行副作用函数。这在很多场景下非常有用，比如：
 *
 * - 避免组件首次挂载时的不必要操作
 * - 只在数据更新时触发某些逻辑
 * - 避免初始化时的重复计算
 * - 优化性能，减少不必要的副作用
 *
 * 与 useEffect 的区别：
 * - useEffect: 首次渲染 + 依赖更新时都会执行
 * - useUpdateEffect: 仅依赖更新时执行，跳过首次渲染
 *
 * @example
 * // 基础使用 - 只在 count 更新时执行，跳过首次渲染
 * const [count, setCount] = useState(0);
 * useUpdateEffect(() => {
 *   console.log('Count updated:', count);
 *   // 这里不会打印初始值 0，只在后续更新时执行
 * }, [count]);
 *
 * @example
 * // 带清理函数的副作用
 * const [text, setText] = useState('');
 * useUpdateEffect(() => {
 *   const timer = setTimeout(() => {
 *     console.log('Searching for:', text);
 *   }, 500);
 *
 *   return () => {
 *     clearTimeout(timer); // 清理函数
 *   };
 * }, [text]);
 *
 * @example
 * // 数据获取 - 只在参数变化时获取，跳过首次挂载
 * const [userId, setUserId] = useState(1);
 * const [user, setUser] = useState(null);
 *
 * useUpdateEffect(() => {
 *   fetchUser(userId).then(setUser);
 * }, [userId]);
 *
 * @example
 * // 表单验证 - 只在值变化时验证，跳过初始值
 * const [email, setEmail] = useState('');
 * const [isValid, setIsValid] = useState(true);
 *
 * useUpdateEffect(() => {
 *   validateEmail(email).then(setIsValid);
 * }, [email]);
 *
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 *
 * @throws {Error} 如果在非函数组件或自定义 Hook 外使用
 */
const useUpdateEffect = (
    effect: EffectCallback,
    deps: DependencyList,
): void => {
    // 使用 useState 而非 useRef，确保在 StrictMode 下也能正确工作
    const [isFirst, setIsFirst] = useState(true);

    useEffect(() => {
        // 首次渲染时跳过
        if (isFirst) {
            setIsFirst(false);
            return;
        }

        // 执行副作用函数并处理清理函数
        // 返回清理函数给 useEffect
        return effect();
    }, deps);
};

export default useUpdateEffect;

/*
 * 使用注意事项：
 * 1. 仅依赖更新时执行：此 Hook 会跳过首次渲染，只在依赖项变化时执行
 * 2. 清理函数支持：effect 可以返回清理函数，用于处理组件卸载或依赖更新时的清理工作
 * 3. 依赖数组：确保正确设置 deps 数组，避免无限循环或遗漏依赖
 * 4. 与 useEffect 的区别：明确区分两者的使用场景，不要混用
 */
