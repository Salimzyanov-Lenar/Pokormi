//// App.js
//import React from 'react';
//import './App.css';
//import Header from './components/Header';
//import Home from './components/Home';
//import Menu from './components/Menu';
//
//function App() {
//  return (
//       <div className="App">
//            <Header />
//            <Home />
//       </div>
//  );
//}
//
//export default App;

// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Дополнительные маршруты */}
      </Routes>
    </div>
  );
}

export default App;
