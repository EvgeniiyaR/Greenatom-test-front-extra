import './Button.css';
import { IProps } from '../../types/';

function Button({ text, typeButton }: IProps) {
  return (
    <button className='form__button' type={typeButton}>{text}</button>
  )
}

export default Button;