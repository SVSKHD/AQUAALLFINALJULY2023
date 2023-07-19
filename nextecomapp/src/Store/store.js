import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import cartReducer from "./cartReducer";
import AuthDialog from "./AuthDialogReducer";

const Store = () =>
  configureStore({
    reducer: {
      cart: cartReducer, 
      authDialog:AuthDialog,     
      devTools: true,
    },
  });

export const wrapper = createWrapper(Store);
