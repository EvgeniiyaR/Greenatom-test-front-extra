import './Login.css';
import { inject, observer } from "mobx-react";
import Button from "../button/Button";
import AuthForm from "../form/AuthForm";
import Input from "../input/Input";
import AppStore from "../../stores/AppStore";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const Login = inject('store')(observer(() => {
  const { handleLogin, handleChangeLogin, dataLogin, isNotDataCheck } = AppStore;
  const navigate = useNavigate();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin();
    navigate('/');
  };

  return (
    <>
      <AuthForm text='Войти' name='login' onSubmit={(e) => onSubmit(e)} >
          <Input type='email' label='Введите email' onChange={handleChangeLogin} name='email' value={dataLogin?.email} />
          <Input type='password' label='Введите пароль' onChange={handleChangeLogin} name='password' value={dataLogin?.password} />
          <Button typeButton='submit' text='Войти' />
      </AuthForm>
        {isNotDataCheck &&
          <p className="form__error">Введите данные, которые указали при регистрации</p>
        }
    </>
    )
}));

 export default Login;