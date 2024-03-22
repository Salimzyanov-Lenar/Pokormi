// App.js
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu'; // Импортируем компонент меню
import backgroundImage from './image/cat.jpg'; // Путь к фоновому изображению
import logo from './image/logo.png'; // Путь к логотипу

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <Menu />
      </div>
      <div className="background">
        <img src={backgroundImage} alt="Background" className="background-image" class="custom-shape"/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Добавьте маршруты для остальных кнопок */}
      </Routes>
    </div>
  );
}

export default App;
