import { connect } from 'react-redux'
import { postNewCategory } from '../../Redux/Actions/categoryActions'
import Form from '../../Forms/newCategory'
import { catVisible } from '../../Redux/Actions/displayActions'

const msp=(state)=>{
  return{
    isOpen: state.catVisible
  }
}

const mdp =(dispatch)=>{
  return {
    postCategory: (cat)=>dispatch(postNewCategory(cat)),
    handleFormClose: ()=>dispatch(catVisible(false))

  }
}

export default connect(msp,mdp)(Form)