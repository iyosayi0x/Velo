import {REST_API_URL} from './global'
import {useDispatch, useSelector} from 'react-redux'
import {update_feed, update_posts} from '../store/post'


export const useCreatePost=()=>{
    const token = useSelector(state=>state.user.__auth)
    const get_posts = useGetPosts()
    const get_feed = useGetFeed()
    const create_post=async(text, tags)=>{
        const Authorization = `Bearer ${token}`
        const config = {
            method:"POST",
            headers:{
                "Content-type":"application/json",
                Authorization
            },
            body:JSON.stringify({text,tags})
        }
        try{
            const res = await fetch(`${REST_API_URL}/post/create/`, config)
            if(res.status === 200){
                get_posts(token)
                get_feed(token)
                return {
                    success:true
                }
            }
            return {
                success:false
            }
        }catch(err){
            return {
                success:false
            }
        }
    }
    return create_post
}

export const useGetFeed=()=>{
    const dispatch = useDispatch()
    const get_feed=async(token)=>{
        const Authorization = `Bearer ${token}`
        const config = {
            method:"GET",
            headers:{
                "Content-type":"application/json",
                Authorization
            }
        }
        try{
            const res = await fetch(`${REST_API_URL}/post/feed/`, config)
            if(res.status === 200){
                const data = await res.json()
                dispatch(update_feed(data))

            }
        }catch(err){

        }
    }
    return get_feed
}

export const useGetPosts=()=>{
    const dispatch = useDispatch()
    const get_post=async(token)=>{
        const Authorization = `Bearer ${token}`
        const config = {
            method:"GET",
            headers:{
                "Content-type":"application/json",
                Authorization
            }
        }
        try{
            const res = await fetch(`${REST_API_URL}/post/`, config)
            if(res.status === 200){
                const data = await res.json()
                dispatch(update_posts(data))
            }
        }catch(err){

        }
    }
    return get_post
}

export const useAddComment=()=>{
    const add_comment=async()=>{

    }
    return add_comment
}