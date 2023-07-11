import { Link, Route, Routes } from 'react-router-dom';
import './Header.css';
import { inject, observer } from "mobx-react";
import AppStore from '../../stores/AppStore';

const Header = inject('store')(observer(() => {
  const { isLoggedIn, handleLogout, currentUser, handleClickExit, isAdd } = AppStore;

  return (
    <header className="header">
      {!!isLoggedIn ?
      <nav>
        <ul className="header__list">
          <Routes>
            {isAdd &&
            <Route path="/" element={<li><Link className="header__link" onClick={handleClickExit} to="/">Назад</Link></li>} />
            }
            <Route path="/" element={<li><Link className="header__link" to="/login" onClick={handleLogout}>Выйти</Link></li>} />
            <Route path="/articles/:id" element={<li><Link className="header__link" onClick={handleClickExit} to="/">Назад</Link></li>} />
          </Routes>
          <li>{currentUser?.email}</li>
        </ul>
      </nav>
      :
      <nav>
        <ul className="header__list">
          <Routes>
            <Route path="/login" element={<li><Link className="header__link" to="/register">Регистрация</Link></li>} />
            <Route path="/register" element={<li><Link className="header__link" to="/login">Войти</Link></li>} />
            <Route path="*" element=
            {
              <>
                <li><Link className="header__link" to="/register">Регистрация</Link></li>
                <li><Link className="header__link" to="/login">Войти</Link></li>
              </>
            } />
          </Routes>
        </ul>
      </nav>
      }
    </header>
  );
}));

export default Header;