import { connect } from 'react-redux'
import App from '../../App'
import { catVisible } from '../../Redux/Actions/displayActions'

const msp = state =>{return{catToggle:state.editCatVisible}}

const mdp=(dispatch)=>{
  return{
    handleFormOpen:()=>dispatch(catVisible(true))
  }
}

export default connect(msp, mdp)(App)

