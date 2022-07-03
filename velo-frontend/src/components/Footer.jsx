import React from 'react'
import logo from "../assets/images/footer.png"

const Footer = () => {
  return (
    <div className='bg-[#003566]'>
        <div className='px-5'>
            <img className='w-12 py-5' src={logo} />
            <div className='border-t border-t-gray-200 py-4'>
                <p className='text-gray-100'>Copyright 2022 Velo by Team Velo ❤️</p>
                <p className='text-gray-100'>GenzTechies Hackathon 🚀</p>
            </div>
        </div>
    </div>
  )
}

export default Footer