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
} from "@mui/material";

import Axios from "axios";
import RowMap from "./RowMap";

import * as XLSX from "xlsx";

import { read, writeFileXLSX } from "xlsx";

import { FacturasContext } from "../../Context/FacturasContext";

import Swal from "sweetalert2";

import './FilterTable.css'
import FilterButtons from "./FilterButtons";

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

  } = useContext(FacturasContext);



  return (
    <>
    <FilterButtons showAll={showAll} filterIngresos={filterIngresos} filterEgresos={filterEgresos} />
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
        {/* Si algunos de las flags de ingresos o egresos estan active, mostrar uno u otro no todos  */}
        {
          (showIngresos || showEgresos ) && <RowMap lista={showIngresos ? ingresos : egresos} />
        }
        {/* Si no estan activos ningún filtro mostras todos los datos */}
        {
          (!showIngresos && !showEgresos && !showDataFilterCategory )  && <RowMap lista={listaFacturas} />
        }
        {
          showDataFilterCategory && <RowMap lista={dataFilterCategory} />
        }

        </TableBody>
      </Table>
    </TableContainer>
    </>

  );
}

export default TableContainerMaster;
