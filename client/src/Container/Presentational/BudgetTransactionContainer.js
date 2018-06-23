import { connect } from 'react-redux'
import BudgetTrx from '../../Components/table'

const msp = state =>{return{transaction:state.budgetTrx}}

// const mdp = dispatch =>{
//   return({
//     loadTransactions: (id)=>dispatch(loadTransactions(id))
//   })
// }

export default connect(msp)(BudgetTrx)

