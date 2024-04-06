import React from 'react';
import '../cabin.css';

function Cabin({ title, address, buttonText }) {
    return (
    <div className="card-container">
        <div className="card-image-container">
            {/* Image or icon can be placed here */}
        </div>
        <div className="card-content">
            <div className="card-title">{title}</div>
            <div className="card-address">{address}</div>
            <button className="support-button">{buttonText}</button>
        </div>
    </div>
  );
}

// <Cabin title="КОШКИН ДОМ" address="г. Самара, ул. Арбузовская 57" buttonText="Поддержать" />

export default Cabin;