import React from "react"
import SlideComponent from "./SlideComponent"

function SlideBar() {
    return(
        <>
            <div className="bg-gray-700 w-96 h-screen">
                <h3>SlideBar</h3>
                <ul>
                    <li className="">
                    <SlideComponent infoComponent = "Componente Numero 1"/>
                    </li>
                    <li>
                        <SlideComponent infoComponent = "Componente Numero 2"/>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SlideBar