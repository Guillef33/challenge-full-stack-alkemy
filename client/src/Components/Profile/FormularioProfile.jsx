import React, { useState, useContext } from 'react'

import Axios from "axios";

import Swal from 'sweetalert2';

import { Link, useParams } from "react-router-dom";

import { AuthContext } from '../../Context/AuthContext';


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
  const {setUserEdit} = useContext(AuthContext)
  
  const [genero, setGenero] = useState("masculino");

  const selectTipo = (e) => {
    setGenero(e.target.value);
  };


    const onPressEdit = () => {
      setUserEdit(item);
  }

    const id = useParams()

   const [form, setForm] = useState ({
    concepto: null,
    tipo: null,
    monto: null,
    fecha: null,
    categoria: null,
})

  
  const updateUser = (id, form) => {
   const nombreCompleto = e.target.concepto.value;
    const cargo = e.target.cargo.value;
    const empresa = e.target.empresa.value;
    const edad = e.target.edad.value;
    const genero = e.target.genero.value;

    Axios.put(`http://localhost:3050/update-users/${id}`, {
      nombreCompleto: nombreCompleto,  
      cargo: cargo,
      empresa: empresa,
      edad: edad,
      genero: genero,
      id: id,
    }).then((response) => {
      console.log(response);
      Swal.fire({
        title: "Editaste tu perfil",
        text: "Excelente, ya puedes verlo actualizadda en la lista",
        icon: "success",
        confirmButtonText: "Seguir",
      });
    });
  };



  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
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

      <Button onClick={() => updateUser(id.id, form)} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Publicar
      </Button>
      <Button variant="outlined" component={Link} to="/dashboard">
       Volver a facturas
      </Button>
    </Box>
  );
}

export default FormularioProfile