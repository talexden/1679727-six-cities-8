import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const TEMPORARY_DATA = {
  count: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App count={TEMPORARY_DATA.count}/>
  </React.StrictMode>,
  document.getElementById('root'));
