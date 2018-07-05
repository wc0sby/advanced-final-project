import { connect } from 'react-redux'
import Summary from '../../Components/summary'
import {  filterBudgetType, filterBudgeted } from '../../Helpers/summaryFormulas'
import { decimalCorrection } from '../../Helpers/formatter'

const sumAllAccounts=(x, y)=>{
  return filterBudgeted(x) + filterBudgeted(y)
}

const clearingBalance=(x, y)=>{
  return Number(x) - Number(y)
}

const freeSpending=(x, y, z)=>{
  return Number(x) - Number(y) - Number(z)
}

const msp = state =>{
  const free = freeSpending(filterBudgetType(state.budgetTrx, 'Income'),filterBudgetType(state.budgetTrx, 'Expense'),filterBudgetType(state.budgetTrx, 'Savings'))
  const actual = Math.abs(sumAllAccounts(state.mainTrx, state.cashTrx))
  return{
    header:'Free Spending',
    budgetContent:`Total Free Spending: $${decimalCorrection(free)}`,
    actualContent:`Total Actual: $${decimalCorrection(actual)}`,
    remainingContent: `Clearing: $${decimalCorrection(clearingBalance(free, actual))}`
  }
}


export default connect(msp)(Summary)

