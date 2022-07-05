import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/images/logo.png"

const Navbar = () => {
    const [show, setShow] = useState(false)
  return (
    <div>
    <div className='py-5 px-10 border-b'>
        <div className='hidden md:block'>
            <div className='flex'>
                <Link to="/">
                    <img className='w-12 h-12' src={logo} />
                </Link>
                <ul className='ml-10 flex items-center justify-center space-x-10 text-lg hover:text-[#001d3d] text-[#003566] duration-500 font-medium'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to='/faq'>FAQ</Link>
                    </li>
                    <li>
                        <Link to="/login">Feed</Link>
                    </li>
                </ul>
                <div className='absolute right-10 space-x-4'>
                    <Link to="/login"><button className='w-40 md:w-44 py-3 -mt-2 rounded-md bg-[#003566] hover:bg-[#001d3d] duration-500 text-white font-bold'>Login</button></Link>
                    <Link to="/signup"><button className='w-40 md:w-44 py-3 -mt-2 rounded-md border border-[#003566] hover:bg-[#003566] duration-500 hover:text-white text-[#003566] font-bold'>Signup</button></Link>
                </div>
            </div>
        </div>
        <div className='md:hidden'>
            <div className='flex'>
                <Link to="/">
                    <img className='w-12 h-12' src={logo} />
                </Link>
                <div className='absolute right-10 top-6'>
                    <svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" className={`${show ? "block" : "hidden"} hover:cursor-pointer h-8 w-8`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    <svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" className={`${show ? "hidden" : "block"} hover:cursor-pointer h-8 w-8`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                </div>
            </div>
        </div>
    </div>
    <div className='md:hidden'>
        <div className={`h-screen text-center space-y-10 text-xl my-20 ${show ? "block" : "hidden"}`}>
            <li onClick={() => setShow(!show)}>
                <Link to="/">Home</Link>
            </li>
            <li onClick={() => setShow(!show)}>
                <Link to='/faq'>FAQ</Link>
            </li>
            <li onClick={() => setShow(!show)}>
                <Link to="/login">Feed</Link>
            </li>
            <div onClick={() => setShow(!show)}>
                <Link to="/login"><button className='w-40 md:w-44 py-3 -mt-2 rounded-md bg-[#003566] hover:bg-[#001d3d] duration-500 text-white font-bold'>Login</button></Link>
            </div>
            <div onClick={() => setShow(!show)}>
                <Link to="/signup"><button className='w-40 md:w-44 py-3 -mt-2 rounded-md border border-[#003566] hover:bg-[#003566] duration-500 hover:text-white text-[#003566] font-bold'>Signup</button></Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar