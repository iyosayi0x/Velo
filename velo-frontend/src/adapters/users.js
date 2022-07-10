import {REST_API_URL} from './global'
import {useDispatch} from 'react-redux'
import {update_users} from '../store/users'
import { useGetPosts, useGetFeed } from './post'
import { useGetProfile} from './auth'
import { useGetMessages } from './chat'

export const useGetUsers=()=>{
    const dispatch = useDispatch()
    const get_users=async(token)=>{
        const Authorization = `Bearer ${token}`
        const config= {
            method:"GET",
            headers:{
                "Content-type":"application/json",
                Authorization
            }
        }

        try{
            const res = await fetch(`${REST_API_URL}/auth/retrieve-users/`, config)
            if(res.status === 200){
                const data = await res.json()
                dispatch(update_users(data))
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
    return get_users
}


export const useLoadUserData=()=>{
    const get_posts = useGetPosts()
    const get_feed = useGetFeed()
    const get_messages = useGetMessages()
    const get_profile = useGetProfile()
    const get_users = useGetUsers()

    const load_user_data=(token)=>{
        get_feed(token)
        get_posts(token)
        get_users(token)
        get_messages(token)
        get_profile(token)
    }
    return load_user_data
}