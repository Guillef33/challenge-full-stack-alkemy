import React from "react";

import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";

import { Container, Box, Button, Typography } from "@mui/material";

import ContadorPublico from "../Assets/header-img-1.png";
import "./Home.css";

import Nav from "../Components/Nav/Nav";
import MenuMui from "../Components/Header/MenuMui";

function Home() {
  const styles = {
    containerContainer: {
      padding: 0,
    },
    boxContainer: {
      height: "90vh",
      backgroundImage: `url(${ContadorPublico})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },

    wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "center",
      height: "70vh",
    },
  };

  return (
    <Container
      className="home-container"
      maxWidth={false}
      style={styles.containerContainer}
    >
      <MenuMui />
      <Box style={styles.boxContainer}>
        <Box style={styles.wrapper}>
          <Typography variant="h2">Sistema de Gestión</Typography>
          <Typography variant="book1">
            Con nuestro software ERP en la nube tu empresa crece
          </Typography>
          <Button>
            <Link to="/auth/register" className="main-button">
              Prueba gratis por 10 dias
            </Link>
          </Button>
        </Box>
        {/* <img src={ContadorPublico} alt="contador-publico-imagen" /> */}
      </Box>
      {/* <Box>
        <Button>
          <Link to="/auth/login" className='main-button'>Ingresa para conocer las facturas</Link>
      </Button>
      <Button>
          <Link to="/auth/register" className='main-button'>Registrate como usuario</Link>
      </Button>
      </Box> */}
    </Container>
  );
}

export default Home;
