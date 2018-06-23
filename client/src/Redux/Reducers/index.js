import {combineReducers} from 'redux';
//JS default parmaeter relates to the state = []
// this is an ES6 thing that sets state to an empty array when undefined
// the data type can be anything, it's just setting the default value when somehting is incorrectly passed
const mainTrx = (state = [], action)=>{
  if (action.type === "TRANSACTIONS_LOADED"){
    return action.value
  }
  return state
}

const cashTrx = (state = [], action)=>{
  if (action.type === "CASH_LOADED"){
    return action.value
  }
  return state
}

const budgetTrx = (state = [], action)=>{
  if (action.type === "BUDGET_LOADED"){
    return action.value
  }
  return state
}

const toggleButtons = (state = [], action)=>{
  if (action.type === "ROW_CLICKED"){
    console.log(action.value)
    return action.value
  }
  return state
}

const rootReducer = combineReducers({
  mainTrx, cashTrx, budgetTrx, toggleButtons
});
export default rootReducer