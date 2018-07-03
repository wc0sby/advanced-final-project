import { connect } from 'react-redux'
import { postNewMainTrx } from '../../Redux/Actions/mainTrxActions'
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
    postNewTRX: (trx)=>dispatch(postNewMainTrx(trx)),
    handleFormClose: ()=>dispatch(editTrxVisible(false))
  }
}

export default connect(msp,mdp)(Form)