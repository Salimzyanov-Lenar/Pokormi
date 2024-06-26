import React, { useState, useEffect } from "react";
import axios from 'axios';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const YmapTag = ({ mapStyles }) => {
    const [jsonData, setJsonData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/main_page/')
        .then(response => {
            setJsonData(response.data);
        })
        .catch(error => {
            console.error('Ошибка при получении данных:', error);
        });
    }, []);
    const combinedStyles = {
        ...mapStyles, // Использование переданных стилей
        // снизу использую стили для рамки
        borderRadius: '2em',
        border: 'solid',
        overflow: 'hidden',
        transform: 'translate3d(0,0,0)',
        WebkitMaskImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)'
    };
    return (
        <YMaps>
            <div>
                <Map
                    style={ combinedStyles }
                    defaultState={{
                        center: [53.20, 50.174],
                        zoom: 10,
                    }}
                >
                {jsonData.map(item => (
                    <Placemark
                    key={item.id}
                    geometry={[item.longitude, item.width]}
                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                    properties={{
                        balloonContent: `
                            <div class="ballon-div">
                            <a href="link for donate:">link</a>
                            <button>Donate for kitty!</button>
                            </div>
                            `
                    }}
                    options={{
                    iconLayout: 'default#image',
                    iconImageHref: 'https://img.icons8.com/?size=48&id=oEg3GHCXzCHK&format=png',
                    iconImageSize: [40, 40],
                    iconImageOffset: [0, 0]
                    }}
                    />
                ))}
        </Map>
      </div>
    </YMaps>
  );
}

export default YmapTag;
