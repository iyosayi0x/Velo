import React from 'react'

const Tag = ({tag}) => {
  return (
    <div>
        <div className='bg-[#003566] hover:cursor-pointer hover:bg-[#001d3d] duration-500 rounded-full py-2 px-5 '>
            <p className='text-white'>{tag}</p>
        </div>
    </div>
  )
}

export default Tag