import React, { useState } from "react"

function Button({textoBtn}){
    const [estado,setEstado] = useState(0)

    const handleClick = () => {
        setEstado(estado + 1)
    }

    const resetClick = () => {
        setEstado(0)
    }

    return(
        <>
            <div>{estado}</div>
            <button className="bg-slate-500 p-4 rounded-md font-bold" onClick={handleClick}>{textoBtn}</button>
            <button onClick={resetClick}>Reset</button>
        </>
    )
}

export default Button