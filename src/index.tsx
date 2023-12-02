import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Chat from './pages/Chat';
import Login from './pages/Login';
import List from './pages/List';
import NoAccountLogin from './pages/NoAccountLogin';
import AccountLogin from './pages/AccountLogin';
import NewAccount from './pages/NewAccount';
import './styles/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chat" element={<Chat />} />

        {/* 로그인, 회원가입 선택 페이지 */}
        <Route path="/login" element={<Login />} />

        {/* 채팅 목록 페이지 */}
        <Route path="/list" element={<List />} />

        {/* 비회원 로그인 페이지 */}
        <Route path="/no/account" element={<NoAccountLogin />} />

        {/* 일반회원 로그인 페이지 */}
        <Route path="/account/login" element={<AccountLogin />} />

        {/* 회원가입 페이지 */}
        <Route path="/account" element={<NewAccount />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
