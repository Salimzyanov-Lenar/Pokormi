import React from 'react';
import '../background.css';
import '../header.css';
import backgroundImage from '../image/cat_back.jpg'; // Путь к фоновому изображению

const Background = () => {
  return (
    <div className="background">
      <img src={backgroundImage} alt="Background" className="background-image custom-shape" />
      <div className="email-container">
        <p className="email-text">pokormiteam@gmail.com</p>
      </div>
      <div className="overlay">
        <p className="overlay-text">СМОТРИ</p>
        <p className="overlay-text overlay-text2">И КОРМИ</p>
        <button className="button">ПЕРЕЙТИ К ТРАНСЛЯЦИЯМ</button>
      </div>
      <div className="custom-text">
        <p className="text-line">ВСЕ</p>
        <p className="text-line">КОРМУШКИ</p>
        <p className="text-line">НА КАРТЕ</p>
      </div>
      <div className="map-info">
        <p className="map-text">Нажмите на карту, чтобы узнать где находятся наши кормушки или ближайший приют.</p>
      </div>
    </div>
  );
};

export default Background;
