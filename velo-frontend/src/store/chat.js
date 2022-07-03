import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    chats:[],
    threads:[],
    currentUserChatId:null,
}


export const counterSlice = createSlice({
    name: 'messages',
    initialState:initialState,
    reducers: {
        update_messages:(state, payload)=>{
            state.chats = payload
        }

    },
})

export const { update_messages } = counterSlice.actions

export default counterSlice.reducer