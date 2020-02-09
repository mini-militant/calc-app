import React,{Component} from 'react';
import {render} from 'react-dom';
import '../css/calculatorLayout.css';

class ClearButton extends React.Component{
  render(){
    return(
      <button  className="operator" id="clear" onClick={this.props.handleClick}>
        {this.props.children}
      </button>

    )
  }
}
export default ClearButton;
