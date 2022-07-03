import { useState } from 'react'
import {useSelector} from 'react-redux'
import '../../styles/chat.css'
import pfp from "../../assets/images/valley_landscape.png"
import IncomingChat from '../../components/IncomingChat'

const Chat=()=>{
    const chats = useSelector(state=> state.chat.threads)
    const [message, setMessage] = useState("")
    function send(message) {
        return <IncomingChat message={message} />
    }
    return(
        <section className='chat p-5'>
            <div className='chat__msgCont relative'>
                <div className='pb-3 border-b hover:cursor-pointer'>
                    <div className='flex space-x-3'>
                        <img className='w-10 h-10 rounded-full' src={pfp} />
                        <div>
                            <h1 className='font-medium'>Divine Edeh</h1>
                            <p className='m-0 p-0'>@divine</p>
                        </div>
                    </div>
                </div>
                <div>
                    <IncomingChat message={message} />
                </div>
                <div className='flex space-x-2 md:space-x-4 fixed bottom-5 w-full'>
                    <input onChange={(e) => setMessage(e.target.value)} className='bg-gray-100 rounded-full py-2 w-full px-5 outline-none' placeholder='Message...' type="text"/>
                    <svg onClick={send(message)} xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#003566] rounded-full p-2 rotate-45 bg-[#00356657] hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </div>
            </div>
            <div className='chat__threadCont border-l h-screen'>
                <div className='chat__chatHeader'>
                    <h1>Messages</h1>
                    <input className='bg-gray-100 rounded-full' type='text' placeholder='Search for a message...'/>
                </div>
                <div className='chat__chats'>

                </div>
            </div>
        </section>
    )
}

export default Chat