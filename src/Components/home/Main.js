import React, { Component } from "react";
import Tiles from "./Tiles";
import { Grid, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Mads from "../utils/images/Mads";
import { Motion, spring } from "react-motion";
import styled from "styled-components";
const Con = styled.div`
  position: absolute;
  height: 30%;
  background-color: #2473a4;
  top: 35%;
  left: 0;
  right: 0;
  z-index: -1;
  -moz-animation: UpDown 1s linear ;
  animation: UpDown 1s linear ;
  @-moz-keyframes UpDown {
    0% {
      left: -100%;
      right: 100%;
    }
    100% {
      left: 100%;
      right: 0%;
    }
  }
  @-webkit-keyframes UpDown {
    0% {
      left: -100%;
      right: 100%;
    }
    100% {
      left: 100%;
      right: 0%;
    }
  }
  @keyframes UpDown {
    0% {
      left: -100%;
      right: 100%;
    }
    100% {
      left: 0%;
      right: 0%;
    }
`;
const Stuff = styled.div`
  margin: -75px;
  width: 50%;
  display: inline-block;
`;
const FirstRow = styled(Row)`
  margin-top: ${window.screen.availHeight}px;
  height: 100%;
`;

var Mad = styled.h1`
  display: inline-block;
  position: absolute;
  width: 50%;
  ${props => `left: ${props.left};
  right: ${props.right};`};
  font-size: 14em;
  @media only screen and (max-width: 1024px) {
    font-size: 8em;
  }

  @media only screen and (max-width: 626px) {
    font-size: 5em;
  }
  @media only screen and (max-width: 395px) {
    font-size: 4.5em;
  }

  @media only screen and (max-width: 325px) {
    font-size: 4em;
  }
`;

export default class Main extends Component {
  render() {
    return (
      <Grid>
        <FirstRow>
          <Col md={12} />>
          <Con>
            <Mad left={"0"} right={"50%"}>
              M A D{" "}
            </Mad>
            <Stuff>
              <Mads width="400" height="400" />
            </Stuff>
            <Mad left={"50%"} right={"0%"}>
              D I E{" "}
            </Mad>
          </Con>
        </FirstRow>

        <Col md={12}> L O L </Col>
        <Col md={12}> L O L </Col>
        <Col md={12}> L O L </Col>
        <Col md={12}> L O L </Col>
      </Grid>
    );
  }
}
