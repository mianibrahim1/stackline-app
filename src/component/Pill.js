import React, { Component } from 'react';
import '../App.css';
import Card from './Card'
class Pill extends Component {
  render() {
    return (
      <div className="Pill">
      <p className="Pilltext">{this.props.post}</p>
      </div>
    );
  }
}
export default Pill;
