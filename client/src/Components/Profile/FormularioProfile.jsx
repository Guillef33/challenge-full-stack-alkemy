import React, { useState } from 'react'
import { Link } from "react-router-dom";

import Axios from "axios";

import Swal from 'sweetalert2';

import {
  Box,
  Button,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";


function FormularioProfile() {

    Axios.defaults.withCredentials = true;
  const [genero, setGenero] = useState("masculino");

    const selectTipo = (e) => {
    setGenero(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const nombreCompleto = e.target.concepto.value;
    const cargo = e.target.cargo.value;
    const empresa = e.target.empresa.value;
    const edad = e.target.edad.value;
    const genero = e.target.genero.value;

    // Revisar este endoint
    Axios.post("http://localhost:3050/usuario-completos", {
      nombreCompleto: nombreCompleto,  
      cargo: cargo,
      empresa: empresa,
      edad: edad,
      genero: genero,
    }).then((response) => {
      Swal.fire({
      title: 'Completaste tus datos!',
      text: 'Excelente, ya puedes verla en la lista',
      icon: 'success',
      confirmButtonText: 'Seguir'
    })
    });

  };


  return (
    <Box onSubmit={handleSubmit} component="form" noValidate sx={{ mt: 1 }}>
      <FormControl fullWidth>
        <TextField
        margin="normal"
        label="Nombre Completo"
        name="nombreCompleto"
        autoFocus
        type="text"
      />
        <TextField
        margin="normal"
        label="Cargo"
        name="cargo"
        autoFocus
        type="text"
      />
    <TextField
        margin="normal"
        label="Empresa"
        name="empresa"
        autoFocus
        type="text"
      />

    <TextField
        margin="normal"
        label="Edad"
        name="edad"
        autoFocus
        type="number"
      />

        <Select
          label="Genero"
          name="genero"
          value={genero}
          onChange={selectTipo}
        >
          <MenuItem value="masculino">Masculino</MenuItem>
          <MenuItem value="femenino">Femenino</MenuItem>
          <MenuItem value="no-binario">No binario</MenuItem>

        </Select>
      </FormControl>

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Publicar
      </Button>
      <Button variant="outlined" component={Link} to="/dashboard">
       Volver a facturas
      </Button>
    </Box>
  );
}

export default FormularioProfile