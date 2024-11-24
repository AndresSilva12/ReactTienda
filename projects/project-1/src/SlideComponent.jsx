import React from "react"
import Button from "./Button"

function SlideComponent({infoComponent}) {
    return(
        <>
            <div className="bg-gray-300 m-4">
                <h4>{infoComponent}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequatur aliquid veniam possimus sunt.</p>
                <Button textoBtn= "buttonComponent1"/>
                <Button textoBtn= "buttonComponent2"/>
            </div>
        </>
    )
}

export default SlideComponent