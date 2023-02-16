export type MessageResType = {
  message: string;
};

export type UserType = {
  id: string;
  photo: string;
  name: string;
  email: string;
  password: string;
  about: string;
  isConfirmed: boolean;
  isBlocked: boolean;
  isAdmin: boolean;
};
