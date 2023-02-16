import axios from "axios";
import { MessageResType, UserType } from "../../../shared/api";
import { BACKEND_URL } from "../../../shared/constants/backend";

export type RegistrationBodyType = {
  name: string;
  email: string;
  password: string;
};

export const registrationRequest = ({ name, email, password }: RegistrationBodyType) => {
  return axios.post<MessageResType>(`${BACKEND_URL}/api/registration`, { name, email, password });
};

export type LoginBodyType = {
  email: string;
  password: string;
};

export type LoginResType = { accessToken: string; user: UserType };

export const loginRequest = ({ email, password }: LoginBodyType) => {
  return axios.post<LoginResType>(
    `${BACKEND_URL}/api/login`,
    {
      email,
      password,
    },
    { withCredentials: true }
  );
};

export const forgotPasswordRequest = ({ email }: { email: string }) => {
  return axios.post<MessageResType>(
    `${BACKEND_URL}/api/resetPassword`,
    {
      email,
    },
    { withCredentials: true }
  );
};

export const logoutRequest = () => {
  return axios.post<MessageResType>(`${BACKEND_URL}/api/logout`, {}, { withCredentials: true });
};

export const checkAuthRequest = () => {
  return axios.get<LoginResType>(`${BACKEND_URL}/api/refresh`, { withCredentials: true });
};
