import React, { Component } from 'react'
import {Grid, Col, Row } from 'react-bootstrap';

export default class Tiles extends Component {

  render() {
    return (
    
        <Col className="panel"  xl={1} md={4}>
         {this.props.children}
        </Col>
    )
  }
}
