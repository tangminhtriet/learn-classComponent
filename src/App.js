import React, { Component } from 'react';
import Home from './components/Car';
import './App.css';

class App extends Component {

  color = 'black'
  render() {
    return (
      <div>
        <Home colorDoor={this.color} />

      </div>
    );
  }
}

export default App;
