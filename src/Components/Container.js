import React,{Component} from 'react';
import {render} from 'react-dom';
import '../css/calculatorLayout.css';
import {connect} from 'react-redux'
import ClearButton from './ClearButton';
import * as InputActions from '../Redux/Actions/Actions'
import { bindActionCreators } from 'redux'

class Container extends Component{

  constructor(){
    super();
    this.state={

        previousNumber:"",
        currentNumber:"",
        operator:"",
        flag:false,
    }
  }

  reset=()=>{
    this.setState({
     operator:'',
     previousNumber:'',
     currentNumber:''
    })
    this.props.actions.resetInputValue('0');
  }

  addToInput=(value)=>{
      this.props.actions.inputValue(value);
      console.log("redux value",this.props)
  }

  changeInputSign=()=>{
    this.props.actions.changeInputSign(this.props.input)
  }

  add=()=>{

    this.setState({
      flag:false,
      previousNumber:this.props.input,
      operator:'+'
    })
    this.props.actions.resetInputValue('');
  }

  subtract=()=>{
    this.setState({
      flag:false,
      previousNumber:this.props.input,
      operator:'-'
    })
    this.props.actions.resetInputValue('');
  }

  multiply=()=>{
    this.setState({
      flag:false,
      previousNumber:this.props.input,
      operator:'x'
    })
    this.props.actions.resetInputValue('');
  }

  divide=()=>{
    this.setState({
      flag:false,
      previousNumber:this.props.input,
      operator:'/'
    })
    this.props.actions.resetInputValue('');

  }
  modulus=()=>{
    this.setState({
      flag:false,
      previousNumber:this.props.input,
      operator:'%'
    })
    this.props.actions.resetInputValue('');

  }

  calculate=()=>{

      this.state.currentNumber=this.props.input;
     if (this.state.operator === "+" && this.state.flag===false) {
      this.setState({
        flag:true
      });

      this.props.actions.resetInputValue(parseFloat(this.state.previousNumber) +
      parseFloat(this.state.currentNumber))

    }
     else if (this.state.operator === "-" && this.state.flag===false) {
      this.setState({
          flag:true
      });
      this.props.actions.resetInputValue(parseFloat(this.state.previousNumber) -
      parseFloat(this.state.currentNumber))
    }
     else if (this.state.operator === "x" && this.state.flag===false) {
      this.setState({
          flag:true
      });
      this.props.actions.resetInputValue(parseFloat(this.state.previousNumber) *
      parseFloat(this.state.currentNumber))
    }
    else if (this.state.operator === "/" && this.state.flag===false) {
      this.setState({
       flag:true
      });
      this.props.actions.resetInputValue(parseFloat(this.state.previousNumber) /
      parseFloat(this.state.currentNumber))
    }
    else if (this.state.operator === "%" && this.state.flag===false) {
      this.setState({
       flag:true
      });
      this.props.actions.resetInputValue(parseFloat(this.state.previousNumber) %
      parseFloat(this.state.currentNumber))
    }

  }

  render(){
    return(
      <div>
        <div id="calculator-card">
         <div id="container-result">
          <div id="container-history">
            <span id="history-value">
            {this.state.previousNumber}{this.state.operator}{this.state.currentNumber}
            </span>
          </div>
          <div id="container-output">
            <span id="output-value">
            {this.props.input}
            </span>
          </div>
         </div>

          <div id="container-keyboard">

					<ClearButton handleClick={this.reset} >C</ClearButton>
					<button className="operator" id="changeSign" onClick={this.changeInputSign}>+/-</button>
					<button className="operator" id="%"  onClick={this.modulus}>%</button>
					<button className="operator opColor" name="/" onClick={this.divide}>&#247;</button>

					<button className="number" name="7" onClick={(e)=>this.addToInput(e.target.name,e)}>7</button>
					<button className="number" name="8" onClick={(e)=>this.addToInput(e.target.name,e)}>8</button>
					<button className="number" name="9" onClick={(e)=>this.addToInput(e.target.name,e)}>9</button>

					<button className="operator opColor"  name="*"  onClick={this.multiply}>&times;</button>

					<button className="number" name="4" onClick={(e)=>this.addToInput(e.target.name,e)}>4</button>
					<button className="number" name="5" onClick={(e)=>this.addToInput(e.target.name,e)}>5</button>
					<button className="number" name="6" onClick={(e)=>this.addToInput(e.target.name,e)}>6</button>

					<button className="operator opColor" name="-" onClick={this.subtract}>-</button>

					<button className="number" name="1" onClick={(e)=>this.addToInput(e.target.name,e)}>1</button>
					<button className="number" name="2" onClick={(e)=>this.addToInput(e.target.name,e)}>2</button>
					<button className="number" name="3" onClick={(e)=>this.addToInput(e.target.name,e)}>3</button>

					<button className="operator opColor" name="+"  onClick={this.add}>+</button>

					<button className="number " name="0" onClick={(e)=>this.addToInput(e.target.name,e)}>0</button>
					<button className="empty " name="." onClick={(e)=>this.addToInput(e.target.name,e)}>.</button>
					<button className="operator equalTo opColor" name="=" onClick={this.calculate}>=</button>

          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    input:state.input
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(InputActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
