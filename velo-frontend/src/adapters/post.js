import {REST_API_URL} from './index'
import {useDispatch} from 'react-redux'
import {update_feed, update_posts} from '../store/post'


export const useCreatePost=()=>{
    const create_post=async()=>{

    }
    return create_post
}

export const useGetFeed=()=>{
    const dispatch = useDispatch()
    const get_feed=async(token)=>{
        const Authorization = `Bearer ${token}`
        const config = {
            method:"GET",
            Authorization
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
            Authorization
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