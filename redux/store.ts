import {configureStore} from "@reduxjs/toolkit";

import productReducer from "../redux/features/productSlice";

import {apiSlice} from "./features/products/productsApiSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
