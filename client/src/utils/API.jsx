// axios.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8800/api",
  withCredentials: true, // This ensures cookies are sent with requests
});

export default API;
