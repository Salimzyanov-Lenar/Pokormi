// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../menu.css';
const Menu = () => {
  return (
    <div className="menu">
      <Link to="/" className="menu-item">Home</Link>
      <Link to="/about" className="menu-item">About</Link>
      {/* Добавьте еще две кнопки */}

    </div>
  );
};

export default Menu;
