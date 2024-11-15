// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8888',
  headers: { 'Content-Type': 'application/json' }
});

// Thêm interceptor cho response
axiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
        // Kiểm tra lỗi 401 Unauthorized
        console.error("Token hết hạn, chuyển hướng đến trang đăng nhập.");
        // Xóa token và điều hướng đến trang đăng nhập
        localStorage.removeItem("token");
        window.location.href = "/login";
      } else if (error.response && error.response.status === 500) {
        console.error("Lỗi server, vui lòng thử lại sau.");
        alert("Lỗi rồi")
        // Thông báo lỗi server
      }
      return Promise.reject(error);
    }
);

export default axiosInstance;
