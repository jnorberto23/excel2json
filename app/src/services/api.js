import axios from "axios";

const api = axios.create({
  baseURL: "http://excel2json-server.herokuapp.com/",
});

export default api;