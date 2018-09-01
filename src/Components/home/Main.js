import React, { Component } from "react";
import Tiles from "./Tiles";
import { Grid, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Mads from "../utils/images/Mads";
import { Motion, spring } from "react-motion";
import styled from "styled-components";
import Page from "../SubPage";
import Bis from "../../pics/BIS.jpg";
import FLower from "../../pics/Flower.jpg";
const Con = styled.div`
z-index: 1 !important;
  position: absolute;
  height: 30%;
  background-color: #CF67B8;
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
  background-color: #cf67b8;
  margin-top: ${window.screen.availHeight}px;
  height: 100%;
`;
const BackGrid = styled(Grid)`
  background-color: #833471;
`;
var Mad = styled.h1`
  font-family: Open Sans;
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
      <BackGrid fluid>
        <Row fluid>
          <Page img={FLower} Header={"MADDIE."} />
          <Page solid color={"#8FD8D2"} Header={"Yer a wizard"} />
          <Page img={Bis} />
          <Page
            solid
            Header={"BISOU THE DOG"}
            Text={"Vivre sans aimer n’est pas proprement vivre."}
            color={"#92EFCD"}
          />
        </Row>
      </BackGrid>
    );
  }
}
