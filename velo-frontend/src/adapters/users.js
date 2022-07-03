import {REST_API_URL} from './index'
import {useDispatch} from 'react-redux'
import {update_users} from '../store/users'

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