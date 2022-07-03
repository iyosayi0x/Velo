import { createSlice } from '@reduxjs/toolkit'



export const chatSlice = createSlice({
    name: 'messages',
    initialState:{
        all:[]
    },
    reducers: {
        add_message: (state, action) => {
            state.all.push(action.payload)
        },
        remove_message:(state, action)=>{
            state.all = state.all.filter(message => message.id !== action.payload)
        }
    },
})

export const { add_message, remove_message } = chatSlice.actions

export default chatSlice.reducer