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

const categories = (state = [], action)=>{
  if (action.type === "CATEGORY_LOADED"){
    return action.value
  }
  return state
}

const charts = (state = [])=>{
  return state
}

const rowInScope = (state = [], action)=>{
  if (action.type === "ROW_CLICKED" && action.value){
    return action.value
  }
  return state
}

const trxVisible = (state = false, action)=>{
  if (action.type === "TOGGLE_TRX_FORM"){
    return action.value
  }
  return state
}
 const catVisible = (state = false, action)=>{

  if (action.type === "TOGGLE_CAT_FORM"){
    return action.value
  }
  return state
}

 const budVisible = (state = false, action)=>{
  if (action.type === "TOGGLE_BUD_FORM"){
    return action.value
  }
  return state
}
const cashVisible = (state = false, action)=>{
  if (action.type === "TOGGLE_CASH_FORM"){
    return action.value
  }
  return state
}

const rootReducer = combineReducers({
  mainTrx, cashTrx, budgetTrx, categories, rowInScope, trxVisible, catVisible, budVisible, cashVisible, charts
});
export default rootReducer