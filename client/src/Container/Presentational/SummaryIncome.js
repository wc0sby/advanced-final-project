import { connect } from 'react-redux'
import Summary from '../../Components/summary'
import {  filterBudgetType, filterActuals } from '../../Helpers/summaryFormulas'
import { decimalCorrection } from '../../Helpers/formatter'

const sumAllAccounts=(x, y)=>{
  return filterActuals(x, 'Income') + filterActuals(y, 'Income')
}

const clearingBalance=(x, y)=>{
  return Number(x) - Number(y)
}

const msp = state =>{
  return{
    header:'Income',
    budgetContent:`Total Budgeted: $${decimalCorrection(filterBudgetType(state.budgetTrx, 'Income'))}`,
    actualContent:`Total Actual: $${decimalCorrection(Math.abs(sumAllAccounts(state.mainTrx, state.cashTrx)))}`,
    remainingContent: `Clearing: $${decimalCorrection(clearingBalance(filterBudgetType(state.budgetTrx, 'Income'),Math.abs(sumAllAccounts(state.mainTrx, state.cashTrx))))}`
  }
}


export default connect(msp)(Summary)

