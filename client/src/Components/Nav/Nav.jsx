import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import '../Header/Nav.css'

function Nav() {

  return (
    <ul className="flex-container">
      <Typography variant="boo1"><Link to="/">Contador App</Link></Typography>
      <Button><Link to="/auth/login">Ingresar</Link></Button>
    <Button><Link to="/auth/register">Registrate</Link></Button>

    </ul>
  );
}

export default Nav;
