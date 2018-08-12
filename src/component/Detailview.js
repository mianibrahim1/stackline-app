import React, { Component } from 'react';
import Navigate from './Navigate';
import RightView from './Rightview';
import '../App.css';
import {connect} from 'react-redux';
class DetailView extends Component {
  render() {
    return (
      <div className="Detail">
      <Navigate/>
      <RightView/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      data: state
  }
}
export default connect(mapStateToProps)(DetailView);
