import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Components/Router';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {reducer  as formReducer} from 'redux-form';
import ducks from "./Components/ducks"
import thunk from 'redux-thunk';


const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({name: "mads"})) || compose;

const rootReducer = combineReducers({ducks, form: formReducer})

var store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

class App extends Component { 
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router/>
        </div>
      </Provider>
    );
  }
}

export default App;
