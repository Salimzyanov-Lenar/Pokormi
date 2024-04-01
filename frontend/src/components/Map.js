import React from 'react';
import YmapTag from './YmapTag.jsx';
import InfoCard from './InfoCard.jsx';
import '../map.css';

const Map = () => {
 const mapStyles = {
    width: '731px', // или другой размер
    height: '474px', // или другой размер
    position: 'relative', // можно опустить или изменить на absolute в зависимости от нужд
    marginTop: '50px', // отступ сверху, если нужно
  };
  const handleLinkClick = (event) => {
    event.preventDefault();
    console.log("Ссылка была нажата");
  };

  return (
        <div className="map">
            <div className="Ymap">
                <YmapTag mapStyles={mapStyles} />
            </div>
            <div className="InfoCard-Translations">
                <InfoCard
                    title="Перейти к прямым трансляциям с кормушек"
                    subtitle=""
                    link="#"
                    onLinkClick={handleLinkClick}
                />
            </div>
            <div className="InfoCard-Support">
                <InfoCard
                    title="Поддержать приют или проект"
                    subtitle=""
                    link="#"
                    onLinkClick={handleLinkClick}
                />
            </div>
        </div>
  );
};

export default Map;
