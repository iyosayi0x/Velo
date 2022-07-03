import {useDispatch} from 'react-redux'
import {update_messages} from '../store/chat'
import {REST_API_URL} from './index'

export const useGetMessages=()=>{
    const dispatch = useDispatch()


    const get_messages=async(token)=>{
        const Authorization = `Bearer ${token}`
        const config= {
            method:"GET",
            headers:{
                Authorization
            },
        }
        try{
            const res = await fetch(`${REST_API_URL}/chat/retrieve-messages/`, config)
            if(res.status === 200){
                const data = await res.json()
                dispatch(update_messages(data))
                return {
                    success:true,
                    data:data
                }
            }
            return {
                success:false,
                data:null
            }
        }catch(err){
            return {
                succss:false,
                data:null
            }
        }
    }
    return get_messages
}