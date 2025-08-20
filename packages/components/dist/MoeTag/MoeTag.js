import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Image, View } from "@tarojs/components";
import "./MoeTag.scss";
const MoeTag = ({ label, icon, mainColor = "#6C4E09", backgroundColor = "#FFFAF1", onClick, }) => {
    return (_jsxs(View, { className: "common-shared-tag-lc", style: {
            borderColor: mainColor,
            backgroundColor: backgroundColor,
        }, onClick: (e) => {
            e.stopPropagation();
            if (onClick)
                onClick();
        }, children: [icon && (_jsx(Image, { src: icon, style: {
                    width: "28rpx",
                    height: "28rpx",
                } })), _jsx(View, { className: "label", style: {
                    color: mainColor,
                }, children: label })] }));
};
export default MoeTag;
