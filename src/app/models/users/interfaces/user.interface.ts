export interface UserLogin {
  displayName: string;
  email: string;
  password: string;
}

export interface UserRegister extends UserLogin {
  displayName: string;
}

export interface User {
  id: string;
  email: string;
  displayName: string;
  phoneNumber: string | null;
}
