import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../slices/product"
import orderReducer from "../slices/order"
export const store = configureStore({
  reducer: {
    product: productReducer,
    order: orderReducer
  },
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;