import axios from "axios";

//axios is used to make api calls
const request = axios.create({
  baseURL: "/api/",
  timeout: 500000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",

  },
});
request.interceptors.request.use((config) => {
  return config;
});
request.interceptors.response.use((response) => {
  return response;
});
export default request;
