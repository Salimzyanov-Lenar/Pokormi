import React from 'react';
import '../header.css';
import Menu from './Menu'; // Импортируем компонент меню
import logo from '../image/logo2.png'; // Путь к логотипу

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      <Menu />
    </div>
  );
};

export default Header;
