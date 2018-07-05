import { connect } from 'react-redux'
import { postUpdateCashTrx } from '../../Redux/Actions/cashTrxActions'
import Form from '../../Forms/newTransactionForm'
import { editCashVisible } from '../../Redux/Actions/displayActions'

const msp=(state)=>{
  return{
    categories: state.categories,
    isOpen: state.editCashVisible,
    editingData: state.rowInScope
  }
}

const mdp =(dispatch)=>{
  return {
    postNewTRX: (trx, id)=>dispatch(postUpdateCashTrx(trx, id)),
    handleFormClose: ()=>dispatch(editCashVisible(false))
  }
}

export default connect(msp,mdp)(Form)