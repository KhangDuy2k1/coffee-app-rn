import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const productSlice = createSlice({
  name: "wallet",
  initialState: {
    visibleWalletModal: false
  },
  reducers: {
    setVisibleWallet(state, action) {
      state.visibleWalletModal = action.payload
    }
  }
})
export const { setVisibleWallet } = productSlice.actions;
export const selectWallet = (state: any) => state.wallet
export default productSlice.reducer;