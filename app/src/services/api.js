import axios from "axios";

const api = axios.create({
  baseURL: "https://excel2json-server.vercel.app/",
});

export default api;