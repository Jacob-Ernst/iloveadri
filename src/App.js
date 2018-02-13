import React, { Component } from 'react';
import heart from './heart.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="adri-jacob">
            <h1 className="App-title">Adri</h1>
            <img src={heart} className="App-logo" alt="logo" />
            <h1 className="App-title">Jacob</h1>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
