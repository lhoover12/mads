
import React, { Component } from 'react'
import Tiles from './Tiles'
import {Grid, Col, Row } from 'react-bootstrap';
export default class Main extends Component {
  render() {
    return (
      <Grid className="main-content">
        <Col className="panel" xl={1} md={3}>
        test1
        </Col>
        <Col xsOffset={1} className="panel" xl={1} md={3}>
        test2
        </Col>
        <Col  xsOffset={1} className="panel" xl={1} md={3}>
        test3
        </Col>
      </Grid>
    )
  }
}
