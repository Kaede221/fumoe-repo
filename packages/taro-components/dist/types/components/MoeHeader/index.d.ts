import { FC, ReactNode } from "react";
import "./index.scss";
export interface IMoeHeader {
    /** 标题和返回部分图标的大小 */
    fontSize?: number;
    /** 标题是否靠左 */
    titleLeft?: boolean;
    /** 是否固定在顶部 */
    fixed?: boolean;
    /** 是否显示返回图标 */
    back?: boolean;
    /** 返回部分的图标, 支持路径字符串或者图片base64 */
    backIcon?: string;
    /** 点击返回区域的回调事件 */
    backHandler?: () => void;
    /** 背景颜色 */
    backgroundColor?: string;
    /** 层级高度 */
    zIndex?: number;
    /** 标题内部元素 */
    children?: ReactNode;
}
/**
 * 通用小程序顶部组件
 * @param fontSize 标题和返回部分图标的大小
 * @param titleLeft 标题是否靠左
 * @param fixed 是否固定在顶部
 * @param back 是否显示返回图标
 * @param backIcon 返回部分的图标, 支持路径字符串或者图片base64
 * @param backHandler 点击返回区域的回调事件
 * @param backgroundColor 背景颜色
 * @param zIndex 层级高度
 * @param children 标题内部元素
 * @example
 * <MoeHeader
 *   back
 *   backgroundColor="#FFFFFF"
 *   backHandler={handleClickEStaionIcon}
 *   fontSize={64}
 *   backIcon={iconEStation}
 * >
 *   <View className="index-title">首页</View>
 * </MoeHeader>
 * @author kaedeshimizu
 * @email kaedeshimizu@qq.com
 */
declare const MoeHeader: FC<IMoeHeader>;
export default MoeHeader;
