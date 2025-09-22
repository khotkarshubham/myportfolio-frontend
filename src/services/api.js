// frontend/src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000/api",
});

// Utility to set or clear Authorization header globally
export const setToken = (token) => {
  API.defaults.headers.common["Authorization"] = token
    ? `Bearer ${token}`
    : "";
};

export default API;