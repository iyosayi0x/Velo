import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    chats:[],
    threads:[],
    currentUserChatId:null,
}


export const chatSlice = createSlice({
    name: 'messages',
    initialState:initialState,
    reducers: {
        update_messages:(state, action)=>{
            state.chats = action.payload
        }

    },
})

export const { update_messages } = chatSlice.actions

export default chatSlice.reducer