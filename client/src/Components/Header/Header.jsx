import { Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../Context/AuthContext";

import './Nav.css'

function Header() {

  const { login, user } = useContext(AuthContext)

  return (
    <ul className="flex-container">
      <Typography>Contador App</Typography>
      <Typography variant="book1">Bienvenido, {user.username} </Typography>
      <Button><Link to="/agregar-factura">Agregar Factura</Link></Button>
      <Button><Link to="/mi-perfil">Mi Perfil</Link></Button>
      <Button><Link to="/">Salir</Link></Button>
    </ul>
  );
}

export default Header;
