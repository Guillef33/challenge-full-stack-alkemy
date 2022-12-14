import React from 'react'

import SelectorDeCategorias from "./SelectorDeCategorias";

import {
  Button,
} from "@mui/material";

function FilterButtons( {filterEgresos, filterIngresos, showAll}) {

  return (
    <ul className="flex-container-table">
        <Button onClick={filterIngresos}>Ver solo ingresos</Button>
        <Button onClick={filterEgresos}>Ver solo egresos</Button>
        <Button onClick={showAll}>Ver todo</Button>
        <SelectorDeCategorias />
    </ul>  
    )
}

export default FilterButtons