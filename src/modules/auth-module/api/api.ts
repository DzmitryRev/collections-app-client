import axios from "axios";
import { BACKEND_URL } from "../../../shared/constants/backend";

export type RegistrationBodyType = {
  name: string;
  email: string;
  password: string;
};

export type LoginBodyType = {
  email: string;
  password: string;
};

export const registrationRequest = ({ name, email, password }: RegistrationBodyType) => {
  return axios.post(`${BACKEND_URL}/api/registration`, { name, email, password });
};

export const loginRequest = ({ email, password }: LoginBodyType) => {
  return axios.post(`${BACKEND_URL}/api/login`, { email, password });
};
