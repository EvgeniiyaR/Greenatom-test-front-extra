import { IProps } from "../../types";
import Button from "../button/Button";
import AuthForm from "../form/AuthForm";
import Input from "../input/Input";

const Register = ({ handleRegister, handleChange, dataRegister, isLoggedIn }: IProps) => {
  return (
    <AuthForm text='Регистрация' name='register' onSubmit={handleRegister}>
      <Input type='text' label='Введите имя' onChange={handleChange} name='firstName' value={dataRegister?.firstName} />
      <Input type='text' label='Введите фамилию' onChange={handleChange} name='lastName' value={dataRegister?.lastName} />
      <Input type='email' label='Введите email' onChange={handleChange} name='email' value={dataRegister?.email} />
      <Input type='password' label='Введите пароль' onChange={handleChange} name='password' value={dataRegister?.password} />
      <Input type='password' label='Повторите пароль' onChange={handleChange} name='repeatPassword' value={dataRegister?.repeatPassword} />
      <Button typeButton='submit' text='Зарегистрироваться' />
    </AuthForm>
  )
};

export default Register;