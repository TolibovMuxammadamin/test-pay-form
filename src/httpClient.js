import axios from "axios";

export const baseURL = "http://localhost:3030/";

const http = axios.create({
  baseURL,
});

export default http;
