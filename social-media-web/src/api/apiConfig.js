const API_BASE_URL = "http://localhost:8888";

const apiConfig = {
  // auth
  register: `${API_BASE_URL}/api/user-service/auth/registration`,
  login: `${API_BASE_URL}/api/user-service/auth/token`,
  verify: `${API_BASE_URL}/api/user-service/auth/verify`,
  resetPassword: `${API_BASE_URL}/api/user-service/auth/reset-password`,
  resendVerifyCode: `${API_BASE_URL}/api/user-service/auth/resend-verify-code`,

  // user service
};

export default apiConfig;
