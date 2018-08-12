import React, { Component } from 'react';
import '../App.css';
import Entry from './Entry';
import {connect} from 'react-redux';
class Table extends Component {
  render() {
    return (
      <div className="Table">
      <table>
      <tr>
        <th>WEEK ENDING</th>
        <th>RETAIL SALES</th> 
        <th>WHOLESALE SALES</th>
        <th>UNITS SOLD</th>
        <th>RETAILER MARGIN</th>
      </tr>
      <Entry/>
      { this.props.data.length > 0 ? this.props.data[0]['sales'].map((sales) => <Entry sale={sales} />): <p></p>}
      </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      data: state
  }
}
export default connect(mapStateToProps)(Table);
