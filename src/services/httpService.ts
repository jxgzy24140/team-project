import { REQUEST_BASE_URL } from "@/utils/appConfig";
import axios from "axios";
import authService from "./auth/authService";

const http = axios.create({
  baseURL: REQUEST_BASE_URL,
  timeout: 30000,
});

http.interceptors.request.use(
  function (config) {
    if (sessionStorage.getItem("accessToken")) {
      config.headers["Authorization"] =
        "Bearer " + sessionStorage.getItem("accessToken");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await authService.refreshToken();
        if (newAccessToken && newAccessToken.success && newAccessToken.data) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originalRequest);
        } else {
          throw new Error("Refresh token is not valid");
        }
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
export default http;
