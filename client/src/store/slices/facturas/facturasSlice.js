import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
export const facturasSlice = createSlice({
  name: "facturas",
  initialState: {
    page: 0,
    facturas: [],
    isLoading: false,
  },
  reducers: {
    startLoadingFacturas: (state) => {
      state.isLoading = true;
    },
    setFacturas: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.facturas = action.payload.facturas;
    },
  },
});
export const { startLoadingFacturas, setFacturas } = facturasSlice.actions;
