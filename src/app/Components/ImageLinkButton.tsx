import Image from "next/image";
import ImageLinkButtonProps from "./Types/ImageLinkButton";
import Link from "next/link";

export default function ImageLinkButton({src, width, height, href,}:ImageLinkButtonProps){

    return(
            <Link href ={href} className="">
                <Image src={src} width={width} height={height} alt=""/> 
            </Link>
    )
}