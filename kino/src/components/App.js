import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SelectSeats from './SelectSeats';
import Confirmation from './Confirmation';
import Form from './Form';
import { BrowserRouter as Router ,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header></Header>
          <Route exact path="/" component={Form} />
          <Route path="/seats" component={SelectSeats} />
          <Route path="/confirm" component={Confirmation} />
        </Router>
      </>
    );
  }
}

export default App;
