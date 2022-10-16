import React, { useContext, useState, useEffect } from 'react'

import { Button, TableFooter, TableCell, TableRow } from '@mui/material'

import TableCard from './TableCard'

import { FacturasContext } from '../../Context/FacturasContext';

import * as XLSX from "xlsx";

import { read, writeFileXLSX } from "xlsx";



function RowMap( {lista} ) {

  // Exportar como XLS
    const handleExport = () => {
      // console.log(lista)
      let wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(lista) ;

      XLSX.utils.book_append_sheet(wb, ws, "ListaFacturas1");

      XLSX.writeFile(wb, 'ListaFacturas.xlsx');
    }
    
  let [total, setTotal] = useState(0)

  const sumarMonto = ( lista ) => {
    const monto = lista.map(factura => factura.monto)
    
  const sumWithInitial = monto.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
    0);
    setTotal(sumWithInitial)
  }

  useEffect(() => {     
    sumarMonto(lista)
  }, [lista])

  return (
        <>
    {lista.map((item, index) => (

      <TableCard item={item} key={index}/>    
    ))}
      <TableRow>
        <TableCell>Total:</TableCell>
        <TableCell align="right">{total}</TableCell>
        <TableCell align="right"> <Button onClick={handleExport}>Exportar a XLS</Button></TableCell>  
      </TableRow>

    
    </>
  )
}

export default RowMap