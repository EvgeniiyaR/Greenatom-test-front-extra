import { ChangeEvent, FormEvent, ReactNode } from "react";

export interface IProps {
  type?: 'text' | 'email' | 'url' | 'password';
  typeButton?: 'submit' | 'button';
  value?: string;
  id?: number;
  name?: string;
  text?: string;
  children?: ReactNode;
  label?: string;
  title?: string;
  author?: string;
  url?: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
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