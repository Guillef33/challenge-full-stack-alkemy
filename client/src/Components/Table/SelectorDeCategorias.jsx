import React, { useState, useContext } from 'react'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { FacturasContext } from "../../Context/FacturasContext";

function SelectorDeCategorias() {

  const {
    selectCategoria,
    filterWithCategory,
  } = useContext(FacturasContext);

  const [seleccion, setSeleccion] = useState('entretenimiento');

  const handleChange = (event) => {
    setSeleccion(event.target.value);
    selectCategoria(seleccion)
    filterWithCategory(event.target.value)
  };


  return (

    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          // labelId="demo-simple-select-label"
          // id="demo-simple-select"
          value={seleccion}
          label="Seleccion"
          onChange={handleChange}
        >
          <MenuItem value={'entretenimiento'}>Entretenimiento</MenuItem>
          <MenuItem value={'hogar'}>Hogar</MenuItem>
          <MenuItem value={'comida'}>Comida</MenuItem>
        </Select>
      </FormControl>
    </Box>

  )
}

export default SelectorDeCategorias