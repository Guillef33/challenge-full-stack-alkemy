import React from 'react'

import Login from '../Components/Login/Login'

import {Container, Typography} from '@mui/material'

import Nav from '../Components/Nav/Nav'


function LoginPage() {
  return (
    <Container>
        <Nav />
        <Typography>Bienvenido, inicia sesion para ver las facturas del mes</Typography>
        <Login />
    </Container>
  )
}

export default LoginPage