import React from 'react';
import YmapTag from './YmapTag.jsx';
import InfoCard from './InfoCard.jsx';
import Cabin from './Cabin.jsx';
import '../map.css';


const Map = () => {
    const mapStyles = {
        width: '731px',
        height: '474px',
        position: 'relative',
        marginTop: '50px',
    };
    const handleLinkClick = (event) => {
        event.preventDefault();
        console.log("Ссылка была нажата");
    };
    return (
        <div className="map">
            <div className="shelter">
                ПРИЮТЫ
            </div>
            <div className="cabin">
                <Cabin title="КОШКИН ДОМ 1" address="г. Самара, ул. Арбузовская 57" imageSrc="/image/pictest.png"/>
                <Cabin title="КОШКИН ДОМ 2" address="г. Самара, ул. Арбузовская 57" imageSrc="/image/pictest.png"/>
                <Cabin title="КОШКИН ДОМ 3" address="г. Самара, ул. Арбузовская 57" imageSrc="/image/pictest.png"/>
                <Cabin title="КОШКИН ДОМ 4" address="г. Самара, ул. Арбузовская 57" imageSrc="/image/pictest.png"/>
            </div>
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
