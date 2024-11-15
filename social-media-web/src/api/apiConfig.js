const API_BASE_URL = "http://localhost:8888";

const apiConfig = {
  register: `${API_BASE_URL}/api/user-service/auth/register`,
  login: `${API_BASE_URL}/api/user-service/auth/token`,
  verify: `${API_BASE_URL}/api/user-service/auth/verify-account`,

};

export default apiConfig;
