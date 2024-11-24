import react, { useEffect, useState } from "react";

function Calculadora(){
    const [resultado, setResultado] = useState([])
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [operacion, setOperacion] = useState('')

    const handleClick = (num) => {
        if (resultado.length > 1){
            setNum2(num)
            console.log(num2)
            setResultado([num1," ", operacion, " " , num])
        }else{
            setResultado(num)
            setNum1(num)
        }
    }

    const handleOp = (op) => {
        setOperacion(op)
        setResultado([num1," ", op])
    }

    const calcular = () => {
        let calculo = 0
        switch (operacion) {
            case '+':
                calculo = num1 + num2
                break
            case '-':
                calculo = num1 - num2
                break
            case 'x':
                calculo = num1 * num2
                break
            case '/':
                calculo = num1 / num2
                break
        }
        setResultado(calculo)
    }

    const reset = () => {
        setNum1(0)
        setNum2(0)
        setOperacion('')
        setResultado([])
    }

    useEffect(() => {
        setResultado(resultado)
        console.log("codigo a ejecutar")
    }, [resultado])

    return(
        <div>
            <div className="bg-black text-white w-96 h-8">{resultado}</div>
            <div className="grid grid-cols-3">
                <button onClick={() => {handleOp("+")}}>+</button>
                <button onClick={() => {handleOp("-")}}>-</button>
                <button onClick={() => {handleOp("x")}}>X</button>
                <button onClick={() => {handleOp("/")}}>/</button>
                <button onClick={reset}>CE</button>
                <button onClick={calcular}>=</button>
                <button onClick={()=> {handleClick(1)}}>1</button>
                <button onClick={()=> {handleClick(2)}}>2</button>
                <button onClick={()=> {handleClick(3)}}>3</button>
                <button onClick={()=> {handleClick(4)}}>4</button>
                <button onClick={()=> {handleClick(5)}}>5</button>
                <button onClick={()=> {handleClick(6)}}>6</button>
                <button onClick={()=> {handleClick(7)}}>7</button>
                <button onClick={()=> {handleClick(8)}}>8</button>
                <button onClick={()=> {handleClick(9)}}>9</button>
            </div>
        </div>
    )
}

export default Calculadora