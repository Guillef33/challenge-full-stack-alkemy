import { Box, Typography } from '@mui/material'
import React, { useContext, useState, useEffect  } from 'react'

import { FacturasContext } from '../../Context/FacturasContext';

import './Dashboard.css'

function Dashboard() {

  const {total, setTotal, listaFacturas, ingresos, egresos, ingresosMonto} = useContext(FacturasContext)

  // Aca quisiera tomar como parametros de la funcion sumarMonto las tres listas.

  // console.log(filterIngresos())

  console.log(ingresosMonto)

 const [ingresosDashboard, setIngresosDashboard] = useState(0)
 const [egresosDashboard, setEgresosDashboard] = useState(0)
 const [totalDashboard, setTotalDashboard] = useState(0)

//  console.log(ingresos, egresos, total)

//   const sumarMonto = ( lista ) => {
//     console.log(lista)
//     const monto = lista.map(factura => factura.monto)
//     const sumatoriaTotal = monto.reduce(
//       (previousValue, currentValue) => previousValue + currentValue,
//     0);
//     return sumatoriaTotal;
//   }

// useEffect(() => {
//   setIngresosDashboard(sumarMonto(ingresos))
//   setEgresosDashboard(sumarMonto(egresos))
//   setTotalDashboard(sumarMonto(total))
// }, [])


  return (
    <div className='dashboard-card-container'>
      <Box>
        <Typography variant='book1'>Movimientos Generales</Typography>
        {/* <Typography variant='h4'>{total}</Typography> */}
      </Box>
      <Box>
        <Typography variant='book1'>Ingresos Mes</Typography>
        <Typography variant='h4'>{ingresos}</Typography>
      </Box>
      <Box>
        <Typography variant='book1'>Egresos Mes</Typography>
        {/* <Typography variant='h4'>{egresos}</Typography> */}
      </Box>
    </div>
  )
}

export default Dashboard