import axios from "axios";

const api = axios.create({
  baseURL: "https://excel2json.vercel.app/",
});

export default api;