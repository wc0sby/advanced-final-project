import { connect } from 'react-redux'
import { postNewCashTrx } from '../../Redux/Actions/cashTrxActions'
import Form from '../../Forms/newTransactionForm'
import { cashVisible } from '../../Redux/Actions/displayActions'

const msp=(state)=>{
  return{
    categories: state.categories,
    isOpen: state.cashVisible,
  }
}

const mdp =(dispatch)=>{
  return {
    postNewTRX: (trx)=>dispatch(postNewCashTrx(trx)),
    handleFormClose: ()=>dispatch(cashVisible(false))
  }
}

export default connect(msp,mdp)(Form)