import axios from "axios";

export const facturasAPI = axios.create({
  baseURL: "http://localhost:3050",
});
