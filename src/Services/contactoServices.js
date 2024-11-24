import axios from "./axioServices";

export function PostMensaje(body) {
  return axios.post("insertarMensaje", body);
}
