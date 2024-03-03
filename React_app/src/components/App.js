import React, { Component } from "react";
import { render } from "react-dom";
import { YMaps, Map } from 'react-yandex-maps';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=1971215f-d82a-448e-ab23-6e18081c7f64&lang=ru_RU";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.ymaps.ready(() => {
        var map = new window.ymaps.Map("map", {
          center: [55.76, 37.64],
          zoom: 10,
          controls: []
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
