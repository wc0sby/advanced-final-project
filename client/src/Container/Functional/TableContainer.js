import { connect } from 'react-redux'
import Table from '../../Components/table'
import { deleteMainTrx } from '../../Redux/Actions/mainTrxActions'
import { showButtons } from '../../Redux/Actions/displayActions'


const mdp = (dispatch)=>{
  return{
    toggleButtons: (row)=>dispatch(showButtons(row)),
    deleteRow: (trx)=>dispatch(deleteMainTrx(trx))
  }
}

export default connect(null, mdp)(Table)

