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

export const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, payload) => {
            console.log(payload)
            state.__auth=payload.__auth
            state.first_name = payload.first_name
            state.last_name = payload.last_name
            state.middle_name = payload.middle_name
            state.email = payload.email
            state.is_authenticated = true
            state.email_verified = payload.email_verified
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
export const { login, logout } = counterSlice.actions

export default counterSlice.reducer