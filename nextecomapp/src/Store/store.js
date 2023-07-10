import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from 'next-redux-wrapper';
import cartReducer from "./cartReducer"

const Store = () =>
    configureStore({
        reducer: {
            cart: cartReducer,
            devTools: true
        }
    })

export const wrapper = createWrapper(Store)