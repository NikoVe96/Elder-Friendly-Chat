import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Conversations from './Conversations';
import App from './App';
import MessageOptions from './MessageOptions';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddContact from './AddContact';
import Chat from './Chat';
import LogIn from './LogIn';
import SignUp from './SignUp';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/conversations" element={<Conversations />} />
      <Route path="/message-options" element={<MessageOptions />} />
      <Route path="/add-contact" element={<AddContact />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();