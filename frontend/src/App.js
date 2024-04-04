import React from 'react';
import './App.css';
import All_page from './components/All_page';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<All_page />} />
      </Routes>
    </div>
  );
}

export default App;
