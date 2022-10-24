import { Box, Typography } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";

import { FacturasContext } from "../../Context/FacturasContext";
import MenuMui from "../Header/MenuMui";

import "./Dashboard.css";
import ResumenDePrecios from "./ResumenDePrecios";

function Dashboard() {
  const { total, setTotal, listaFacturas, ingresos, egresos, ingresosMonto } =
    useContext(FacturasContext);

  return (
    <>
      <MenuMui isLogged={true} />
      <div className="dashboard-card-container">
        <ResumenDePrecios />
      </div>
    </>
  );
}

export default Dashboard;
