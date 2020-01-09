import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Form from './components/Form';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import SelectSeats from './components/SelectSeats';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Form />, document.getElementById('form'));
ReactDOM.render(<SelectSeats />, document.getElementById('selectSeats'));
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
