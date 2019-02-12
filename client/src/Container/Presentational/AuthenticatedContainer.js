import { connect } from 'react-redux'
import App from '../../App'
import { catVisible, sideBarVisible } from '../../Redux/Actions/displayActions'
import { handleSignOut, checkCookieToken } from '../../Redux/Actions/authenticationActions';

const msp = state =>{
  return{
    catToggle:state.editCatVisible,
    appStatus: state.mainTrxErr,
    token: state.userToken,
    leftBar: state.sideBarVisible,
  }
}

const mdp=(dispatch)=>{
  return{
    handleFormOpen:()=>dispatch(catVisible(true)),
    toggleDrawer: (bool)=>dispatch(sideBarVisible(bool)),
    onSignOut: ()=>dispatch(handleSignOut()),
    cookie: (token)=>dispatch(checkCookieToken(token))
    // handleSignIn:(credentials)=>(dispatch(handleSignIn(credentials)))
  }
}

export default connect(msp, mdp)(App)

