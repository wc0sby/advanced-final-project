import { connect } from 'react-redux'
import App from '../../AppAuthenticated'
import {loadMain} from '../../Redux/Actions/mainTrxActions'
import {loadCash} from '../../Redux/Actions/cashTrxActions'
import {loadBudget} from '../../Redux/Actions/budgetTrxActions'
import { loadCategories } from '../../Redux/Actions/categoryActions';
import { trxVisible, cashVisible, budVisible, catVisible } from '../../Redux/Actions/displayActions'
import { filterBudgetType, filterBudgeted, balance } from '../../Helpers/summaryFormulas'
import { decimalCorrection } from '../../Helpers/formatter'

const sumAllAccounts=(x, y)=>{
  return balance(x) + balance(y)
}

const sumNonBudget=(x,y)=>{
  return filterBudgeted(x) + filterBudgeted(y)
}

const clearingBalance=(x, y)=>{
  return Number(x) - Number(y)
}

const freeSpending=(x, y, z)=>{
  return Number(x) - Number(y) - Number(z)
}


const msp=state=>{
  const free = freeSpending(filterBudgetType(state.budgetTrx, 'Income'),filterBudgetType(state.budgetTrx, 'Expense'),filterBudgetType(state.budgetTrx, 'Savings'))
  const total = sumAllAccounts(state.mainTrx, state.cashTrx)
  const totalWOBudget = sumNonBudget(state.mainTrx, state.cashTrx)
  return{
    balance: decimalCorrection(total * -1),
    cashBalance: state.cashTrx,
    freeSpending: decimalCorrection(clearingBalance(free, totalWOBudget)),
    isLoaded: state.loadStatus,
    categories: state.categories,
  }
}

//map dispatch to props for fetch calls
const mdp=(dispatch)=>{
  return{
    fetchMain: ()=>dispatch(loadMain()),
    fetchCash: ()=>dispatch(loadCash()),
    fetchBudget: ()=>dispatch(loadBudget()),
    fetchCategories: ()=>dispatch(loadCategories()),
    handleFormOpen: (form)=>{
        switch (form){
        default:
        return dispatch(trxVisible(true))
        case 'cashVisible':
        return dispatch(cashVisible(true))
        case 'budVisible':
        return dispatch(budVisible(true))
        case 'catVisible':
        return dispatch(catVisible(true))
      }
    }
  }
}

export default connect(msp, mdp)(App)