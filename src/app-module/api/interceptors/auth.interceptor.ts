import axios from "axios";
import { dispatch } from "../../../store";
import { API_URL } from "../../../shared/constants/backend";
import { api } from "../../../shared/api/api";
import { logout } from "../../../modules/auth-module";

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem("accessToken", response.data.accessToken);
        return api.request(originalRequest);
      } catch (e) {
        console.log("er");
        dispatch(logout());
      }
    }
    throw error;
  }
);
