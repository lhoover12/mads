// using ES6 modules
import {  Switch } from 'react-router'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from '../home'
import React, { Component } from 'react'

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
             <Route exact path='/' component={Home}/>
        </BrowserRouter>
      </div>
    )
  }
}
