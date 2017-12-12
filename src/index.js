import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './Components/App';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

//Not <Routes /> because it is NOT a component
ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
