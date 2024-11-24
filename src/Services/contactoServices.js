import axios from "./axioServices";

export function PostMensaje(body) {
  const autBasic = process.env.VERCEL_ACCESS_TOKEN;
  return axios.post("insertarMensaje", body, {
    headers: {
      Authorization: `Bearer ${autBasic}`,
    },
  });
}
