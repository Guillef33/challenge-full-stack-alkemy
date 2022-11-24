import { facturasAPI } from "../../../api/facturasApi";
import { setFacturas, startLoadingFacturas } from "./facturasSlice";

export const getFacturas = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingFacturas());

    const { data } = await facturasAPI.get(`/facturas`);
    console.log(data);

    dispatch(
      setFacturas({
        page: page + 1,
        facturas: data,
      })
    );
  };
};
