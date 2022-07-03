import React from 'react'
import pfp from "../assets/images/valley_landscape.png"

const IncomingChat = ({message}) => {
  return (
    <div className='flex space-x-2 relative'>
        <img className=' absolute bottom-2 w-10 h-10 rounded-full' src={pfp} />
        <div className='bg-[#003566] rounded-md w-52 md:w-96 py-2 px-5'>
            <p className='text-gray-200'> { message } </p>
        </div>
    </div>
  )
}

export default IncomingChat