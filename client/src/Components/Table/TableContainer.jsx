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

import SelectorDeCategorias from "./SelectorDeCategorias";

import Swal from "sweetalert2";
function TableContainerMaster() {
  const {
    filterEgresos,
    filterIngresos,
    showAll,
    showIngresos,
    showEgresos,
    listaFacturas,
    editFactura,
    ingresos,
    egresos,
    showModal,
    setShowModal,
    showComida,
    filterComidas,
    comidas,
    setComidas,
    categorias,
    categoria,
    setCategorias,
    setCategoria,
    selectCategoria,
    categoriaSeleccionada,
    setCategoriaSeleccionada,
    dataFilterCategory,
    filterCategory,
    showDataFilterCategory,
    filterWithCategory,
  } = useContext(FacturasContext);



  console.log(comidas)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">
              <Button onClick={filterIngresos}>Ver solo ingresos</Button>
            </TableCell>
            <TableCell align="right">
              <Button onClick={filterEgresos}>Ver solo egresos</Button>
            </TableCell>
            <TableCell align="right">
              <Button onClick={showAll}>Ver todo</Button>
            </TableCell>

            <SelectorDeCategorias />

          </TableRow>

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
          (showIngresos || showEgresos ) && <RowMap lista={showIngresos ? ingresos : egresos} editFactura={editFactura} />
        }
        {/* Si no estan activos ningún filtro mostras todos los datos */}
        {
          (!showIngresos && !showEgresos && !showDataFilterCategory )  && <RowMap lista={listaFacturas} editFactura={editFactura} />
        }
        {
          showDataFilterCategory && <RowMap lista={dataFilterCategory} editFactura={editFactura} />
        }

        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableContainerMaster;
