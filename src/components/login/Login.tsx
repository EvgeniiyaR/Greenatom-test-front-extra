import { IProps } from "../../types";
import Button from "../button/Button";
import AuthForm from "../form/AuthForm";
import Input from "../input/Input";

const Login = ({ handleLogin, handleChange, dataLogin }: IProps) => {
  return (
    <AuthForm text='Войти' name='login' onSubmit={handleLogin} >
      <>
        <Input type='email' label='Введите email' onChange={handleChange} name='email' value={dataLogin?.email} />
        <Input type='password' label='Введите пароль' onChange={handleChange} name='password' value={dataLogin?.password} />
        <Button typeButton='submit' text='Войти' />
      </>
    </AuthForm>
    )
};

 export default Login;