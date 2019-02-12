import { connect } from 'react-redux'
import { handleSignIn, handleSignUp } from '../../Redux/Actions/authenticationActions';
import { authVisible } from '../../Redux/Actions/displayActions'
import Form from '../../Forms/signUpForm'

const msp=(state)=>{
  return{
    open: state.authVisible,
    error: state.loginErr
    /*
    error,
    userToken
    */
  }
}

const mdp =(dispatch)=>{
  return {
    handleClose: (status)=>(dispatch(authVisible(status))),
    onSignIn:(credentials)=>(dispatch(handleSignIn(credentials))),
    onSignUp:(credentials)=>(dispatch(handleSignUp(credentials)))
  }
}

export default connect(msp,mdp)(Form)