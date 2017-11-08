import React, { Component } from 'react'
import {newPage} from '../ducks/reducer'

export default class Page extends Component {

  render() {
 
  console.log(this.props.name)    
    
    return (
      <div >
        <h1>
          {this.props.name}
        </h1>
        
      </div>
    )
  }
}
Page.propTypes= {
//todo proptypes

}