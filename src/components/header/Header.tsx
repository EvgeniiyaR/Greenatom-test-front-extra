import { Link, Route, Routes } from 'react-router-dom';
import './Header.css';
import { IProps } from '../../types';
import { observer } from 'mobx-react-lite';

const Header = observer(({ isLoggedIn }: IProps) => {
  return (
    <header className="header">
      {isLoggedIn ?
      <h1>
        <Routes>
          <Route path="/" element={<li><Link className="header__link" to="/sign-in">Выйти</Link></li>} />
        </Routes>
      </h1>
      :
      <nav>
        <ul className="header__list">
          <Routes>
            <Route path="/sign-in" element={<li><Link className="header__link" to="/sign-up">Регистрация</Link></li>} />
            <Route path="/sign-up" element={<li><Link className="header__link" to="/sign-in">Войти</Link></li>} />
            <Route path="*" element=
            {
              <>
                <li><Link className="header__link" to="/sign-up">Регистрация</Link></li>
                <li><Link className="header__link" to="/sign-in">Войти</Link></li>
              </>
            } />
          </Routes>
        </ul>
      </nav>
      }
  </header>
  );
})

export default Header;