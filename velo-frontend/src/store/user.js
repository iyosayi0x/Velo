import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    first_name:null,
    last_name:null,
    middle_name:null,
    is_authenticated:false,
    email:null,
    __auth:null
}

export const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, payload) => {
            const {__auth, first_name, last_name, middle_name, email} = payload
            state.__auth=__auth
            state.first_name = first_name
            state.last_name = last_name
            state.middle_name = middle_name
            state.email = email
            state.is_authenticated = true
        },
        logout: (state) => {
            state.email=null
            state.first_name=null
            state.last_name=null
            state.is_authenticated=false
            state.middle_name=null
            state.__auth=null
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = counterSlice.actions

export default counterSlice.reducer