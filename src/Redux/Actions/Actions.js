import * as types from './ActionTypes'

export function inputValue(input){
  return{
    type:types.INPUT,
    input:input
  }
}

export function resetInputValue(resetInputValue){
  return{
    type:types.RESET_INPUT,
    resetInputValue:resetInputValue
  }
}

export function changeInputSign(inputValue){
  return{
    type:types.CHANGE_SIGN,
    inputValue:inputValue
  }
}
