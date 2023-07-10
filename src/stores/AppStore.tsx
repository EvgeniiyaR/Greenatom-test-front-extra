import { ChangeEvent, FormEvent } from "react";
import { makeAutoObservable } from "mobx";
import { IEdit, ILogin, IRegister } from "../types";
import UserStore from "./UserStore";
import ArticleStore from "./ArticleStore";

class AppStore {
  public currentUser = UserStore;
  public currentArticle = ArticleStore;

  public isNotDataCheck: boolean = false;
  public isEdit: boolean = false;
  public isAdd: boolean = false;
  public isLoggedIn: number = this.getisLoggedIn();
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
  public dataArticle: IEdit = {
    title: '',
    text: '',
    url: ''
  };

  constructor() {
    makeAutoObservable(this);
    this.root = document.querySelector('#root') as HTMLElement;
  }

  private getArticles() {
    let articles;
    const articleList = localStorage.getItem('articleList');
    if (articleList) {
      articles = JSON.parse(articleList);
    }

    return articles;
  }

  private getisLoggedIn() {
    let logged;
    if (!localStorage.getItem('isLoggedIn')) {
      localStorage.setItem('isLoggedIn', String(0))
      logged = 0;
    } else {
      logged = Number(localStorage.getItem('isLoggedIn'));
    }

    return logged;
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

  public handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;
    this.dataArticle = {
      ...this.dataArticle,
      [name]: value
    };
  }

  public handleLogin = () => {
    if (this.currentUser.email === this.dataLogin.email && this.currentUser.password === this.dataLogin.password) {
      this.isLoggedIn = 1;
      localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
      this.isNotDataCheck = false;
    } else {
      this.isNotDataCheck = true;
    }
    this.dataLogin = {
      email: '',
      password: ''
    }
  }

  public handleRegister = () => {
    this.currentUser.password = this.dataRegister.password;
    this.currentUser.email = this.dataRegister.email;
    this.currentUser.firstName = this.dataRegister.firstName;
    this.currentUser.lastName = this.dataRegister.lastName;
    localStorage.setItem('email', this.currentUser.email);
    localStorage.setItem('firstName', this.currentUser.firstName);
    localStorage.setItem('lastName', this.currentUser.lastName);
    this.dataRegister = {
      email: '',
      password: '',
      repeatPassword: '',
      firstName: '',
      lastName: ''
    };
  }

  public handleEdit = () => {
    this.isEdit = false;
    this.currentArticle.title = this.dataArticle.title;
    this.currentArticle.text = this.dataArticle.text;
    this.currentArticle.url = this.dataArticle.url;
  }

  public handleAdd = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.isAdd = false;
    this.currentArticle.title = this.dataArticle.title;
    this.currentArticle.text = this.dataArticle.text;
    this.currentArticle.url = this.dataArticle.url;
    this.currentArticle.author = `${this.currentUser.firstName} ${this.currentUser.lastName}`;
    this.currentArticle.email = this.currentUser.email || '';
    const articles = this.getArticles();
    articles.push(this.currentArticle);
    localStorage.setItem('articleList', JSON.stringify(articles));
  }

  public handleLogout = () => {
    this.isLoggedIn = 0;
    localStorage.setItem('isLoggedIn', String(0));
  }

  public handleClickEdit = () => {
    this.isEdit = true;
    this.dataArticle.title = this.currentArticle.title;
    this.dataArticle.text = this.currentArticle.text;
    this.dataArticle.url = this.currentArticle.url;
  }

  public handleClickAdd = () => {
    this.isAdd = true;
    this.dataArticle = {
      title: '',
      text: '',
      url: '',
    }
  }

}

export default new AppStore();
