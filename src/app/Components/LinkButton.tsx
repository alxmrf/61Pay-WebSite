import DefaultButton from "./DefaultButton"
import Link from "next/link";
import { LinkButtonProps } from "./Types/LinkButtonProps";
import clsx from 'clsx';




export default function LinkButton({className,message,onClick,href, buttonHeight,buttonWidth}:LinkButtonProps){

    const stringHeight = buttonHeight.toString()
    const stringWidth = buttonWidth.toString()


    const divHeight = 'h-[' + stringHeight + 'px]'
    const divWidth = 'w-[' + stringWidth+ 'px]'
    
    console.log(divHeight , divWidth)

    return(
        <>
            <div style ={{ height: `${buttonHeight}px`, width: `${buttonWidth}px` }}>
                <Link href={href} className="w-full h-full">
                    <DefaultButton className = {clsx("w-full h-full",className)} message = {message} onClick={onClick}></DefaultButton>
                </Link>
            </div>
        </>
    )
}