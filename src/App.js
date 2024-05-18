import React, { Component } from 'react';
import './App.css';
import ToDoFeature from './features/ToDo/ToDoFeature';

class App extends Component {

  render() {
    return (
      <div>
        <ToDoFeature />
      </div>
    );
  }
}

export default App;
