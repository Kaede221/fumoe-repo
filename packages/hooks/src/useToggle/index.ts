import { useState } from "react";

/**
 * 用于布尔值状态切换的 Hook，提供便捷的状态切换和设置功能
 * 
 * @param {boolean} defaultValue - 初始布尔值，默认为 false
 * @returns {[boolean, ToggleActions]} 返回一个包含当前布尔值和操作方法的元组
 * @returns {boolean} returns[0] - 当前的布尔值状态
 * @returns {ToggleActions} returns[1] - 状态操作方法集合
 * 
 * @description
 * 这是一个轻量级的布尔值状态管理 Hook，适用于开关、显示/隐藏、启用/禁用等二元状态场景。
 * 提供了两种操作方式：
 * - toggle: 切换当前状态（true ↔ false）
 * - set: 直接设置指定状态值
 * 
 * @example
 * // 基础使用 - 开关组件
 * const [isOpen, { toggle, set }] = useToggle(false);
 * 
 * @example
 * // 在组件中的实际使用
 * function ToggleButton() {
 *   const [isVisible, { toggle, set }] = useToggle(false);
 *   
 *   return (
 *     <div>
 *       <button onClick={toggle}>
 *         {isVisible ? '隐藏' : '显示'}内容
 *       </button>
 *       {isVisible && <div>这是可切换的内容</div>}
 *       
 *       <button onClick={() => set(true)}>强制显示</button>
 *       <button onClick={() => set(false)}>强制隐藏</button>
 *     </div>
 *   );
 * }
 * 
 * @example
 * // 控制对话框显示
 * const [showModal, { toggle: toggleModal, set: setModalVisible }] = useToggle(false);
 * 
 * @example
 * // 表单中的启用/禁用状态
 * const [isEnabled, { toggle: toggleEnabled }] = useToggle(true);
 * 
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 * 
 * @interface ToggleActions
 */
interface ToggleActions {
  /**
   * 切换布尔值状态（true ↔ false）
   * @example
   * const [isOpen, { toggle }] = useToggle(false);
   * // isOpen: false → toggle() → isOpen: true → toggle() → isOpen: false
   */
  toggle: () => void;

  /**
   * 直接设置布尔值状态
   * @param newValue - 要设置的新布尔值
   * @example
   * const [isOpen, { set }] = useToggle(false);
   * set(true);  // isOpen 变为 true
   * set(false); // isOpen 变为 false
   */
  set: (newValue: boolean) => void;
}

/**
 * 用于布尔值状态切换的 Hook，提供便捷的状态切换和设置功能
 * 
 * @param {boolean} defaultValue - 初始布尔值，默认为 false
 * @returns {[boolean, ToggleActions]} 返回一个包含当前布尔值和操作方法的元组
 * @returns {boolean} returns[0] - 当前的布尔值状态
 * @returns {ToggleActions} returns[1] - 状态操作方法集合
 * 
 * @description
 * 这是一个轻量级的布尔值状态管理 Hook，适用于开关、显示/隐藏、启用/禁用等二元状态场景。
 * 提供了两种操作方式：
 * - toggle: 切换当前状态（true ↔ false）
 * - set: 直接设置指定状态值
 * 
 * @example
 * // 基础使用 - 开关组件
 * const [isOpen, { toggle, set }] = useToggle(false);
 * 
 * @example
 * // 在组件中的实际使用
 * function ToggleButton() {
 *   const [isVisible, { toggle, set }] = useToggle(false);
 *   
 *   return (
 *     <div>
 *       <button onClick={toggle}>
 *         {isVisible ? '隐藏' : '显示'}内容
 *       </button>
 *       {isVisible && <div>这是可切换的内容</div>}
 *       
 *       <button onClick={() => set(true)}>强制显示</button>
 *       <button onClick={() => set(false)}>强制隐藏</button>
 *     </div>
 *   );
 * }
 * 
 * @example
 * // 控制对话框显示
 * const [showModal, { toggle: toggleModal, set: setModalVisible }] = useToggle(false);
 * 
 * @example
 * // 表单中的启用/禁用状态
 * const [isEnabled, { toggle: toggleEnabled }] = useToggle(true);
 * 
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 * 
 * @interface ToggleActions
 */
const useToggle = (defaultValue: boolean = false): [boolean, ToggleActions] => {
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

  return [value, { toggle, set }];
};

export default useToggle;
