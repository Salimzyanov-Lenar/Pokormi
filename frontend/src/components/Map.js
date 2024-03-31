import React from 'react';
import YmapTag from './YmapTag.jsx';
import '../map.css';

const Map = () => {
 const mapStyles = {
    width: '70%', // или другой размер
    height: '300px', // или другой размер
    position: 'relative', // можно опустить или изменить на absolute в зависимости от нужд
    marginTop: '50px', // отступ сверху, если нужно
  };
  return (
        <div className="map">
                <h1>я карта)</h1>
            <YmapTag mapStyles={mapStyles} />
        </div>
  );
};

export default Map;
