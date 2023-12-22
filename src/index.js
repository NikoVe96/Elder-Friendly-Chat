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
import Chat from './Chat';
import Conversations from './Conversations';
import SettingsUG from './User Guides/SettingsUG';
import ConversationsUG from './User Guides/ConversationsUG';
import ChatUG from './User Guides/ChatUG';
import UserInfo from './UserInfo';
import AddContactUG from './User Guides/AddContactUG';
import MessageOptionsUG from './User Guides/MessageOptions';

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
      <Route path="/chat" element={<Chat />} />
      <Route path="/conversations" element={<Conversations />} />
      <Route path="/settings-ug" element={<SettingsUG />} />
      <Route path="/conversations-ug" element={<ConversationsUG />} />
      <Route path="/chat-ug" element={<ChatUG />} />
      <Route path="/user-info" element={<UserInfo />} />
      <Route path="/add-contact-ug" element={<AddContactUG />} />
      <Route path="/message-options-ug" element={<MessageOptionsUG />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();