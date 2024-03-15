import React, { useState, useEffect } from "react";
import axios from 'axios';

const YmapTag = () => {
  const [jsonData, setJsonData] = useState([]);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/main_page/')
      .then(response => {
        setJsonData(response.data);
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
  }, []);

  useEffect(() => {
    if (!mapLoaded) {
      const script = document.createElement("script");
      script.src = "https://api-maps.yandex.ru/2.1/?apikey=1971215f-d82a-448e-ab23-6e18081c7f64&lang=ru_RU";
      script.async = true;
      script.onload = () => {
        setMapLoaded(true);
      };
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (mapLoaded && jsonData.length > 0) {
      window.ymaps.ready(() => {
        var map = new window.ymaps.Map("map", {
          center: [53.20, 50.174],
          zoom: 10,
          controls: []
        });

        jsonData.forEach(item => {
          var placemark = new window.ymaps.Placemark([item.longitude, item.width], {
            balloonContent: `
                            <div class="ballon-div">
                                <a href="link for donate:">link</a>
                                <button>Donate for kitty!</button>
                            </div>
                            `
            },
            {
              iconLayout: 'default#image', // указываем что хотим свою картинку
              iconImageHref: 'https://img.icons8.com/?size=48&id=oEg3GHCXzCHK&format=png', // путь к картинке
              iconImageSize: [40, 40], // размер в пикселях
              iconImageOffset: [0, 0] // отступ от центра
            }, {});
          map.geoObjects.add(placemark);
        });

        // Добавляем кнопки для приближения и отдаления
        map.controls.add('zoomControl', {
          size: 'small', // Размер кнопок
          position: {
            top: 10, // Положение кнопок относительно верхнего края
            right: 10 // Положение кнопок относительно правого края
          }
        });

        // Добавляем кнопку открытия карты
        map.controls.add('fullscreenControl');
        map.controls.add('searchControl');
      });
    }
  }, [jsonData, mapLoaded]);

  return (
    <div>
      <div id="map" className="map-container"></div>
    </div>
  );
}

export default YmapTag;