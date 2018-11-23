import { connect } from 'react-redux'
import { postNewAccount } from '../../Redux/Actions/authenticationActions'
import { authVisible } from '../../Redux/Actions/displayActions'
import Form from '../../Forms/signUpForm'

const msp=(state)=>{
  return{
    open: state.authVisible,
  }
}

const mdp =(dispatch)=>{
  return {
    postUser: (user)=>dispatch(postNewAccount(user)),
    handleClose: ()=>dispatch(authVisible(false))
  }
}

export default connect(msp,mdp)(Form)