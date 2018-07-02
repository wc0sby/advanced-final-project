import { connect } from 'react-redux'
import CashTrx from '../../Components/table'

const msp = state =>{return{transaction:state.cashTrx}}

// const mdp = dispatch =>{
//   return({
//     loadTransactions: (id)=>dispatch(loadTransactions(id))
//   })
// }

export default connect(msp)(CashTrx)

