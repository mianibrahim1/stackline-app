import React, { Component } from 'react';
import '../App.css';
import Pill from './Pill'
import {connect} from 'react-redux';
class Card extends Component {
  render() {
    return (
      <div>
        <div className="Card">
            <img className= "Image" src ={ this.props.data.length > 0 ? this.props.data[0]['image']: '' } />
            <p className="Title" >{ this.props.data.length > 0 ? this.props.data[0]['title']: '' }</p>
            <p className="Subtitle"> { this.props.data.length > 0 ? this.props.data[0]['subtitle']: '' }</p>
            {console.log(this.props.data)}
        </div>
        <div className="PillView">
        { this.props.data.length > 0 ? this.props.data[0]['tags'].map((tags) => <Pill post={tags} />): <p></p>}
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      data: state
  }
}
export default connect(mapStateToProps)(Card);
