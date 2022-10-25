import React, { useState, useEffect, useContext } from "react";
import { Button, Paper, Typography, Box } from "@mui/material";

import { FacturasContext } from "../../Context/FacturasContext";

import "./Dashboard.css";

function ResumenDePrecios() {
  const { listaFacturas, ingresos, egresos, total, getIngresos, sumarMonto } =
    useContext(FacturasContext);

  const [ingresosLocal, setIngresosLocal] = useState(0);
  const [egresosLocal, setEgresosLocal] = useState(0);
  const [resultadoTotal, setResultadoTotal] = useState(0);

  useEffect(() => {
    getIngresos();
    const lista = ingresos.map((ingreso) => ingreso.monto);
    const monto = lista.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    setIngresosLocal(monto);
  }, []);

  useEffect(() => {
    getIngresos();
    const lista = egresos.map((egreso) => egreso.monto);
    const monto = lista.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    setEgresosLocal(monto);
  }, []);

  // function resultado () {
  //   setResultadoTotal(ingresosLocal - egresosLocal  )
  // }

  return (
    <Box className="stats-container">
      <Box>
        <Typography variant="book1">Los ingresos son de:</Typography>
        <Typography variant="h3">{ingresosLocal}</Typography>
      </Box>
      <Box>
        <Typography variant="book1">Los egresos son de:</Typography>
        <Typography variant="h3">{egresosLocal}</Typography>
      </Box>
      <Box>
        <Typography variant="book1">El total es:</Typography>
        <Typography
          variant="h3"
          // className={'positivo' : 'negativo'}
        >
          {" "}
          {ingresosLocal - egresosLocal}
        </Typography>
      </Box>
    </Box>
  );
}

export default ResumenDePrecios;
