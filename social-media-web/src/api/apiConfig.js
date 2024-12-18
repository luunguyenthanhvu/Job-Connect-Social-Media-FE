const API_BASE_URL = "http://localhost:8888";

const apiConfig = {
  // auth
  register: `${API_BASE_URL}/api/user-service/auth/registration`,
  login: `${API_BASE_URL}/api/user-service/auth/token`,
  verify: `${API_BASE_URL}/api/user-service/auth/verify`,
  resetPassword: `${API_BASE_URL}/api/user-service/auth/reset-password`,
  resendVerifyCode: `${API_BASE_URL}/api/user-service/auth/resend-verify-code`,

  // user service
  // Applicant
  createApplicant: `${API_BASE_URL}/api/user-service/applicant/create`,

  // employer
  createEmployer: `${API_BASE_URL}/api/user-service/employer/create`,

  userBasicInfo: `${API_BASE_URL}/api/aggregation-service/query/user-basic-info?postId={postId}`,

  // job page
  listJobPost: `${API_BASE_URL}/api/aggregation-service/query/job-list`,
  getJobDetails: `${API_BASE_URL}/api/post-service/job/get/job-detail`,
};

export default apiConfig;
