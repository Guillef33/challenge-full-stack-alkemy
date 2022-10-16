import React from 'react'

import Register from '../Components/Register/Register'

import {Container, Typography} from '@mui/material'

import Nav from '../Components/Nav/Nav'


function RegisterPage() {
  return (
    <Container>
        <Nav />
        <Typography variant='book1'>Completa tus datos para ingresar</Typography>
        <Register />
    </Container>
  )
}

export default RegisterPage