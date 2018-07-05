import { connect } from 'react-redux'
import { postUpdateCategory } from '../../Redux/Actions/categoryActions'
import Form from '../../Forms/newCategory'
import { editCatVisible } from '../../Redux/Actions/displayActions'

const msp=(state)=>{
  return{
    categories: state.categories,
    isOpen: state.editCatVisible,
    editingData: state.rowInScope
  }
}

const mdp =(dispatch)=>{
  return {
    postCategory: (trx, id)=>dispatch(postUpdateCategory(trx, id)),
    handleFormClose: ()=>dispatch(editCatVisible(false))
  }
}

export default connect(msp,mdp)(Form)