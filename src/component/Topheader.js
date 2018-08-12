import React, { Component } from 'react';
import logo from '../logo.png';
import '../App.css';
class Topheader extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Topheader;
