import React, { Component } from 'react';
import './App.css';
import Stack from './Stack';
import StackAdder from './StackAdder';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>STACKR</h1>
        <StackAdder />
        <Stack />
      </div>
    );
  }
}

export default App;
