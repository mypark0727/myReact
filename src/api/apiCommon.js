import axios from "axios";

const apiCommon = axios.create({
  baseURL: "https://koreanjson.com",
  params: {},
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
apiCommon.interceptors.request.use(
  (config) => {
    // 요청을 보내기 전에 수행할 작업
    // 예를 들어, 토큰을 설정할 수 있습니다.
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 요청 오류가 있는 작업
    return Promise.reject(error);
  },
);

// Add a response interceptor
apiCommon.interceptors.response.use(
  (response) => {
    // 응답 데이터를 처리
    return response;
  },
  (error) => {
    // 응답 오류가 있는 작업
    return Promise.reject(error);
  },
);

export default apiCommon;
