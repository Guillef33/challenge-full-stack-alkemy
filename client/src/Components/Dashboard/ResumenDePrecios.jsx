import React, { useState, useEffect, useContext } from "react";
import { Button, Paper, Typography, Box } from "@mui/material";

import { FacturasContext } from "../../Context/FacturasContext";

function ResumenDePrecios() {
  const { listaFacturas, ingresos, egresos, total, getIngresos } =
    useContext(FacturasContext);

  const [plata, setPlata] = useState(0);
  const [plataEgresos, setPlataEgresos] = useState(0);

  useEffect(() => {
    getIngresos();
    const monto = ingresos.map((ingreso) => ingreso.monto);
    const plata = monto.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    setPlata(plata);
  }, []);

  useEffect(() => {
    getIngresos();
    const monto = egresos.map((egreso) => egreso.monto);
    const plataEgresos = monto.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    setPlataEgresos(plataEgresos);
  }, []);

  return (
    <Box>
      <Box>
        <Typography variant="book1">Los ingresos son de:</Typography>
        <Typography variant="h3">{plata}</Typography>
      </Box>
      <Box>
        <Typography variant="book1">Los egresos son de:</Typography>
        <Typography variant="h3">{plataEgresos}</Typography>
      </Box>
      <Box>
        <Typography variant="book1">El total es:</Typography>
        <Typography variant="h3"> {total}</Typography>
      </Box>
    </Box>
  );
}

export default ResumenDePrecios;
