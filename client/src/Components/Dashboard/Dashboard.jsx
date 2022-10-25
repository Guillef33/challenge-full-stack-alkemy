import React, { useContext, useState, useEffect } from "react";

import { Box, Typography } from "@mui/material";

import { FacturasContext } from "../../Context/FacturasContext";
import MenuMui from "../Header/MenuMui";

import { Link } from "react-router-dom";

import "./Dashboard.css";
import ResumenDePrecios from "./ResumenDePrecios";
import Listado from "./Listado";

function Dashboard() {
  const { total, setTotal, listaFacturas, ingresos, egresos, ingresosMonto } =
    useContext(FacturasContext);

  console.log(total);

  return (
    <div className="dashboard-card-container">
      <Listado />
      <ResumenDePrecios />
    </div>
  );
}

export default Dashboard;
