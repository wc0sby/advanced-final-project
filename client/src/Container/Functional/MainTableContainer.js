import { connect } from 'react-redux'
import Table from '../../Components/table'
import { deleteMainTrx } from '../../Redux/Actions/mainTrxActions'
import { getRow, editTrxVisible } from '../../Redux/Actions/displayActions'

const msp = state=>{
  return{
    row: state.rowInScope,
  }
}

const mdp = (dispatch)=>{
  return{
    getRow: (row)=>dispatch(getRow(row)),
    deleteRow: (trx)=>dispatch(deleteMainTrx(trx)),
    handleFormOpen: ()=>dispatch(editTrxVisible(true)),
  }
}

export default connect(msp, mdp)(Table)

