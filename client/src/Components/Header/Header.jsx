import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../Context/AuthContext";

import './Nav.css'

function NavFacturas() {

  const { login, user } = useContext(AuthContext)

  console.log(user)


  return (
    <ul className="flex-container">
      <Typography variant="h5">Bienvenido, {user} </Typography>
      <Link to="/agregar-factura">Agregar Factura</Link>
      <Link to="/mi-perfil">Mi Perfil</Link>
      <Link to="/">Salir</Link>
    </ul>
  );
}

export default NavFacturas;
