import { connect } from 'react-redux'
import { postNewBudgetTrx } from '../../Redux/Actions/budgetTrxActions'
import Form from '../../Forms/newBudgetItemForm'
import { budVisible } from '../../Redux/Actions/displayActions'

const msp=(state)=>{
  return{
    isOpen: state.budVisible,
  }
}

const mdp =(dispatch)=>{
  return {
    postNewTRX: (trx)=>dispatch(postNewBudgetTrx(trx)),
    handleFormClose: ()=>dispatch(budVisible(false))
  }
}

export default connect(msp,mdp)(Form)