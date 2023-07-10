import './AuthForm.css';
import { IProps } from "../../types";

const AuthForm = ({ children, text, name, onSubmit }: IProps) => {
  return (
    <section className="form">
      <h1 className="form__heading">{text}</h1>
      <form className="form__form" name={name} onSubmit={onSubmit} >
        {children}
      </form>
    </section>
  )
};

export default AuthForm;