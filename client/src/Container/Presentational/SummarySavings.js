import { connect } from 'react-redux'
import Summary from '../../Components/summary'
import { filterBudgetType } from '../../Helpers/summaryFormulas'
import { decimalCorrection } from '../../Helpers/formatter'

const msp = state =>{
  return{
    header:'Savings',
    budgetContent:`Total Projected: $${decimalCorrection(filterBudgetType(state.budgetTrx, 'Savings'))}`,
  }
}


export default connect(msp)(Summary)

