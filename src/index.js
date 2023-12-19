import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MessageOptions from './MessageOptions';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddContact from './AddContact';
import LogIn from './LogIn';
import SignUp from './SignUp';
import MainPage from './MainPage';
import CreatedUser from './CreatedUser';
import ResetPassword from './ResetPassword';
import Settings from './Settings';
import Chat3 from './Chat3';
import Conversations2 from './Conversations2';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/message-options" element={<MessageOptions />} />
      <Route path="/add-contact" element={<AddContact />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signedup" element={<CreatedUser />} />
      <Route path="/home" element={<MainPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/chat3" element={<Chat3 />} />
      <Route path="/convo2" element={<Conversations2 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();