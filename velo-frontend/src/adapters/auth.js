export const useLogin=()=>{
    const login=async(email , password)=>{
        const config= {
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body: JSON.stringify({email, password})
        }

        console.log(config)

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