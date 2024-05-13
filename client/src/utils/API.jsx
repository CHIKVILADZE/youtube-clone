// axios.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8800/api",
});

export default API;
