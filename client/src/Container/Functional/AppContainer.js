import { connect } from 'react-redux'
import App from '../../AppAuthenticated'
import {loadMain} from '../../Redux/Actions/mainTrxActions'
import {loadCash} from '../../Redux/Actions/cashTrxActions'
import {loadBudget} from '../../Redux/Actions/budgetTrxActions'

const msp=state=>{
  return{
    balance: state.mainTrx,
    freeSpending: state.budgetTrx,
    isLoaded: state.loadStatus
  }
}

//map dispatch to props for fetch calls
const mdp=(dispatch)=>{
  return{
    fetchMain: ()=>dispatch(loadMain()),
    fetchCash: ()=>dispatch(loadCash()),
    fetchBudget: ()=>dispatch(loadBudget())
  }
}

export default connect(msp, mdp)(App)