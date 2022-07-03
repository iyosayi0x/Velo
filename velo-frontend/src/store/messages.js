import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    messages:[]
}

export const counterSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        add_message: (state, payload) => {
            state.messages = [...state.messages, payloadd]
        },
        remove_message:(state, payload)=>{
            state.messages = state.messages.filter(message => message.id !== payload.id)
        }
    },
})

export const { add_message, remove_message } = counterSlice.actions

export default counterSlice.reducer