import React, { Component } from 'react';
import { render } from 'react-dom';
import Container from './Components/Container'
import './App.css';

class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <Container/>
      </div>
    );
  }
}

export default App;
