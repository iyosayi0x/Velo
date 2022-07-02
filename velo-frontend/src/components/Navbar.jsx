import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({href}) => {
  return (
    <div className='py-9 px-10 border-b'>
        <div className='flex'>
            <div>
                <img />
            </div>
            <div>
                <ul className='flex space-x-10 text-lg hover:text-[#001d3d] text-[#003566] duration-500 font-medium'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a className='hover:cursor-pointer' href={href}>FAQ</a>
                    </li>
                    <li>
                        <Link to="/">Feed</Link>
                    </li>
                </ul>
            </div>
            <div className='absolute right-10 space-x-4'>
                <Link to="/login"><button className='w-40 md:w-44 py-3 -mt-2 rounded-md bg-[#003566] hover:bg-[#001d3d] duration-500 text-white font-bold'>Login</button></Link>
                <Link to="/signup"><button className='w-40 md:w-44 py-3 -mt-2 rounded-md border border-[#003566] hover:bg-[#003566] duration-500 hover:text-white text-[#003566] font-bold'>Signup</button></Link>
            </div>
        </div>
    
    </div>
  )
}

export default Navbar