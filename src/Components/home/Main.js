
import React, { Component } from 'react'
import Tiles from './Tiles'
import {Grid, Col, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Mads from '../utils/images/Mads'
export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <Grid className="main-content">


      <Mads />
        <Link  to={{ pathname: `/Home/Maddie`}} onClick={() => this.props.newPage("M a d d i e", "hey")} activeClassName="active">
          <Tiles />
        </Link>
        <Link to={`/Home/Dog`}  onClick={() => this.props.newPage("B i s o u", "hey")}   activeClassName="active">
          <Tiles  onClick={() => this.props.newPage("B i s o u", "hey")} />
        </Link>
        <Link to={`/Home/HowTo`} activeClassName="active">
          <Tiles />
        </Link>
      </Grid>
    )
  }
}
