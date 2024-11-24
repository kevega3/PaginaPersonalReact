import axios from "./axioServices";

export function PostMensaje(body) {
  const autBasic = process.env.REACT_APP_APITOKEN;
  return axios.post("insertarMensaje", body, {
    headers: {
      Authorization: `Bearer ${autBasic}`,
    },
  });
}
