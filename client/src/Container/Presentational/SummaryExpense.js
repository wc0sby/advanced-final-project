import { connect } from 'react-redux'
import Summary from '../../Components/summary'
import { filterBudgetType, filterActuals } from '../../Helpers/summaryFormulas'
import { decimalCorrection } from '../../Helpers/formatter'

const sumAllAccounts=(x, y)=>{
  return filterActuals(x) + filterActuals(y)
}

const clearingBalance=(x, y)=>{
  return Number(x) - Number(y)
}

const msp = state =>{
  return{
    header:'Expense',
    budgetContent:`Total Budgeted: $${decimalCorrection(filterBudgetType(state.budgetTrx, 'Expense'))}`,
    actualContent:`Total Actual: $${decimalCorrection(sumAllAccounts(state.mainTrx, state.cashTrx))}`,
    remainingContent: `Clearing: $${decimalCorrection(clearingBalance(filterBudgetType(state.budgetTrx, 'Income'),sumAllAccounts(state.mainTrx, state.cashTrx)))}`
  }
}

export default connect(msp)(Summary)

