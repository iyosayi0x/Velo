import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    feed:[],
    posts:[],
}


export const postSlice = createSlice({
    name: 'messages',
    initialState:initialState,
    reducers: {
        update_feed:(state, action)=>{
            state.chats = action.payload
        },
        update_posts:(state, action)=>{
            state.posts = action.payload
        }
    },
})

export const { update_feed, update_posts } = postSlice.actions

export default postSlice.reducer