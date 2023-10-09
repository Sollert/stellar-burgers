import {ChangeEvent, Dispatch, SetStateAction} from "react";

export type FormInputProps = {
  name: string;
  type: 'password' | 'text' | 'email';
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  icon?: boolean;
}

export type FormInputState = {
  icon: 'ShowIcon' | 'HideIcon';
  type: 'password' | 'text';
};

export type FormInputOnChangeHandler = (
  e: ChangeEvent<HTMLInputElement>,
  setFn: Dispatch<SetStateAction<string>>
) => void;

export type FormInputOnIconClickHandler = (
  setFn: Dispatch<SetStateAction<FormInputState>>
) => void;