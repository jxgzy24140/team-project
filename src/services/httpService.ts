import { REQUEST_BASE_URL } from "@/utils/appConfig";
import axios from "axios";

const http = axios.create({
  baseURL: REQUEST_BASE_URL,
  timeout: 30000,
});

http.interceptors.request.use(
  function (config) {
    if (localStorage.getItem("accessToken")) {
      config.headers["Authorization"] =
        "Bearer " + localStorage.getItem("accessToken");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (res) => {
    console.log(res?.response?.status);
    window.location.href = "/logout";
  }
);

export default http;
