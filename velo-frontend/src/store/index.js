import { configureStore } from '@reduxjs/toolkit'
import useReducer from './user'
import messagesReducer from './messages'
import chatReducer from './chat'
import usersReducer from './users'
import postReudcer from './post'

export const store = configureStore({
    reducer: {
        user:useReducer,
        messages:messagesReducer,
        chat:chatReducer,
        users:usersReducer,
        post:postReudcer
    },
})