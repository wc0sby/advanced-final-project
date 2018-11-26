import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { postNewMainTrx } from '../../Redux/Actions/mainTrxActions'
import Form from '../../Forms/newTransactionForm'
import { trxVisible } from '../../Redux/Actions/displayActions'

const msp=(state)=>{
  return{
    categories: state.categories,
    isOpen: state.trxVisible,
  }
}

const mdp =(dispatch)=>{
  return {
    postNewTRX: (trx)=>dispatch(postNewMainTrx(trx)),
    handleFormClose: ()=>dispatch(trxVisible(false))
  }
}

export default withRouter(connect(msp,mdp)(Form))