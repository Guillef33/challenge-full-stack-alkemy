import React, { useContext } from "react";

import { AuthContext } from "../Context/AuthContext";

import { Link, useParams } from "react-router-dom";

import Dashboard from "../Components/Dashboard/Dashboard";
import FormularioProfile from "../Components/Profile/FormularioProfile";

import { Typography, Button, Box } from "@mui/material";

import "../Components/Dashboard/Dashboard.css";

function ProfilePage() {
  const { login, user } = useContext(AuthContext);

  const { id } = useParams;

  console.log(user);

  return (
    <>
      <MenuMui isLogged={true} />
      <Box className="profile-container">
        <Typography variant="book1">
          Esta es la pagina de tu perfil, {user.username}
        </Typography>
        <Dashboard />
        <Button variant="outlined" component={Link} to="/dashboard">
          Volver a facturas
        </Button>
        <Button
          variant="outlined"
          component={Link}
          to={`/editar-usuario/${id}`}
        >
          Editar Perfil
        </Button>
      </Box>
    </>
  );
}

export default ProfilePage;
