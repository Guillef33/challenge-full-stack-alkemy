import React from "react";

import TableContainerMaster from "../Components/Table/TableContainer";
import MenuMui from "../Components/Header/MenuMui";

function FacturasPage() {
  return (
    <>
      <MenuMui isLogged={true} />
      <TableContainerMaster />
    </>
  );
}

export default FacturasPage;
