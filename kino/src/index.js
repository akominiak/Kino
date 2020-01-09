import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Form from './components/Form';
import * as serviceWorker from './serviceWorker';
import SelectSeats from './components/SelectSeats';
import Confirmation from './components/Confirmation';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Form />, document.getElementById('form'));
ReactDOM.render(<SelectSeats />, document.getElementById('selectSeats'));
ReactDOM.render(<Confirmation />, document.getElementById('confirmation'));

serviceWorker.unregister();
