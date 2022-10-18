import { Typography } from '@mui/material'
import React, { useContext } from 'react'

import { FacturasContext } from '../../Context/FacturasContext'

function Dashboard() {


  const {handleExport,sumarMonto, total, setTotal} = useContext(FacturasContext)

  console.log(total)

  return (
    <div>
      <Typography variant='book1'>Gastos Hogar</Typography>
      <Typography variant='h4'>{total}</Typography>
    </div>
  )
}

export default Dashboard