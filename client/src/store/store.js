import { configureStore } from "@reduxjs/toolkit";
import { facturasSlice } from "./slices/facturas";

export const store = configureStore({
  reducer: {
    facturas: facturasSlice.reducer,
  },
});
