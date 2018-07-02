import { connect } from 'react-redux'
import Table from '../../Components/table'
import { deleteBudgetTrx } from '../../Redux/Actions/budgetTrxActions'
import { getRow, budVisible } from '../../Redux/Actions/displayActions'

const msp = state=>{
  return{
    row: state.rowInScope,
  }
}

const mdp = (dispatch)=>{
  return{
    getRow: (row)=>dispatch(getRow(row)),
    deleteRow: (trx)=>dispatch(deleteBudgetTrx(trx)),
    handleFormOpen: ()=>dispatch(budVisible(true)),
  }
}

export default connect(msp, mdp)(Table)

