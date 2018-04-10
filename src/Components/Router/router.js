// using ES6 modules
import { Switch } from "react-router";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from "../home";
import React, { Component } from "react";
import Subpage from "../SubPage";
import { newPage } from "../ducks/reducer";
export default class Router extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const wrapper = <div />;
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/Home" component={Home} />
          <Route
            exact
            path="/Home/Maddie"
            handler={newPage("maddiez", "zz")}
            component={Subpage}
          />
          <Route exact path="/Home/Dog" component={Subpage} />
          <Route>
            <Redirect to="/home" />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}
