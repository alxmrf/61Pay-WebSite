import LinkButton from './Components/LinkButton';
export default function LandingPage(){
    return(
        <>
            <div className=" flex mt-[150px] mr-[50px] justify-center gap-44 h-[100px]">
                <div className=" flex flex-col justify-center w-[800px] items-center">
                    <h1 className="text-black text-5xl mb-10">Comece a Lucrar agora com a 61Pay</h1>
                    <p className="text-black">Taxas 50% menores que os concorrentes. Sem burocracia, aluguel ou meta de faturamento.</p>
                </div>
                <LinkButton className='bg-blue-700 hover:bg-blue-500 text-white font-bold w-60 ' href='./Planos' message='Comprar maquininha' buttonHeight={100} buttonWidth={200}/>
            </div>
            <div className="flex mt-[300px] mr-[50px] justify-center gap-44 h-[100px]">
                <div className=" flex flex-col justify-center w-[800px] items-center">
                    <h1 className="text-black text-5xl mb-10">Venha conhecer nossas taxas</h1>
                </div>
                <LinkButton className='bg-blue-700 hover:bg-blue-500 text-white font-bold w-60' href='./Taxas' message='Taxas' buttonHeight={100} buttonWidth={200}/>
            </div>

        
        </>
    )
}