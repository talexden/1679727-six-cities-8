import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const TEMPORARY_DATA = {
  host: {
    rating: 4.3,
    isPremium: true,
    price : 123,
    title: 'My Hotel',
    type: 'Room',
    previewImage: 'img/room.jpg',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App host={TEMPORARY_DATA.host}/>
  </React.StrictMode>,
  document.getElementById('root'));
