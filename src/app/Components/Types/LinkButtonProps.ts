import DefaultButtonProps from "./DefaultButtonProps";

export interface LinkButtonProps extends DefaultButtonProps {
    href:string,
    onClick? :()=>void,
    buttonHeight: number,
    buttonWidth: number
}
