import React from 'react';
import '../backgroundabout.css';
import '../header.css';
import backgroundImage from '../image/cat_back.jpg'; // Путь к фоновому изображению

const BackgroundAbout = () => {
  return (
    <div className="backgroundAbout">
      <img src={backgroundImage} alt="Background" className="backgroundAbout-image custom-shape" />
      <div className="custom-text-about">
        <p className="text-line-about">ПОКОРМИ</p>
      </div>
    </div>
  );
};

export default BackgroundAbout;
