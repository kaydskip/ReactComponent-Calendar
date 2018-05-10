import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

import './App.css';
import { Button } from 'reactstrap';
import Cal from './Cal.js';

import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {
  render() {
    return (
      <div>

<Cal />



      </div>
    );
  }
}

export default App;
