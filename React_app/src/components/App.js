import React, { Component } from "react";
import { render } from "react-dom";
import { YMaps, Map } from 'react-yandex-maps';
import axios from 'axios';
import YmapTag from './YmapTag.jsx';


function App() {
    return (
    <div>
        <YmapTag/>
    </div>
    )
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);