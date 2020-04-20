import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/New/New.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    <React.StrictMode>
    <App/>
  </React.StrictMode>,
  
  document.getElementById('root')
  
);


  serviceWorker.unregister();