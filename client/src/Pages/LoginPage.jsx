import React, { useEffect, useContext } from "react";

import Login from "../Components/Login/Login";

import { Container, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

import Nav from "../Components/Nav/Nav";

function LoginPage() {
  const { user, login } = useContext(AuthContext);

  let navigate = useNavigate();

  useEffect(() => {
    if (login) {
      localStorage.getItem("loginState", login);
      console.log("Esto funciona?");
      navigate("/dashboard");
    }
  }, []);

  return (
    <Container>
      <Nav />
      <Typography>
        Bienvenido, inicia sesion para ver las facturas del mes
      </Typography>
      <Login />
    </Container>
  );
}

export default LoginPage;
