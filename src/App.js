import React, { Component } from 'react';
import './App.css';
import Topheader from './component/Topheader'
import Detailview from './component/Detailview'
import {connect} from 'react-redux';
class App extends Component {
  constructor(props) {
    super(props);
    // This will be an api call I am just importing the json.
  }

  componentDidMount(){
    var data = require('./fixtures/Webdev_data.json');
    this.props.dispatch({
      type:'ADD_POST',
      data});
  console.log(data);
    }
  render() {
    return (
      <div className="App">
        <Topheader/>
        <Detailview/>
      </div>
    );
  }
}

export default connect()(App);
