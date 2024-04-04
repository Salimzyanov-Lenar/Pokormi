import React from 'react';
import Home from './Home';
import Map from './Map';
import Feeders from './Feeders';
import About from './About';

const All_page = () => {
  return (
    <div>
        <Home />
        <Map />
        <Feeders />
        <About />
    </div>
  );
};

export default All_page;