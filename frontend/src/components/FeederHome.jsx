import React from 'react';
import '../FeederHome.css';


const FeederHome = ({ title, address, imageSrc }) => {
    return (
        <div className="FeederHome-container">
            <div className="FeederHome-image-container">
                {imageSrc && <img src={imageSrc} alt="Feeder" />}
            </div>
            <div className="FeederHome-content">
                <div className='FeederHome-title'> {title} </div>
                <div className='FeederHome-address'> {address} </div>
                <button className="FeederHome-transition-button"> Смотреть </button>
            </div>
        </div>
  );
};
// <FeederHome title="КОРМУШКА 1" address="Парк им. Ю. Гагарина" imageSrc="path_to_your_image.png" />



export default FeederHome;