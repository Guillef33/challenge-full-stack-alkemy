import { useState } from "react";
import AppRouter from "./Router/AppRouter";

import FacturasProvider from "./Context/FacturasContext";
import AuthProvider from "./Context/AuthContext";

import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}
