import React, { useState, useEffect } from "react";
import axios from 'axios';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const YmapTag = () => {
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

  return (
    <YMaps>
      <div>
        <Map
            style={{ width: '30%', height: '55%', position:'absolute', top:'79%', left:'15%', marginTop:"200px"}}
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
