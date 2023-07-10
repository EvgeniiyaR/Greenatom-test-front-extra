import { inject, observer } from "mobx-react";
import Button from "../button/Button";
import AuthForm from "../form/AuthForm";
import Input from "../input/Input";
import AppStore from "../../stores/AppStore";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";

const Register = inject('store')(observer(() => {
  const { handleRegister, handleChangeRegister, dataRegister } = AppStore;
  const navigate = useNavigate();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleRegister();
    navigate('/login');
  };

  return (
    <AuthForm text='Регистрация' name='register' onSubmit={(e) => onSubmit(e)}>
      <Input type='text' label='Введите имя' onChange={handleChangeRegister} name='firstName' value={dataRegister?.firstName} />
      <Input type='text' label='Введите фамилию' onChange={handleChangeRegister} name='lastName' value={dataRegister?.lastName} />
      <Input type='email' label='Введите email' onChange={handleChangeRegister} name='email' value={dataRegister?.email} />
      <Input type='password' label='Введите пароль' onChange={handleChangeRegister} name='password' value={dataRegister?.password} />
      <Button typeButton='submit' text='Зарегистрироваться' />
    </AuthForm>
  )
}));

export default Register;