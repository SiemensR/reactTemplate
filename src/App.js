import React, { Component } from 'react';
import logo from './logo.svg';
import './bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="firstSentence">How to start with CSS read here</p><br/>
        <h3>Lorem ipsum</h3>
        <button className="button">Click on me</button>
      </div>
    );
  }
}

export default App;
