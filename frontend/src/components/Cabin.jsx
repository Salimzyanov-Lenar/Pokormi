import React from 'react';
import '../cabin.css';

function Cabin({ title, address, imageSrc }) {
    return (
    <div className="card-container">
        <div className="Cabin-image-container">
            {imageSrc && <img src={imageSrc} alt="Cabin" />}
        </div>
        <div className="card-content">
            <div className="card-title">{title}</div>
            <div className="card-address">{address}</div>
            <button className="support-button">Перейти</button>
        </div>
    </div>
  );
}

// <Cabin title="КОШКИН ДОМ" address="г. Самара, ул. Арбузовская 57" buttonText="Поддержать" />

export default Cabin;