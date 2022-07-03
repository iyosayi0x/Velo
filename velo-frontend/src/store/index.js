import { configureStore } from '@reduxjs/toolkit'
import useReducer from './user'
import messagesReducer from './messages'
import chatReducer from './chat'

export const store = configureStore({
    reducer: {
        user:useReducer,
        messages:messagesReducer,
        chat:chatReducer
    },
})