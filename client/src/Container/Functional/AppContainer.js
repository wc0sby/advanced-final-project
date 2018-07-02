import { connect } from 'react-redux'
import App from '../../AppAuthenticated'
import {loadMain} from '../../Redux/Actions/mainTrxActions'
import {loadCash} from '../../Redux/Actions/cashTrxActions'
import {loadBudget} from '../../Redux/Actions/budgetTrxActions'
import { loadCategories } from '../../Redux/Actions/categoryActions';
import { trxVisible, cashVisible, budVisible, catVisible } from '../../Redux/Actions/displayActions'

const msp=state=>{
  return{
    balance: state.mainTrx,
    cashBalance: state.cashTrx,
    freeSpending: state.budgetTrx,
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