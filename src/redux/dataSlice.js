import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    isLoading: null,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const getIsLoading = (state) => state.data.isLoading;

export const { setIsLoading } = dataSlice.actions;
export default dataSlice.reducer;
