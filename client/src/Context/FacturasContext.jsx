import React, { useState, createContext, useEffect } from "react";

import Axios from "axios";

import Swal from "sweetalert2";

import * as XLSX from "xlsx";

import { read, writeFileXLSX } from "xlsx";

export const FacturasContext = createContext(null);

const FacturasProvider = (props) => {
  const [ingresos, setIngresos] = useState([]);
  const [egresos, setEgresos] = useState([]);
  const [listaFacturas, setListaFacturas] = useState([]);
  const [comida, setComida] = useState([]);

  const [showIngresos, setShowIngresos] = useState(false);
  const [showEgresos, setShowEgresos] = useState(false);

  /* Flags para mostrar una cosa u otra filtrada por categoria */
  const [filterCategory, setFilterCategory] = useState("");
  const [dataFilterCategory, setDataFilterCategory] = useState([]);
  const [showDataFilterCategory, setShowDataFilterCategory] = useState(false);

  const [categorias, setCategorias] = useState([
    "entretenimiento",
    "hogar",
    "comida",
  ]);
  const [categoria, setCategoria] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState([]);

  const [showCategoria, setShowCategoria] = useState(false);

  /* Factura seleccionada */
  const [selectFacturaEdit, setSelectFacturaEdit] = useState([]);

  const [ingresosMonto, setIngresosMonto] = useState();
  const [egresosMonto, setEgresosMonto] = useState();
  const [totalMonto, setTotalMonto] = useState();

  function cancelarTurno(id) {
    Axios.delete(`http://localhost:3050/delete/${id}`, {}).then((response) => {
      Swal.fire({
        title: "Factura eliminada",
        text: "Excelente, ya no la veras en la lista",
        icon: "danger",
        confirmButtonText: "Seguir",
      });
      const newList = listaFacturas.filter((item) => item.id !== id);
      setListaFacturas(newList);
    });
  }

  const getFacturas = (e) => {
    Axios.get("http://localhost:3050/facturas").then((response) => {
      setListaFacturas(response.data);
    });
  };

  const getIngresos = (e) => {
    Axios.get("http://localhost:3050/facturas").then((response) => {
      const ingresos = response.data.filter(
        (ingreso) => ingreso.tipo === "ingreso"
      );
      const egresos = response.data.filter(
        (egresos) => egresos.tipo === "egreso"
      );
      setEgresos(egresos);
      setIngresos(ingresos);
      localStorage.setItem("ingresos", JSON.stringify(ingresos));
      localStorage.setItem("egresos", JSON.stringify(egresos));
    });
  };

  const filterIngresos = () => {
    let listado = listaFacturas.filter((ingreso) => ingreso.tipo === "ingreso");
    setShowIngresos(!showIngresos);
    setShowEgresos(false);
    setShowDataFilterCategory(false);
    setIngresos(listado);
    return listado;
  };

  const filterEgresos = () => {
    let listado = listaFacturas.filter((egreso) => egreso.tipo === "egreso");

    setShowEgresos(!showEgresos);
    setShowIngresos(false);
    setShowDataFilterCategory(false);
    setEgresos(listado);

    return listado;
  };

  // Categorias

  const filterWithCategory = (category) => {
    let listado = listaFacturas.filter((data) => data.categoria === category);

    setShowEgresos(false);
    setShowIngresos(false);
    setShowDataFilterCategory(true);
    setDataFilterCategory(listado);
    return;
  };

  const selectCategoria = (valorDeCategoria) => {
    let categoriaSeleccionada = listaFacturas.filter(
      (seleccionada) => seleccionada.categoria === valorDeCategoria
    );
    return categoriaSeleccionada;
  };

  const filterCategoria = () => {
    let listado = listaFacturas.filter(
      (categoria) => categoria.tipo === categoriaSeleccionada
    );
    setCategoriaSeleccionada(listado);
  };

  const getComidas = (e) => {
    Axios.get("http://localhost:3050/categoria-hogar").then((response) => {
      setComidas(response.data);
    });
  };

  const showAll = () => {
    setShowEgresos(false);
    setShowIngresos(false);
    setShowDataFilterCategory(false);
  };

  const updateFactura = (id, form) => {
    const concepto = form.concepto;
    const monto = form.monto;
    const tipo = form.tipo;
    const fecha = form.fecha;
    const categoria = form.categoria;

    Axios.put(`http://localhost:3050/update/${id}`, {
      concepto: concepto,
      fecha: fecha,
      monto: monto,
      tipo: tipo,
      categoria: categoria,
      id: id,
    }).then((response) => {
      Swal.fire({
        title: "Editaste tu factura",
        text: "Excelente, ya puedes verla actualizadda en la lista",
        icon: "success",
        confirmButtonText: "Seguir",
      });
    });
  };

  // Exportar como XLS
  const handleExport = () => {
    let wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(lista);

    XLSX.utils.book_append_sheet(wb, ws, "ListaFacturas1");

    XLSX.writeFile(wb, "ListaFacturas.xlsx");
  };

  let [total, setTotal] = useState(0);

  const sumarMonto = (lista) => {
    const monto = lista.map((factura) => factura.monto);
    const sumarFactura = monto.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    setTotal(sumarFactura);
  };

  useEffect(() => {
    getFacturas();
  }, []);

  useEffect(() => {
    getIngresos();
  }, []);



  return (
    <FacturasContext.Provider
      value={{
        ingresos,
        setIngresos,
        egresos,
        setEgresos,
        cancelarTurno,
        showAll,
        getFacturas,
        filterIngresos,
        filterEgresos,
        listaFacturas,
        updateFactura,
        showIngresos,
        showEgresos,
        categoria,
        categorias,
        selectCategoria,
        setCategoria,
        setCategorias,
        categoriaSeleccionada,
        setCategoriaSeleccionada,
        showCategoria,
        setShowCategoria,
        filterWithCategory,
        dataFilterCategory,
        filterCategory,
        showDataFilterCategory,
        setSelectFacturaEdit,
        selectFacturaEdit,
        handleExport,
        sumarMonto,
        total,
        setTotal,
        ingresosMonto,
        getIngresos,
      }}
    >
      {props.children}
    </FacturasContext.Provider>
  );
};

export default FacturasProvider;
