import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/users/register';
import Login from './components/users/login';
import Logout from './components/users/logout';
import SingleContact from './components/contact/singleContact';
import Create from './components/contact/create';
import Edit from './components/contact/edit';
import Delete from './components/contact/delete';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:slug" element={<Edit />} />
        <Route path="/delete/:slug" element={<Delete />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/:slug" element={<SingleContact />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
