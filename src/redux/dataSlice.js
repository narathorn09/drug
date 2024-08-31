import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    isLoading: null,
    dataDrugStore: [],
    dataDiseaseStore: []
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload.isLoading;
    },
    setDataDrugStore: (state, action) => {
      state.dataDrugStore = action.payload.data;
    },
    setDataDiseaseStore: (state, action) => {
      state.dataDiseaseStore = action.payload.data;
    },
    
  },
});

export const getIsLoading = (state) => state.data.isLoading;
export const getDataDrugStore = (state) => state.data.dataDrugStore;
export const getDataDiseaseStore = (state) => state.data.dataDiseaseStore;

export const { setIsLoading, setDataDrugStore, setDataDiseaseStore } = dataSlice.actions;
export default dataSlice.reducer;
