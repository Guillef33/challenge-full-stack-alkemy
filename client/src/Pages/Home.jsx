import React from 'react'

import { Link } from "react-router-dom";
import LoginPage from './LoginPage';

import { Container, Box, Button, Typography } from '@mui/material';

import ContadorPublico from '../Assets/contador-publico.jpg';
import './Home.css'

import Nav from '../Components/Nav/Nav'

function Home() {
  return (
    <Container className='home-container'>
      <Nav />
      <Box>
        <img src={ContadorPublico} alt="contador-publico-imagen" />
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
  )
}

export default Home