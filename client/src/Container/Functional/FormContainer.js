import { connect } from 'react-redux'
import { postNewMainTrx } from '../../Redux/Actions/mainTrxActions'
import Form from '../../Forms/newTransactionForm'

const mdp =(dispatch)=>{
  return {
    postNewTRX: (trx)=>dispatch(postNewMainTrx(trx)),
  }
}

export default connect(null,mdp)(Form)