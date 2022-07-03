import jwt_decode from 'jwt-decode'

export const notEmptyString=(text)=>{
    return text.trim() !== ''
}

export const retrieveRefresh=()=>{
    return localStorage.getItem('__refresh')
}


export const decode_jwt=(token)=>jwt_decode(token);