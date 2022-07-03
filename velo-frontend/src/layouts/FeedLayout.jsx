import {Outlet, Link} from 'react-router-dom'
import '../styles/feed.css'


const FeedLayout=()=>{
    return (
        <main className='flex justify-between feedlayout'>
            <section className='feedlayout__navbar'>
                <ul>
                    <li className='feedlayour__navItem'><Link to='/feed'>Feed</Link></li>
                    <li className='feedlayour__navItem'><Link to='/feed/lessons'>Lessons</Link></li>
                    <li className='feedlayour__navItem'><Link to='/feed/chat'>Chats</Link></li>
                    <li className='feedlayour__navItem'><Link to='/feed/users'>Users</Link></li>
                    <li className='feedlayour__navItem'><Link to='/feed/dashboard'>Dashboard</Link></li>
                </ul>
            </section>

            <section className='feedlayout__main'>
                <Outlet/>
            </section>
        </main>
    )
}

export default FeedLayout