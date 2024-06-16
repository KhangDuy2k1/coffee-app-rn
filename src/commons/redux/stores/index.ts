import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../slices/product"
import orderReducer from "../slices/order"
import walletReducer from "../slices/wallet"
export const store = configureStore({
  reducer: {
    product: productReducer,
    order: orderReducer,
    wallet: walletReducer
  },
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;