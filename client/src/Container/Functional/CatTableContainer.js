import { connect } from 'react-redux'
import Table from '../../Components/table'
import { deleteCategory } from '../../Redux/Actions/categoryActions'
import { getRow, editCatVisible } from '../../Redux/Actions/displayActions'

const msp = state=>{
  return{
    row: state.rowInScope,
    data: state.categories
  }
}

const mdp = (dispatch)=>{
  return{
    getRow: (row)=>dispatch(getRow(row)),
    deleteRow: (trx)=>dispatch(deleteCategory(trx)),
    handleFormOpen: ()=>dispatch(editCatVisible(true)),
  }
}

export default connect(msp, mdp)(Table)

