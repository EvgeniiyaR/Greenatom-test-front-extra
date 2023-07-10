import { ChangeEvent, FormEvent } from "react";
import { makeAutoObservable } from "mobx";
import { ILogin, IRegister } from "../types";
import { useNavigate } from "react-router-dom";

class AppStore {
  public isLoggedIn: boolean = Boolean(localStorage.getItem('isLoggedIn')) || false;
  private root: HTMLElement;
  public dataLogin: ILogin = {
    email: '',
    password: ''
  };
  public dataRegister: IRegister = {
    email: '',
    password: '',
    repeatPassword: '',
    firstName: '',
    lastName: ''
  };

  constructor() {
    makeAutoObservable(this);
    this.root = document.querySelector('#root') as HTMLElement;
  }

  private generateColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  public changeColor = () => {
    this.root.style.backgroundColor = `${this.generateColor()}`;
    this.root.style.transition = 'background-color 1s';
    this.root.style.overflowY = 'scroll';
  };

  public handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    this.dataLogin = {
      ...this.dataLogin,
      [name]: value
    };
  }

  public handleChangeRegister = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    this.dataRegister = {
      ...this.dataRegister,
      [name]: value
    };
  }

  public handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (localStorage.getItem('email') === this.dataLogin.email && localStorage.getItem('password') === this.dataLogin.password) {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
    }
    this.dataLogin = {
      email: '',
      password: ''
    }
  }

  public handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('email', this.dataRegister.email);
    localStorage.setItem('password', this.dataRegister.password);
    localStorage.setItem('firstName', this.dataRegister.firstName);
    localStorage.setItem('lastName', this.dataRegister.lastName);

    this.dataRegister = {
      email: '',
      password: '',
      repeatPassword: '',
      firstName: '',
      lastName: ''
    };

  }
}

export default new AppStore;
