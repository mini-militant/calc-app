import * as types from '../Actions/ActionTypes'

const initialState={
  input:'',
  previousNumber:'',
  currentNumber:'',
  operator:'',
  flag:false,
}

export default function RootReducer(state=initialState,action){

  switch(action.type){
    case types.INPUT:
    return{
      input:state.input + action.input
    }

    case types.RESET_INPUT:
      return{
        input:action.resetInputValue
      }

    case types.CHANGE_SIGN:
      return{
        input:parseFloat(action.inputValue) * (-1)
      }

    default:
    return state;
  }

}
