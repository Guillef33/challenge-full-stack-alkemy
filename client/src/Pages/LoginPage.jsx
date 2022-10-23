import React, { useEffect, useContext } from "react";

import Login from "../Components/Login/Login";

import { Container, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

import MenuMui from "../Components/Header/MenuMui";

function LoginPage() {
  const { user, login, isLogged } = useContext(AuthContext);

  let navigate = useNavigate();

  useEffect(() => {
    if (login) {
      localStorage.getItem("loginState", login);
      console.log("Esto funciona?");
      navigate("/dashboard");
    }
  }, []);

  return (
    <Container maxWidth={false}>
      <MenuMui isLogged={false} />
      <div className="login-container-page">
        <div className="login-form-wrapper">
          <Typography>
            Bienvenido, inicia sesion para ver las facturas del mes
          </Typography>
          <Login />
        </div>
        <div className="login-image-wrapper"></div>
      </div>
    </Container>
  );
}

export default LoginPage;
