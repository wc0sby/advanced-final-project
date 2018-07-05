import { connect } from 'react-redux'
import { postUpdateBudgetTrx } from '../../Redux/Actions/budgetTrxActions'
import Form from '../../Forms/newBudgetItemForm'
import { editBudVisible } from '../../Redux/Actions/displayActions'

const msp=(state)=>{
  return{
    categories: state.categories,
    isOpen: state.editBudVisible,
    editingData: state.rowInScope
  }
}

const mdp =(dispatch)=>{
  return {
    postNewTRX: (trx, id)=>dispatch(postUpdateBudgetTrx(trx, id)),
    handleFormClose: ()=>dispatch(editBudVisible(false))
  }
}

export default connect(msp,mdp)(Form)