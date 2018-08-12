import React, { Component } from 'react';
import '../App.css';
class Entry extends Component {
  render() {
    return (
      <tr>
        {console.log(this.props.sale)}
        <td>{this.props.sale ? this.props.sale["weekEnding"] : ""}</td>
        <td>{this.props.sale ? this.props.sale["retailSales"] : ""}</td>
        <td>{this.props.sale ? this.props.sale["wholesaleSales"] : ""}</td>
        <td>{this.props.sale ? this.props.sale["unitsSold"] : ""}</td>
        <td>{this.props.sale ? this.props.sale["retailerMargin"] : ""}</td>
      </tr>
    );
  }
}
export default Entry;
