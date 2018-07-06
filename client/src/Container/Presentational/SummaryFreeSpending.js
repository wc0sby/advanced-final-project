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
    budgetContent:`Beginning: $${decimalCorrection(free)}`,
    actualContent:`Total Spent: $${decimalCorrection(actual)}`,
    remainingContent: `Remaining: $${decimalCorrection(clearingBalance(free, actual))}`
  }
}


export default connect(msp)(Summary)

