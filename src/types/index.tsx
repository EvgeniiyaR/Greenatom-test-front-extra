import { ChangeEvent, FormEvent, ReactNode } from "react";

export interface IProps {
  isLoggedIn?: boolean;
  element?: ReactNode;
  handleRegister?: (event: FormEvent<HTMLFormElement>) => void;
  handleLogin?: (event: FormEvent<HTMLFormElement>) => void;
  isEmpty?: boolean;
  value?: string;
  type?: 'text' | 'email' | 'url' | 'password';
  typeButton?: 'submit' | 'button';
  id?: number;
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
  title?: string;
  author?: string;
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

export interface IEdit {
  title: string,
  text: string,
  url: string
}

export interface IArticle {
  title: string;
  text: string;
  author: string;
  url: string;
  email: string;
}