import clsx from "clsx"

interface taxasTextProps{
    quantidadeParcelamento: string, 
    valorTaxa : string
    ClassName? : string
}

export default function TaxasText({quantidadeParcelamento, valorTaxa,ClassName}:taxasTextProps){
    return(
    <>
        <div className={clsx(ClassName,"flex")}>
            <div>{quantidadeParcelamento}</div>
            <div className="ml-auto">{valorTaxa}</div>
        </div>
    
    </>
    )
}