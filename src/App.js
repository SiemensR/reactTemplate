import React, { Component } from 'react';
//import { Link } from 'react-router';
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
     <br/>
      <div>
      <header>
        This is my website!
      </header>

      <main>
        {this.props.children}
      </main>

      <footer>
        Your copyright message <a href="./page1">link to</a>
      </footer>
    </div>
    </div>
    );
  }
}

export default App;
