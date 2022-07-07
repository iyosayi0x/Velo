import {Outlet, Link} from 'react-router-dom'
import '../styles/feed.css'
import React, { useState } from "react"
import {useDispatch} from 'react-redux'
import {logout} from '../store/user'
import {useNavigate} from 'react-router-dom'


const FeedLayout=()=>{
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout=()=>{
        dispatch(logout())
        navigate('/')
    }

    return (
        <main className='relative justify-between feedlayout md:flex'>
            <div className='py-3 border-b'>
                <svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" className="md:hidden hover:cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <section className={`border-r-2 border-r-[#f9f9f9] h-screen md:h-full p-3 md:p-8 md:fixed bg-white md:w-64 feedlayout__navbar absolute w-full ${!show ? "-left-[100%] md:-left-0 duration-500" : "left-0 duration-500"}`}>
            <div className=''>
                <ul>
                    <li className='feedlayour__navItem'>
                        <Link onClick={() => setShow(!show)} className='flex space-x-2' to='/feed'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                            <h5>Feed</h5>
                        </Link>
                    </li>
                    <li className='feedlayour__navItem'>
                        <Link onClick={() => setShow(!show)} className='flex space-x-2' to='/feed/lessons'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                            <h5>Lessons</h5>
                        </Link>
                    </li>
                    <li className='feedlayour__navItem'>
                        <Link onClick={() => setShow(!show)} className='flex space-x-2' to='/feed/chat'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                            <h5>Chats</h5>
                        </Link>
                    </li>
                    <li className='feedlayour__navItem'>
                        <Link onClick={() => setShow(!show)} className='flex space-x-2' to='/feed/users'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <h5>Users</h5>
                        </Link>
                    </li>
                    <li className='feedlayour__navItem'>
                        <Link onClick={() => setShow(!show)} className='flex space-x-2' to='/feed/dashboard'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                            <h5>Dashboard</h5>
                        </Link>
                    </li>
                    <li className='feedlayour__navItem'>
                        <div onClick={handleLogout} className='flex space-x-2 logout_btn' to='/feed/dashboard'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                            <h5>Logout</h5>
                        </div>
                    </li>
                </ul>
                </div>
            </section>

            <section className='md:ml-64 feedlayout__main'>
                <Outlet/>
            </section>
        </main>
    )
}

export default FeedLayout