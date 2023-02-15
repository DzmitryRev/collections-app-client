import axios from "axios";
import { MessageResType } from "../../../shared/api";
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

export type LoginResType = { accessToken: string; userId: string };

export const loginRequest = ({ email, password }: LoginBodyType) => {
  return axios.post<LoginResType>(`${BACKEND_URL}/api/login`, {
    email,
    password,
  });
};
