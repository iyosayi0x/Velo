import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    first_name:null,
    last_name:null,
    middle_name:null,
    is_authenticated:false,
    email_verified:null,
    email:null,
    __auth:null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            const {first_name , last_name , middle_name , email , email_verified, access} = action.payload
            state.__auth= access
            state.first_name =  first_name
            state.last_name =  last_name
            state.middle_name =  middle_name
            state.email =  email
            state.is_authenticated = true
            state.email_verified =  email_verified
        },
        logout: (state) => {
            state.email=null
            state.first_name=null
            state.last_name=null
            state.is_authenticated=false
            state.middle_name=null
            state.email_verified = null
            state.__auth=null
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer