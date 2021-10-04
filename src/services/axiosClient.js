import axios from "axios";
import qs from "query-string";

// Setup những cấu hình mặc định cho axios
const axiosClient = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api/",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxMSIsIkhldEhhblN0cmluZyI6IjIxLzAyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0NTQwMTYwMDAwMCIsIm5iZiI6MTYxODI0NjgwMCwiZXhwIjoxNjQ1NTQ5MjAwfQ.5mU9BqyLzddQpvu47bSES-4soazP--DtpP9aqF-U6wQ",
  },
  paramsSerializer: (params) => {
    // Override lại cách axios set params lên url
    return qs.stringify(params, { skipEmptyString: true, skipNull: true });
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const userJson = localStorage.getItem("user");
    if (userJson) {
      const { accessToken } = JSON.parse(userJson);
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    // console.log(response);
    return response.data.content;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    // Sử lý lỗi nếu API thất bại ngay đây nếu muốn

    return Promise.reject(error.response.data.content);
  }
);

export default axiosClient;
