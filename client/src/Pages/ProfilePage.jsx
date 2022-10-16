import React, { useContext } from 'react'

import { AuthContext } from '../Context/AuthContext'

import { Link } from "react-router-dom";


import {
  Typography,
  Button,
} from "@mui/material";


function ProfilePage() {

 const { login, user } = useContext(AuthContext)

 console.log(user)

  return (
    <div>
        <Typography variant='h4'>Esta es la pagina de tu perfil, { user }</Typography>
        <p>Aqui vas a poder completar tu perfil</p>
        <p>Solo tenemos tu contrasena y nos gustaria poder mostrar algo mas</p>
        <Button variant="outlined" component={Link} to="/dashboard">
            Volver a facturas
      </Button>
    </div>
  )
}

export default ProfilePage