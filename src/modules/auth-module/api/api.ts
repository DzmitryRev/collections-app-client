import axios from "axios";
import { api, MessageResType } from "../../../shared/api";
import { API_URL } from "../../../shared/constants/backend";
import { LoginBodyType, LoginResType, RegistrationBodyType } from "./types";

export const registrationRequest = ({ name, email, password }: RegistrationBodyType) => {
  return api.post<MessageResType>(`${API_URL}registration`, { name, email, password });
};

export const loginRequest = ({ email, password }: LoginBodyType) => {
  return api.post<LoginResType>(`${API_URL}login`, {
    email,
    password,
  });
};

export const forgotPasswordRequest = ({ email }: { email: string }) => {
  return api.post<MessageResType>(`${API_URL}resetPassword`, {
    email,
  });
};

export const logoutRequest = () => {
  return api.post<MessageResType>(`${API_URL}logout`, {});
};

export const checkAuthRequest = () => {
  return api.get<LoginResType>(`${API_URL}refresh`, { withCredentials: true });
};
