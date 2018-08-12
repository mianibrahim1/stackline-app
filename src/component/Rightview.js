import React, { Component } from 'react';
import '../App.css';
import Graph from './Graph';
import Table from './Table';
class RightView extends Component {
  render() {
    return (
      <div className="RightView">
      <Table/>
      </div>
    );
  }
}
export default RightView;
