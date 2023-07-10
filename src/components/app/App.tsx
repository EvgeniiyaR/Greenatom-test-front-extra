import React, { useEffect } from 'react';
import './App.css';
import Header from '../header/Header';
import { observer } from 'mobx-react-lite';
import AppStore from '../../stores/AppStore';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from '../not-found/NotFound';
import Register from '../register/Register';
import Login from '../login/Login';
import Main from '../main/Main';

const App = observer(() => {
  const { handleRegister, handleLogin, handleChangeLogin, handleChangeRegister, dataLogin, dataRegister } = AppStore;
  let { isLoggedIn } = AppStore;

  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      localStorage.setItem('isLoggedIn', String(isLoggedIn));
    }
  }, [isLoggedIn]);

  return (
    <div className="body">
        <div className="page">
          <Header isLoggedIn={isLoggedIn} />
          <Routes>
            {isLoggedIn ? (
            <Route path="/" element={<Main />} />
            ) : (
            <Route path="/" element={<Navigate to="/sign-in" replace />} />
            )}
            <Route path="/sign-up" element={<Register handleRegister={handleRegister} handleChange={handleChangeRegister} dataRegister={dataRegister} isLoggedIn />} />
            <Route path="/sign-in" element={<Login handleLogin={handleLogin} handleChange={handleChangeLogin} dataLogin={dataLogin} isLoggedIn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
  );
})

export default App;
