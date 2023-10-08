export type requestOptions = {
  method: string;
  body?: string;
  headers: {
    'Content-Type': string;
    Authorization?: string | null
  }
}

export type registerUserData = {
  name: string;
  email: string;
  body: string
}

export type resetTokenRequestData = {
  email: string
}

export type resetPasswordData = {
  password: string;
  token: string
}

export type loginUserData = {
  email: string;
  password: string
}

export type patchUserData = {
  name: string;
  email: string;
  password: string
}