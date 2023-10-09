export type RegisterUserData = {
  name: string;
  email: string;
  body: string
}

export type ResetTokenRequestData = {
  email: string
}

export type ResetPasswordData = {
  password: string;
  token: string
}

export type LoginUserData = {
  email: string;
  password: string
}

export type PatchUserData = {
  name: string;
  email: string;
  password: string
}