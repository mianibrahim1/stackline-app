
import React, { Component } from 'react';
import '../App.css';
import Card from './Card';
import  { ListGroup,ListGroupItem }from 'react-bootstrap';
class Navigate extends Component {
  render() {
    return (
      <div className="Navigation">
      <Card/>
      <ListGroup>
        <ListGroupItem>OVERVIEW</ListGroupItem>
        <ListGroupItem>SALES</ListGroupItem>
      </ListGroup>
      </div>
    );
  }
}

export default Navigate;
