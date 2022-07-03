import { createSlice } from '@reduxjs/toolkit'



export const chatSlice = createSlice({
    name: 'messages',
    initialState:[],
    reducers: {
        add_message: (state, action) => {
            state.push(action.payload)
        },
        remove_message:(state, payload)=>{
            state.messages = state.messages.filter(message => message.id !== payload.id)
        }
    },
})

export const { add_message, remove_message } = chatSlice.actions

export default chatSlice.reducer