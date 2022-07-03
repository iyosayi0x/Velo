import { createSlice } from '@reduxjs/toolkit'



export const usersSlice = createSlice({
    name: 'users',
    initialState:{
        all:[]
    },
    reducers: {
        update_users: (state, action) => {
            state.all = action.payload
        }
    },
})

export const { update_users } = usersSlice.actions

export default usersSlice.reducer