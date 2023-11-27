import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Request Interceptor");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response Interceptor");
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
