import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:5000",
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

export default axiosInstance;
