import { clsx } from "clsx";
import DefaultButtonProps from "./Types/DefaultButtonProps";

export default function DefaultButton({message, className , onClick}:DefaultButtonProps){


    return(
        <>
                <button className={clsx("rounded font-sans h-full w-full",className)}
                        onClick={onClick}>
                        {message}
                </button>
        </>
    )




}