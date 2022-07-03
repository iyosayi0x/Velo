import jwt_decode from 'jwt-decode'
import {v4} from 'uuid'

export const notEmptyString=(text)=>{
    return text.trim() !== ''
}

export const retrieveRefresh=()=>{
    return localStorage.getItem('__refresh')
}


export const uid=()=>v4()
export const decode_jwt=(token)=>jwt_decode(token);