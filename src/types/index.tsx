import { ChangeEvent, FormEvent, ReactNode } from "react";

export interface IProps {
  isLoggedIn?: boolean;
  element?: ReactNode;
  handleRegister?: (event: FormEvent<HTMLFormElement>) => void;
  handleLogin?: (event: FormEvent<HTMLFormElement>) => void;
  isEmpty?: boolean;
  value?: string;
  type?: 'text' | 'email' | 'url' | 'password';
  typeButton?: 'submit';
  id?: string;
  placeholder?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  text?: string;
  children?: ReactNode;
  label?: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  dataLogin?: ILogin;
  dataRegister?: IRegister;
}

export interface ILogin {
  email: string,
  password: string
}

export interface IRegister {
  email: string,
  password: string,
  repeatPassword: string,
  firstName: string,
  lastName: string
}