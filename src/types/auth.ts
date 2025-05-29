export type User = {
  id: string;
  name: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export type LoginUserInput = {
  email: string;
  password: string;
};

export type AuthResponse = {
  access_token: string;
  status: number;
  token_type: string;
  message: string;
  name: string;
  role: string;
};
