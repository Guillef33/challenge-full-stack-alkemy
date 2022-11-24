import React from "react";
import AuthRouter from "./AuthRouter";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";

import FacturasAppRouter from "./FacturasAppRouter";
import PrivateRoute from "./PrivateRoutes";
import MenuMui from "../Components/Header/MenuMui";
import Listado from "../Components/Dashboard/Listado";

const AppRouter = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="auth/*" element={<AuthRouter />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <MenuMui isLogged={true} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr" }}>
                <Listado />
                <FacturasAppRouter />
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
