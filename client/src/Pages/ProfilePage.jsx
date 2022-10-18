import React, { useContext } from 'react'

import { AuthContext } from '../Context/AuthContext'

import { Link, useParams} from "react-router-dom";

import Dashboard from '../Components/Dashboard/Dashboard';
import FormularioProfile from '../Components/Profile/FormularioProfile';

import {
  Typography,
  Button,
  Box,
} from "@mui/material";

function ProfilePage() {

 const { login, user } = useContext(AuthContext)

 const { id } = useParams()

 console.log(user)

  return (
    <Box>
        <Typography variant='h4'>Esta es la pagina de tu perfil, { user }</Typography>
        <Typography variant='body1'>Aqui vas a poder completar tu perfil</Typography>
        <Link to={`/editar-usuario/${id}`} >Editar Perfil</Link>
        <Dashboard />
        <Button variant="outlined" component={Link} to="/dashboard">
            Volver a facturas
      </Button>
    </Box>
  )
}

export default ProfilePage