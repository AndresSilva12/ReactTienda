import { useState } from "react"
import React from "react"

function TwitterUserCard({userName, name}) {
  const [isFollow, setIsFollow] = useState(false)
  const estadoSeguimiento = isFollow ? 'Siguiendo' : 'Seguir'
  const btnClass = isFollow ? 'bg-black text-white hover:bg-red-950 hover:border-red-600' : 'bg-white text-black'

  const handleClick = () => {
    if (isFollow){
      setIsFollow(false)
    }
    else {
      setIsFollow(true)
    }
  }

  return (
    <div className='bg-gray-800 p-4 rounded flex justify-between w-96 '>
      <div className='flex'>
        <img src={`https://unavatar.io/x/${userName}`} className="bg-white rounded-full w-12 mr-4"/>
        <div className='justify-start text-start flex flex-col'>
          <h3 className='font-bold text-2xl'>{name}</h3>
          <p className='text-gray-600 text-1xl'>@{userName}</p>
        </div>
      </div>
      <button className={`${btnClass} rounded-full`} onClick={handleClick}>{estadoSeguimiento}</button>
    </div>
  )
}

export default TwitterUserCard
