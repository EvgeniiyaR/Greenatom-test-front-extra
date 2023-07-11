import './Input.css';
import { IProps } from '../../types/';

function Input({ isEmpty, value, label, onChange, name, type }: IProps) {
  return (
    <label className="form__label">
      <input className={`form__input ${isEmpty ? 'shake' : ''}`} defaultValue={value || ''} onChange={onChange} name={name} type={type} placeholder={label} required />
    </label>
  )
}

export default Input;