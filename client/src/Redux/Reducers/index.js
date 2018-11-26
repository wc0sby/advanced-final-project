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

const mainTrxErr = (state = '', action)=>{
  if (action.type === "TRX_ERROR"){
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

const editTrxVisible = (state = false, action)=>{
  if (action.type === "TOGGLE_EDIT_TRX_FORM"){
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

const editBudVisible = (state = false, action)=>{
  if (action.type === "TOGGLE_EDIT_BUD_FORM"){
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

const editCashVisible = (state = false, action)=>{
  if (action.type === "TOGGLE_EDIT_CASH_FORM"){
    return action.value
  }
  return state
}

const editCatVisible = (state = false, action)=>{
  if (action.type === "TOGGLE_EDIT_CAT_FORM"){
    return action.value
  }
  return state
}

const authVisible = (state = true, action)=>{
  if (action.type === "TOGGLE_AUTH_FORM"){
    return action.value
  }
  return state
}

const sideBarVisible = (state = false, action)=>{
  if (action.type === "TOGGLE_SIDEBAR"){
    return action.value
  }
  return state
}

const userToken = (state = '', action)=>{
  if(action.type === "AUTH_STATUS"){
    return action.token
  }
  return state
}

const loginErr = (state = '', action)=>{
  if (action.type === "LOGIN_FAILURE"){
    return action.message
  }
  return state
}


const d = new Date()
const selectedMonth = (state = d.getMonth(), action)=>{
  if(action.type === "SET_MONTH"){
    return action.value
  }
  return state
}

const selectedYear = (state = d.getFullYear(), action)=>{
  if(action.type === "SET_YEAR"){
    return action.value
  }
  return state
}

const rootReducer = combineReducers({
  mainTrx, mainTrxErr, cashTrx, budgetTrx, categories, rowInScope, 
  trxVisible, catVisible, budVisible, cashVisible, sideBarVisible, charts,
  editTrxVisible, editBudVisible, editCashVisible, editCatVisible,
  authVisible, userToken, loginErr, selectedMonth, selectedYear
});
export default rootReducer