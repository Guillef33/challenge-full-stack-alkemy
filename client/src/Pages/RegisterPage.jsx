import React from "react";

import Register from "../Components/Register/Register";

import { Container, Typography } from "@mui/material";
import MenuMui from "../Components/Header/MenuMui";

function RegisterPage() {
  return (
    <Container maxWidth={false}>
      <MenuMui isLogged={false} />
      <div className="login-container-page">
        <div className="login-form-wrapper">
          <Typography variant="book1">
            Completa tus datos para ingresar
          </Typography>
          <Register />
        </div>
        <div className="login-image-wrapper"></div>
      </div>
    </Container>
  );
}

export default RegisterPage;
