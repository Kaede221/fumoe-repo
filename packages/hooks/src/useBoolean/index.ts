import { useState } from "react";

interface BooleanActions {
  /**
   * 切换布尔值状态（true ↔ false）
   * @example
   * const [state, { toggle }] = useBoolean(false);
   * // state: false → toggle() → state: true → toggle() → state: false
   */
  toggle: () => void;

  /**
   * 直接设置布尔值状态
   * @param newValue - 要设置的新布尔值
   * @example
   * const [state, { set }] = useBoolean(false);
   * set(true);  // state 变为 true
   * set(false); // state 变为 false
   */
  set: (newValue: boolean) => void;

  /**
   * 将状态设置为 true 的快捷方法
   * @example
   * const [isOpen, { setTrue }] = useBoolean(false);
   * setTrue(); // isOpen 变为 true
   */
  setTrue: () => void;

  /**
   * 将状态设置为 false 的快捷方法
   * @example
   * const [isOpen, { setFalse }] = useBoolean(true);
   * setFalse(); // isOpen 变为 false
   */
  setFalse: () => void;
}

/**
 * 用于布尔值状态管理的增强型 Hook，提供更丰富的布尔值操作方法
 * 
 * @param {boolean} defaultValue - 初始布尔值，默认为 false
 * @returns {[boolean, BooleanActions]} 返回一个包含当前布尔值和操作方法的元组
 * @returns {boolean} returns[0] - 当前的布尔值状态
 * @returns {BooleanActions} returns[1] - 状态操作方法集合
 * 
 * @description
 * 这是一个功能丰富的布尔值状态管理 Hook，相比 useToggle 提供了更多便捷的操作方法。
 * 除了基本的切换和设置功能外，还提供了直接设置为 true 或 false 的快捷方法。
 * 
 * 适用场景：
 * - 开关状态管理（显示/隐藏、启用/禁用、展开/折叠）
 * - 表单验证状态
 * - 加载状态控制
 * - 权限控制
 * - 任何需要布尔值的场景
 * 
 * @example
 * // 基础使用
 * const [isOpen, { toggle, set, setTrue, setFalse }] = useBoolean(false);
 * 
 * @example
 * // 在组件中的实际使用 - 对话框控制
 * function ModalComponent() {
 *   const [isVisible, { setTrue: openModal, setFalse: closeModal, toggle }] = useBoolean(false);
 *   
 *   return (
 *     <div>
 *       <button onClick={openModal}>打开对话框</button>
 *       <button onClick={closeModal}>关闭对话框</button>
 *       <button onClick={toggle}>切换显示状态</button>
 *       
 *       {isVisible && (
 *         <div className="modal">
 *           <h2>对话框内容</h2>
 *           <button onClick={closeModal}>关闭</button>
 *         </div>
 *       )}
 *     </div>
 *   );
 * }
 * 
 * @example
 * // 表单验证状态管理
 * const [isValid, { setTrue: validate, setFalse: invalidate }] = useBoolean(true);
 * 
 * @example
 * // 加载状态控制
 * const [isLoading, { setTrue: startLoading, setFalse: stopLoading }] = useBoolean(false);
 * 
 * @example
 * // 使用 set 进行条件设置
 * const [hasPermission, { set }] = useBoolean(false);
 * set(user.isAdmin); // 根据条件设置状态
 * 
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 * 
 * @interface BooleanActions
 */
const useBoolean = (defaultValue: boolean = false): [boolean, BooleanActions] => {
  const [value, setValue] = useState<boolean>(defaultValue);

  /**
   * 切换布尔值状态的函数
   * 将当前状态取反：true → false，false → true
   */
  const toggle = (): void => {
    setValue((prevState: boolean) => !prevState);
  };

  /**
   * 直接设置布尔值状态的函数
   * @param newValue - 要设置的新布尔值
   */
  const set = (newValue: boolean): void => {
    setValue(newValue);
  };

  /**
   * 将状态设置为 true 的快捷方法
   */
  const setTrue = (): void => {
    setValue(true);
  };

  /**
   * 将状态设置为 false 的快捷方法
   */
  const setFalse = (): void => {
    setValue(false);
  };

  return [
    value,
    {
      toggle,
      set,
      setTrue,
      setFalse,
    },
  ];
};

// 类型导出，方便在其他地方使用
export type { BooleanActions };

// 默认导出 useBoolean Hook
export default useBoolean;

/**
 * 使用注意事项：
 * 1. 适用于需要频繁操作布尔值的各种场景
 * 2. 比 useToggle 提供了更丰富的操作方法，适合复杂交互
 * 3. setTrue 和 setFalse 是快捷方法，等同于 set(true) 和 set(false)
 * 4. 所有方法都是稳定的引用，不会引起不必要的重渲染
 * 
 * 与 useToggle 的区别：
 * - useBoolean 提供更丰富的操作方法（setTrue/setFalse）
 * - useToggle 更轻量级，仅提供 toggle 和 set
 * - 根据具体需求选择使用
 * 
 * @changelog
 * - 2024-12-19: 完善 TSDoc，添加接口定义，优化代码结构
 * - 原始版本：基础的布尔值状态管理功能
 */
