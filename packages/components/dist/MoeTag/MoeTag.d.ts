import { FC } from "react";
import "./MoeTag.scss";
export interface IMoeTag {
    label: string;
    icon?: string;
    mainColor?: string;
    backgroundColor?: string;
    onClick?: () => {};
}
declare const MoeTag: FC<IMoeTag>;
export default MoeTag;
//# sourceMappingURL=MoeTag.d.ts.map