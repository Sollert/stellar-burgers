import {FormEvent, ReactNode} from "react";

export type FormBody = {
  name?: string;
  password?: string;
  email?: string;
  token?: string
}

export type OnSubmitHandler = (e: FormEvent<HTMLFormElement>, body: FormBody) => void;

export type FormProps = {
  children: ReactNode;
  title: string;
  buttonText: string;
  body: FormBody;
  onSubmit: OnSubmitHandler;
  text: string;
  link: string;
  linkText: string;
  isLoginPage?: boolean;
}