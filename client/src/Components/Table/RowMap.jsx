import React, { useContext, useState, useEffect } from 'react'

import { Button, TableFooter, TableCell, TableRow } from '@mui/material'

import TableCard from './TableCard'

import { FacturasContext } from '../../Context/FacturasContext';

function RowMap( {lista} ) {
  
  const {handleExport,sumarMonto, total, setTotal} = useContext(FacturasContext)
        

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