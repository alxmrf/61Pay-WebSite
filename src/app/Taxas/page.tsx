import TaxasText from '../Components/TaxasText';
import Image from 'next/image';
export default function Taxas(){
    return(
        <>
            <div className="mt-[30px] justify-center flex flex-col">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-black text-3xl">Confira nossas taxas lideres de mercado</h1>
                    <p className="text-black">Taxas unicas</p>
                </div>
                <div className=" flex justify-center mt-3 gap-6">
                <div className="w-[400px] border border-black rounded flex flex-col">
                        <div className='flex justify-center w-full gap-3'>
                            <Image src="/HiperCard-Logo.png" alt='' width={50} height={50}></Image>
                            <Image src="/Elo-Logo.png" alt='' width={50} height={50}></Image>
                            <Image src="/AmericanExpress-Logo.png" alt='' width={50} height={50}></Image>
                        </div>
                        <div  className='w-full mt-5 flex items-center gap-20 mb-5 justify-center'>
                            <div className=' flex flex-col items-center'>
                                <p className='text-xl font-bold'>Debito</p>
                                <p className='text-sm'>taxa: 1,39%</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-xl font-bold'>Credito</p>
                                <p className='text-sm'>taxa: 2,96%</p>
                            </div>
                        </div>

                        <TaxasText quantidadeParcelamento="1x" valorTaxa="%" ClassName='bg-slate-200'/>
                        <TaxasText quantidadeParcelamento="2x" valorTaxa="%"/>
                        <TaxasText quantidadeParcelamento="3x" valorTaxa="%"ClassName='bg-slate-200'/>
                        <TaxasText quantidadeParcelamento="4x" valorTaxa="%"/>
                        <TaxasText quantidadeParcelamento="5x" valorTaxa="%"ClassName='bg-slate-200'/>
                        <TaxasText quantidadeParcelamento="6x" valorTaxa="%"/>
                        <TaxasText quantidadeParcelamento="7x" valorTaxa="%"ClassName='bg-slate-200'/>
                        <TaxasText quantidadeParcelamento="8x" valorTaxa="%"/>
                        <TaxasText quantidadeParcelamento="9x" valorTaxa="%"ClassName='bg-slate-200'/>
                        <TaxasText quantidadeParcelamento="10x" valorTaxa="%"/>
                        <TaxasText quantidadeParcelamento="11x" valorTaxa="%"ClassName='bg-slate-200'/>
                        <TaxasText quantidadeParcelamento="12x" valorTaxa="%"/>
                        <TaxasText quantidadeParcelamento="13x" valorTaxa="%"ClassName='bg-slate-200'/>
                        <TaxasText quantidadeParcelamento="14x" valorTaxa="%"/>
                        <TaxasText quantidadeParcelamento="15x" valorTaxa="%"ClassName='bg-slate-200'/>
                        <TaxasText quantidadeParcelamento="16x" valorTaxa="%"/>
                        <TaxasText quantidadeParcelamento="17x" valorTaxa="%"ClassName='bg-slate-200'/>
                        <TaxasText quantidadeParcelamento="18x" valorTaxa="%"/>

                    </div>
                    <div className="w-[400px] border border-black rounded flex flex-col">
                        <div className='flex justify-center w-full gap-3'>
                            <Image src="/Visa-Logo.png" alt='' width={50} height={50}></Image>
                            <Image src="/Mastercard-Logo.png" alt='' width={50} height={50}></Image>
                        </div>
                        <div  className='w-full mt-5 flex items-center gap-20 mb-5 justify-center'>
                            <div className=' flex flex-col items-center'>
                                <p className='text-xl font-bold'>Debito</p>
                                <p className='text-sm'>taxa: 1,39%</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-xl font-bold'>Credito</p>
                                <p className='text-sm'>taxa: 2,96%</p>
                            </div>
                        </div>

                        <TaxasText quantidadeParcelamento="1x" valorTaxa="%" ClassName='bg-slate-200'/>
                        <TaxasText quantidadeParcelamento="2x" valorTaxa="%"/>
                        <TaxasText quantidadeParcelamento="3x" valorTaxa="%"ClassName='bg-slate-200'/>
                        <TaxasText quantidadeParcelamento="4x" valorTaxa="%"/>
                        <TaxasText quantidadeParcelamento="5x" valorTaxa="%"ClassName='bg-slate-200'/>
                        <TaxasText quantidadeParcelamento="6x" valorTaxa="%"/>
                        <TaxasText quantidadeParcelamento="7x" valorTaxa="%"ClassName='bg-slate-200'/>
                        <TaxasText quantidadeParcelamento="8x" valorTaxa="%"/>
                        <TaxasText quantidadeParcelamento="9x" valorTaxa="%"ClassName='bg-slate-200'/>
                        <TaxasText quantidadeParcelamento="10x" valorTaxa="%"/>
                        <TaxasText quantidadeParcelamento="11x" valorTaxa="%"ClassName='bg-slate-200'/>
                        <TaxasText quantidadeParcelamento="12x" valorTaxa="%"/>
                        <TaxasText quantidadeParcelamento="13x" valorTaxa="%"ClassName='bg-slate-200'/>
                        <TaxasText quantidadeParcelamento="14x" valorTaxa="%"/>
                        <TaxasText quantidadeParcelamento="15x" valorTaxa="%"ClassName='bg-slate-200'/>
                        <TaxasText quantidadeParcelamento="16x" valorTaxa="%"/>
                        <TaxasText quantidadeParcelamento="17x" valorTaxa="%"ClassName='bg-slate-200'/>
                        <TaxasText quantidadeParcelamento="18x" valorTaxa="%"/>

                    </div>
                </div>
            </div>
        </>
    )
}