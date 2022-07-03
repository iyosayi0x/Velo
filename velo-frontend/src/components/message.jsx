import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {remove_message} from '../store/messages'

const Message=({type, text, id})=>{
    const dispatch = useDispatch()

    useEffect(() => {
        const timer = setTimeout(() => dispatch(remove_message(id)), 1500);
        return () => clearTimeout(timer);
    }, [])

    return (
        <div className={`message message--${type}`}>
            {text}
        </div>
    )
}

export default Message