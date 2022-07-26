import axios from "axios";
import { checkStatus } from "./helper/checkStatus";
import { AxiosCanceler } from "./helper/axiosCancel";
import router from "@/router";

const axiosCanceler = new AxiosCanceler();

// 实例化axios
const service = axios.create({
  // 默认地址
  baseURL: process.env.VUE_APP_API_URL,
  // 设置超时时间（15s）
  timeout: 15000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 将当前请求添加到pending中
    axiosCanceler.addPending(config);
    config.headers = {
      "Content-Type": "application/json",
      Authorization: "token123",
      ...config.headers,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 在请求结束后，移除本次请求
    axiosCanceler.removePending(config);
    return response;
  },
  (error) => {
    const { response } = error;
    // 根据响应的错误状态码，做不同的处理
    if (response) return checkStatus(response.status);
    return Promise.reject(error);
  }
);

return service;
