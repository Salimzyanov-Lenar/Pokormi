import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
import WebFont from 'webfontloader';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Unigeo64 Trial']
      }
    });
  }, []);

  return (
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  );
};

root.render(<Index />);

reportWebVitals();
