import React from "react";
import { Box } from "@mui/material";

import { Link } from "react-router-dom";

import "./Dashboard.css";

function Listado() {
  return (
    <Box className="listado-sidebar">
      <Link to="/mi-perfil">Ver mi perfil</Link>
      <Link to="/pricing">Ver los precios</Link>
      <Link to="/sobre-nosotros">Sobre nosotros</Link>
      <Link to="/ultimas-facturas">Ultimas Facturas</Link>
      <Link to="/agregar-factura">Agregar Facturas</Link>
    </Box>
  );
}

export default Listado;
