import React from "react";
import "@taroify/core/popup/style";
import "@taroify/core/safe-area/style";
import "./index.scss";
export interface IMoePicker {
    /** 弹出层的标题, 默认 `选择分类` */
    title?: string;
    /** 显示的列数, 默认 `2` */
    columns?: number;
    /** 弹出层是否显示 */
    open: boolean;
    /** 分类字符串的列表 */
    categories: string[];
    /** 确认后的回调函数, 默认传入选择的内容字符串 */
    onConfirm: (selected: string) => void;
    /** 关闭的回调函数 */
    onClose: () => void;
    /** 默认的分类项, 应当在列表中出现 */
    defaultCategory?: string;
}
/**
 * 自定义弹出层选择器
 * @param title 弹出层的标题, 默认 `选择分类`
 * @param columns 显示的列数, 默认 `2`
 * @param open 弹出层是否显示
 * @param categories 分类字符串的列表
 * @param onConfirm 确认后的回调函数, 默认传入选择的内容字符串
 * @param onClose 关闭的回调函数
 * @param defaultCategory 默认的分类项, 应当在列表中出现
 * @example
 * <MoePicker
 *   open={showModel}
 *   categories={["1", "2", "3"]}
 *   onConfirm={(e) => {
 *     console.log(e);
 *   }}
 *   onClose={() => setShowModel(false)}
 * />
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 */
declare const MoePicker: React.FC<IMoePicker>;
export default MoePicker;
