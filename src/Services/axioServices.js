import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    config.baseURL = "http://localhost:3500/"; // api Node-red Node.js
    // config.baseURL ="https://back-pagina-personal-eciw-k1gi4ape4-antirap3gmailcoms-projects.vercel.app/"; // api Node-red Node.js
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(null, (error) => {
  return Promise.reject(error);
});

export default axios;
