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

  return (
    <>
      <Box className="profile-container">
        <Typography variant="book1">
          Esta es la pagina de tu perfil, {user.username}
        </Typography>
        <Button
          variant="outlined"
          component={Link}
          to={`/editar-usuario/${id}`}
        >
          Editar Perfil
        </Button>
        <Button variant="outlined" component={Link} to="/dashboard">
          Volver al dashboard
        </Button>
      </Box>
    </>
  );
}

export default ProfilePage;
