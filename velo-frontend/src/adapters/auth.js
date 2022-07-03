import {REST_API_URL} from './index'

export const useLogin=()=>{
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

const storeRefesh=(token)=>{
    localStorage.setItem('__refresh', token)
}

const retrieveRefresh=()=>{
    return localStorage.getItem('__refresh')
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

        console.log(config)

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


export const useRequestPasswordReset=()=>{
    const request_password_reset=async(email)=>{
        const config= {
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body: JSON.stringify({email})
        }

        console.log(config)

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