import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const orderSlice = createSlice({
  name: "order",
  initialState: {
    visibleSelectMethod: false,
    idAddress: null,
    address: null,
    phonenumber: null
  },
  reducers: {
    setInfoOrder(state, action){
        state.address = action.payload.address;
        state.phonenumber = action.payload.phonenumber;
    },
    setVisibleSelectMethod(state, action){
        state.visibleSelectMethod = action.payload;
    },
    setIdAddress(state, action){
        state.idAddress = action.payload;
    },
  }
})
export const { 
    setMethod,
    setInfoOrder,
    setVisibleSelectMethod,
    setIdAddress
} = orderSlice.actions;
export const selectOrder = (state: any) => state.order 
export default orderSlice.reducer;