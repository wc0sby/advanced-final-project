import { connect } from 'react-redux'
import { postUpdateMainTrx } from '../../Redux/Actions/mainTrxActions'
import Form from '../../Forms/newTransactionForm'
import { editTrxVisible } from '../../Redux/Actions/displayActions'

const msp=(state)=>{
  return{
    categories: state.categories,
    isOpen: state.editTrxVisible,
    editingData: state.rowInScope
  }
}

const mdp =(dispatch)=>{
  return {
    postNewTRX: (trx, id)=>dispatch(postUpdateMainTrx(trx, id)),
    handleFormClose: ()=>dispatch(editTrxVisible(false))
  }
}

export default connect(msp,mdp)(Form)