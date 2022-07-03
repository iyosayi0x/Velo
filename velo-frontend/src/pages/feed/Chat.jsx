import {useSelector} from 'react-redux'
import '../../styles/chat.css'

const Chat=()=>{
    const chats = useSelector(state=> state.chat.threads)
    return(
        <section className='chat'>
            <div className='chat__msgCont'>

            </div>
            <div className='chat__threadCont'>
                <div className='chat__chatHeader'>
                    <h1>Messages</h1>
                    <input type='text' placeholder='Search for a message...'/>
                </div>
                <div className='chat__chats'>

                </div>
            </div>
        </section>
    )
}

export default Chat