// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../menu.css';


const Menu = () => {
    const handleNavigation = (e) => {
        e.preventDefault();
        const targetSection = e.target.getAttribute('href').slice(1); // Убираем # из id
        const section = document.getElementById(targetSection);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="menu">
            <a href="#home" className="menu-item" onClick={handleNavigation}>Главная</a>
            <a href="#map" className="menu-item" onClick={handleNavigation}>Карта</a>
            <a href="#feed" className="menu-item" onClick={handleNavigation}>Кормушки</a>
            <a href="#about" className="menu-item" onClick={handleNavigation}>О проекте</a>
        </div>
  );
};


export default Menu;
