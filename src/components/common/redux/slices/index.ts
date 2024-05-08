import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const prroductSlice = createSlice({
  name: "product",
  initialState: {
    textSearch: ""
  },
  reducers: {
    setTextSearch(state, action) {
      state.textSearch = action.payload
    }
  }
})
export const { setTextSearch } = prroductSlice.actions;

export default prroductSlice.reducer;