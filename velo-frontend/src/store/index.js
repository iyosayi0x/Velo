import { configureStore } from '@reduxjs/toolkit'
import useReducer from './user'
import messagesReducer from './messages'

export const store = configureStore({
    reducer: {
        user:useReducer,
        messages:messagesReducer
    },
})