// axios.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://youtube-clone-1i99.onrender.com/api",
  withCredentials: true,
});

export default API;
