import {REST_API_URL} from './index'
import {decode_jwt} from '../utils'
import { useDispatch } from 'react-redux'
import { login as login_action } from '../store/user'

export const useLogin=()=>{
    const dispatch = useDispatch()
    const login=async(email , password)=>{
        const config= {
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body: JSON.stringify({email, password})
        }
        try{
            const res = await fetch(`${REST_API_URL}/auth/token/`, config)
            if(res.status === 200){
                const data = await res.json()
                storeRefesh(data.refresh)
                const {first_name, last_name, middle_name, email, email_verified,} = decode_jwt(data.access)
                const payload = {first_name , last_name , middle_name , email , email_verified}
                dispatch(login_action(payload))

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
    return login
}


export const useSignUp=()=>{
    const signup=async(formData)=>{
        const config= {
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body: JSON.stringify(formData)
        }

        try{
            const res = await fetch(`${REST_API_URL}/auth/signup/`, config)
            if(res.status === 200){
                const data = await res.json()
                storeRefesh(data.refresh)
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
    return signup
}


export const useEmailVerify=()=>{
    const verify_mail=async(uidb64, token)=>{

    }
    return verify_mail
}

export const useRequestEmailVerify=()=>{
    const request_email_verify=async(email)=>{

    }
    return request_email_verify
}


export const useTokenRefresh=()=>{
    const dispatch = useDispatch()

    const token_refesh=async(refresh)=>{
            const config= {
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                },
                body: JSON.stringify({refresh})
            }
            try{
                const res = await fetch(`${REST_API_URL}/auth/token/refresh/`, config)
                if(res.status === 200){
                    const data = await res.json()
                    storeRefesh(data.refresh)
                    const {first_name, last_name, middle_name, email, email_verified,} = decode_jwt(data.access)
                    const payload = {first_name , last_name , middle_name , email , email_verified}
                    dispatch(login_action(payload))
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
    return token_refesh
}

export const useRequestPasswordReset=()=>{
    const request_password_reset=async(email)=>{
        const config= {
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body: JSON.stringify({email})
        }

        try{
            const res = await fetch(`${REST_API_URL}/auth/password_reset/`, config)
            if(res.status === 200){
                const data = await res.json()
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
    return request_password_reset
}

const storeRefesh=(token)=>{
    localStorage.setItem('__refresh', token)
}

