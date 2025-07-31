import axios from "axios";

const url_base = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: url_base,
});

export default api;
