import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { inventarioSlice } from "./inventario/inventarioSlice";


export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        inventario: inventarioSlice.reducer
    },
    middleware:( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })
})