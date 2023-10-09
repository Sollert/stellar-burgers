export type InitialState = {
  isRequest: boolean;
  isError: boolean;
  isAuth: boolean;
  user: UserInfoData | null;
}

export type UserInfoData = {
  email?: string;
  name?: string;
  password?: string;
}