import React from 'react'

import { Link } from "react-router-dom";
import LoginPage from './LoginPage';

import { Container, Box, Button } from '@mui/material';

import ContadorPublico from '../Assets/contador-publico.jpg';
import './Home.css'

function Home() {
  return (
    <Container className='home-container'>
      <div>
        <h2>Contador App</h2>
        <Button>
          <Link to="/auth/login" className='main-button'>Ingresa para conocer las facturas</Link>
      </Button>
      </div>
      <div>
        <img src={ContadorPublico} alt="contador-publico-imagen" />
      </div>
    </Container>
  )
}

export default Home