import React from 'react'
import headerimg from '../images/student4.jpg'
import chat from '../images/chat.png'
import ask from '../images/ask.png'
import select from '../images/select.png'
import social from '../images/social.png'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Home=()=>{
    return (
       <div>
       <Navbar />
        <div className="bg-[#f5f5f5] px-5 md:px-7 py-10 md:py-14 md:grid grid-cols-2 gap-4 md:min-h-[50vh]">
            <div className='md:py-20'>
                <h1 className="my-4 text-4xl font-semibold text-[#001d3d]">A Social media platform for <span className="font-bold text-[#1363DF]">University Students</span></h1>
                <p className="font-normal">A group of teenagers came together during the Genz Hackfest to build a platform which will help university students across Africa share and gain knowledge - Velo!</p>
            </div>
            <div className='my-10 md:m-0'>
                <img src={headerimg}/>
            </div>
        </div>
        <div className="px-5 md:px-7">
            <div className='py-10 '>
                <div className="text-center">
                    <h1 className="font-semibold text-xl md:text-2xl mb-1">You might ask, what can you do on Velo?</h1>
                    <p>Well, here are some features we've added! We still have more to come!</p>
                </div>
                <div className="my-10 space-y-5">
                    <div className="md:grid grid-cols-2 gap-4 mx-12 p-7 text-center border md:border-0 rounded-lg">
                        <div>
                            <img className='w-52 mx-auto py-4' src={chat} />
                        </div>
                        <div className='md:my-10'>
                            <h1 className="font-medium text-lg md:text-[20px]">Chat with other students 💬</h1>
                            <p>We have added a feature that allows you to chat with your fellow students!</p>
                        </div>
                    </div>
                    <div className="md:grid grid-cols-2 gap-4 mx-12 p-7 text-center border md:border-0 rounded-lg">
                        <div className='md:my-10'>
                            <h1 className="font-medium text-lg md:text-[20px]">Ask and answer questions 🙋🏽‍♀️</h1>
                            <p>With our double tab feature, you can ask and answer questions from students all over Africa.</p>
                        </div>
                        <div>
                            <img className='w-52 mx-auto py-4' src={ask} />
                        </div>
                    </div>
                    <div className="md:grid grid-cols-2 gap-4 mx-12 p-7 text-center border md:border-0 rounded-lg">
                        <div>
                            <img className='w-52 mx-auto my-4' src={select} />
                        </div>
                        <div className='md:my-10'>
                            <h1 className="font-medium text-lg md:text-[20px]">Follow topics that interest you</h1>
                            <p>Upon signup, you can select topics that you have interest in, and can view and ask questions based on that topic.</p>
                        </div>
                    </div>
                    <div className="md:grid grid-cols-2 gap-4 mx-12 p-7 text-center border md:border-0 rounded-lg">
                        <div className='md:my-10'>
                            <h1 className="font-medium text-lg md:text-[20px]">We are basically a social media platform, but for students!</h1>
                        </div>
                        <div>
                            <img className='w-52 mx-auto my-4' src={social} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <div className='text-center space-y-4'>
                    <h1 className='my-10 font-semibold text-lg md:text-xl'>Get started in 3 easy steps</h1>
                    <div className='md:grid grid-cols-3 gap-8 space-y-8 md:space-y-0'>
                        <div className='bg-[#f5f5f5] rounded-lg p-7 md:m-0 mx-20 md:h-40'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="#001d3d" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                            <p className='font-bold text-lg my-2'>Sign up 😁</p>
                        </div>
                        <div className='bg-[#f5f5f5] rounded-lg p-7 md:m-0 mx-20 md:h-40'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
                            <p className='font-bold text-lg my-2'>Select topics you love ❤️</p>
                        </div>
                        <div className='bg-[#f5f5f5] rounded-lg p-7 md:m-0 mx-20 md:h-40'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                            <p className='font-bold text-lg my-2'>Link and connect with students all over Africa 🚀</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
       </div>
    )
}
export default Home