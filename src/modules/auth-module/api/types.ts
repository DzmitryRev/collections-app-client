export type RegistrationBodyType = {
  name: string;
  email: string;
  password: string;
};

export type LoginBodyType = {
  email: string;
  password: string;
};

export type LoginResType = { accessToken: string; userId: string; isAdmin: boolean };
