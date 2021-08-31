import axios from "axios";

const api = axios.create({
  baseURL: "https://excel2json-server.herokuapp.com/",
});

export default api;