import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
    name: 'messages',
    initialState:[],
    reducers: {
        add_message: (state, payload) => {
            state.push(payload)
        },
        remove_message:(state, payload)=>{
            state.messages = state.messages.filter(message => message.id !== payload.id)
        }
    },
})

export const { add_message, remove_message } = counterSlice.actions

export default counterSlice.reducer