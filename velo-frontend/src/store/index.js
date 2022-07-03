import { configureStore } from '@reduxjs/toolkit'
import useReducer from './user'

export const store = configureStore({
    reducer: {
        user:useReducer
    },
})