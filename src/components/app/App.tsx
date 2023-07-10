import React, { useContext, useEffect } from 'react';
import './App.css';
import Header from '../header/Header';
import AppStore from '../../stores/AppStore';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from '../not-found/NotFound';
import Register from '../register/Register';
import Login from '../login/Login';
import Main from '../main/Main';
import UserCurrentContext from '../../contexts/UserCurrentContext';
import { inject, observer } from 'mobx-react';
import Article from '../article/Article';

const App = inject('store')(observer(() => {
  const currentUser = useContext(UserCurrentContext);
  const { isLoggedIn } = AppStore;

  return (
    <UserCurrentContext.Provider value={currentUser}>
      <div className="body">
          <div className="page">
            <Header />
            <Routes>
              <Route path="/" element={!!isLoggedIn ? <Main /> : <Navigate to="/login" replace /> } />
              {!!isLoggedIn ?
              <Route path="*" element={<Navigate to="/" replace />} />
              :
              <>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </>
              }
              <Route path="*" element={<NotFound />} />
              <Route path='/articles/:id' element={<Article />} />
            </Routes>
        </div>
      </div>
    </UserCurrentContext.Provider>
  );
}));

export default App;
