import React, { Component } from "react";
import { render } from "react-dom";
import { YMaps, Map } from 'react-yandex-maps';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: []
    };
  }

  componentDidMount() {
      axios.get('http://localhost:8000/main_page/')
      .then(response => {
        this.setState({ jsonData: response.data });
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });

    const script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=1971215f-d82a-448e-ab23-6e18081c7f64&lang=ru_RU";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.ymaps.ready(() => {
        var map = new window.ymaps.Map("map", {
          center: [53.20,50.174],
          zoom: 10,
          controls: []
        });

        this.state.jsonData.forEach(item => {
          var placemark = new ymaps.Placemark([item.longitude, item.width], {}, {
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
    };
  }

  render() {
    return (
      <div>
        <h1>Pokormi Project</h1>
        <div id="map" className="map-container"></div>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);