import {Outlet} from 'react-router-dom'
import Message from '../components/Message'
import '../styles/message.css'
import { useSelector } from 'react-redux'
const MessagesLayout=()=>{
    const messages = useSelector(state => state.messages.messages)
    return (
        <div>
            <Outlet/>
            <section className='messages__wrapper'>
                {
                    messages.map(message => <Message type={message.type} Text={message.text} key={message.id} id={message.id}/>)
                }
            </section>
        </div>
    )
}

export default MessagesLayout