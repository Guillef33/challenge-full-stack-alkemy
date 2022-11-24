import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  TableFooter,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";

import Axios from "axios";
import RowMap from "./RowMap";
import * as XLSX from "xlsx";
import { read, writeFileXLSX } from "xlsx";
import { FacturasContext } from "../../Context/FacturasContext";
import Swal from "sweetalert2";
import "./FilterTable.css";
import FilterButtons from "./FilterButtons";
import ResumenDePrecios from "../Dashboard/ResumenDePrecios";
import { getFacturas } from "../../store/slices/facturas";
import { useDispatch } from "react-redux";

function TableContainerMaster() {
  const {
    filterEgresos,
    filterIngresos,
    showAll,
    showIngresos,
    showEgresos,
    showDataFilterCategory,
    listaFacturas,
    ingresos,
    egresos,
    dataFilterCategory,
    sumarMonto,
    total,
    getIngresos,
    getEgresos,
  } = useContext(FacturasContext);

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

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Get facturas");
    dispatch(getFacturas());
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "80vh " }}>
      <FilterButtons
        showAll={showAll}
        filterIngresos={filterIngresos}
        filterEgresos={filterEgresos}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Concepto</TableCell>
              <TableCell align="right">Monto</TableCell>
              <TableCell align="right">Fecha</TableCell>
              <TableCell align="right">Tipo</TableCell>
              <TableCell align="right">Categoria</TableCell>
              <TableCell align="right">Editar</TableCell>
              <TableCell align="right">Borrar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(showIngresos || showEgresos) && (
              <RowMap lista={showIngresos ? ingresos : egresos} />
            )}
            {!showIngresos && !showEgresos && !showDataFilterCategory && (
              <RowMap lista={listaFacturas} />
            )}
            {showDataFilterCategory && <RowMap lista={dataFilterCategory} />}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableContainerMaster;
