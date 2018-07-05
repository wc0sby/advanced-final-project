import { connect } from 'react-redux'
import Table from '../../Components/table'
import { deleteCashTrx } from '../../Redux/Actions/cashTrxActions'
import { getRow, editCashVisible } from '../../Redux/Actions/displayActions'

const msp = state=>{
  return{
    row: state.rowInScope,
  }
}

const mdp = (dispatch)=>{
  return{
    getRow: (row)=>dispatch(getRow(row)),
    deleteRow: (trx)=>dispatch(deleteCashTrx(trx)),
    handleFormOpen: ()=>dispatch(editCashVisible(true)),
  }
}

export default connect(msp, mdp)(Table)

