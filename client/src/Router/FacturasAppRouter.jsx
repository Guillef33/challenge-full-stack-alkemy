import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ListaFacturas from "../Pages/ListaFacturas";
import AgregarFactura from "../Components/Agregar/AgegarFactura";
import AuthProvider from '../Context/AuthContext'
import LoginPage from "../Pages/LoginPage";

import Home from '../Pages/Home'
import FormEditFactura from "../Components/Agregar/FormEditFactura";
import ProfilePage from "../Pages/ProfilePage";

function FacturasAppRouter() {
  return (
      <Routes>
        <Route exact path="/dashboard" element={<ListaFacturas />}></Route>
        <Route path="/agregar-factura" element={<AgregarFactura />}></Route>
        <Route path="/editar-factura/:id" element={<FormEditFactura />}></Route>
        <Route path="/mi-perfil" element={<ProfilePage />}></Route>

      </Routes>
  );
}

export default FacturasAppRouter;
