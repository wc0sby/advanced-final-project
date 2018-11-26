import { authVisible, sideBarVisible } from '../Actions/displayActions'

export const handleSignUp = (credentials)=> {
  return (dispatch)=>{  
    fetch("/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(credentials)
    })
    .then((res) => res.json()
        //before sending to the final resolve, create a new object with a status and body
        //status will contain the error code and body will contain the json object
      .then(body=>({status:res.status, body}))
    )
    .then((data) => {
      const { error, token } = data.body
      if (!error){
        localStorage.setItem("token", token)
        dispatch(authStatus(token, "success"))
        dispatch(authVisible(false))
      }else{
        dispatch(loginFailure(error, data.status))
        dispatch(authStatus('','failure'))
      }
    })
    .catch(err=>err)
  }
}


export const handleSignIn = (credentials)=> {
  return (dispatch)=>{
//TODO: move this into business logic
    const { username, password } = credentials;
    if (!username.trim() || !password.trim()) {
      this.setState({
        signUpSignInError: 'Must Provide All Fields',
      });
    } else {
      fetch('/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      })
      .then((res) => res.json()
        .then(body => ({status:res.status, body}))
      )
      .then((data) => {
        const { error, token } = data.body
        if (!error){
          localStorage.setItem('token', token)
          dispatch(authStatus(token, "success"))
          dispatch(loginFailure('', data.status))
          dispatch(authVisible(false))
        }else{
          dispatch(loginFailure(error, data.status))
          dispatch(authStatus('','failure'))
        }
      })
      .catch(err=> err)
    }
  }
} 

export const authStatus=(token, message)=>{
  return{
    type: "AUTH_STATUS",
    token,
    message
  }
}

export const loginFailure=(message, status)=>{
  return{
    type: "LOGIN_FAILURE",
    message,
    status
  }
}

export const handleSignOut=()=>{
  localStorage.removeItem("token")
  return (dispatch)=>{
    dispatch(authStatus('', 200))
    dispatch(sideBarVisible(false))
    dispatch(authVisible(true))
  }
}

export const checkCookieToken=(token)=>{
  return dispatch=>{
    if (!token){
      dispatch(authVisible(true))
    }else{
      fetch("/sessions", {
        headers: {
          authorization: token,
        }
      })
      .then(res=>{
        return res.json()
        .then(body=>({status:res.status, body}))
      })
      .then(session=>{
        const { body, status } = session
        if ( status !== 200 ){
          dispatch(authVisible(true))
          dispatch(authStatus('', 200))
          localStorage.removeItem("token")
        }else{
          dispatch(authStatus(body.token, 200))
        }
      })
    }
  }
}