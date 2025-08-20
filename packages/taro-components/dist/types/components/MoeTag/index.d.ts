import { FC } from "react";
import "./index.scss";
export interface IMoeTag {
    /** tag文本 */
    label: string;
    /** tag的左侧图标路径 */
    icon?: string;
    /** 标签主色调 (文本, 边框) */
    mainColor?: string;
    /** 标签背景色 (背景) */
    backgroundColor?: string;
    /** 点击事件 */
    onClick?: () => {};
}
/**
 * 通用标签组件
 * @param label 标签文本
 * @param icon tag的左侧图标路径
 * @param mainColor 标签主色调 (文本, 边框)
 * @param backgroundColor 标签背景色 (背景)
 * @param onClick 点击事件 (已阻止冒泡)
 * @author Kaede221
 * @email kaedeshimizu@qq.com
 */
declare const MoeTag: FC<IMoeTag>;
export default MoeTag;
