import { Container, Box, Typography } from "@mui/material";
import React from "react";

function SobreNosotros() {
  return (
    <Box className="sobre-nosotros-container">
      <Typography variant="h4">
        Las Herramientas que te ayudan a mejorar tu contabilidad
      </Typography>
      <Typography variant="h5">Tu contabilidad actualizada</Typography>
      <Typography variant="book1">
        Holded actualiza tus cuentas al instante cada vez que tenga lugar
        cualquier tipo de transacción en tu empresa. Sabrás dónde va cada
        céntimo Con el estado de Pérdidas y Ganancias de Holded podrás analizar
        la evolución de tus ingresos y gastos filtrando los resultados.{" "}
      </Typography>
      <Typography variant="h5">
        El Balance de tu empresa en tiempo real
      </Typography>
      <Typography variant="book1">
        Conoce el estado de tus activos y deudas en tiempo real para saber de
        forma clara y transparente la situación financiera de tu empresa.
      </Typography>
      <Typography variant="h5">
        {" "}
        Tus cuentas de gastos y de ventas al detalle{" "}
      </Typography>
      <Typography variant="book1">
        Asigna tus cuentas de gastos y de ventas a contactos, productos o a
        facturas y analízalas detalladamente con nuestros informes. Sincroniza
        todos tus bancos Visualiza claramente la evolución de todas tus cuentas
        bancarias sin salir de Holded, desde la sección ‘Bancos’.
      </Typography>{" "}
      <Typography variant="h5">Evita sorpresas con tu liquidez</Typography>
      <Typography variant="book1">
        Holded actualizará constantemente la base de datos de tu Cash Flow para
        que conozcas la liquidez que tienes.
      </Typography>
    </Box>
  );
}

export default SobreNosotros;
