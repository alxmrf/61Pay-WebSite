import ImageLinkButton from './ImageLinkButton';
import LinkButton from './LinkButton';
export default function Nav(){
    return (
        <>
        <div className=" w-screen h-30 border border-white flex items-center">
            <ImageLinkButton src='/Logo.png' width={300} height={200} href='./'/>
            <div className='ml-auto mr-20 flex gap-10'>
                <LinkButton href='./taxas' className='h-10 w-20 text-black font-bold' message='Maquininhas' buttonHeight={50} buttonWidth={100}/>
                <LinkButton href='./taxas' className='h-10 w-20 text-black font-bold' message='Taxas'buttonHeight={50} buttonWidth={100}/>
                <LinkButton href='./taxas' className='h-10 w-20 text-black font-bold' message='Sobre nós'buttonHeight={50} buttonWidth={100}/>
                <LinkButton href='./taxas' className='h-10 w-20 text-black font-bold bg-blue-600 hover:bg-blue-400' message='Entrar' buttonHeight={50} buttonWidth={100}/>
            </div>
        </div>
        </>
    )
}