// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../menu.css';
const Menu = () => {
  return (
    <div className="menu">
      <Link to="/" className="menu-item">Главная</Link>
      <Link to="/about" className="menu-item">Карта</Link>
         <Link to="/about" className="menu-item">Кормушки</Link>
         <Link to="/about" className="menu-item">О проекте</Link>

    </div>
  );
};

export default Menu;
