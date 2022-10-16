import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../Context/AuthContext";

import './Nav.css'

function NavFacturas() {

  const { login, user } = useContext(AuthContext)

  console.log(user)


  return (
    <ul className="flex-container">
      <h1>Bienvenido, {user} </h1>
      <Link to="/agregar-factura">Agregar Factura</Link>
      
      <Link to="/">Salir</Link>

    </ul>
  );
}

export default NavFacturas;
