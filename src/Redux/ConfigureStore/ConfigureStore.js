import {createStore,applyMiddleware} from 'redux';
import RootReducer from '../Reducer/RootReducer';


export default function ConfigureStore(){
  return createStore(RootReducer);
}
