import React from 'react';
import Home from './Home';
import Map from './Map';
import Feeders from './Feeders';
import About from './About';
import '../All_page.css';

const All_page = () => {
    return (
        <div className="allpage">
            <div id="home"><Home /></div>
            <div id="map"><Map /></div>
            <div id="feed"><Feeders /></div>
            <div id="about"><About /></div>
        </div>
  );
};

export default All_page;