export interface User {
  id: string;
  name: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginUserInput {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  status: number;
  token_type: string;
  message: string;
  name: string;
  role: string;
}
