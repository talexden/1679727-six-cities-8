import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const TEMPORARY_HOTEL = {
  rating: 4.5,
};

ReactDOM.render(
  <React.StrictMode>
    <App rating={TEMPORARY_HOTEL.rating}/>
  </React.StrictMode>,
  document.getElementById('root'));
