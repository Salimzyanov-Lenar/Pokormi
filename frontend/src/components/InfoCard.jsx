import React from 'react';
import '../InfoCard.css';

const InfoCard = ({ title, subtitle, link, onLinkClick }) => {
    return (
        <div className="info-card">
            <div className="info-header">{title}</div>
            <div className="info-subtitle">{subtitle}</div>
            <a href={link} className="info-link" onClick={onLinkClick}>
                Перейти →
            </a>
        </div>
  );
};

export default InfoCard;
