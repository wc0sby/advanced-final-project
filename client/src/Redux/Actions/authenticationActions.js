export const loadAccounts=()=>{
  return (dispatch) =>{
    fetch(`/`)
      .then(res => res.json())
      .then(
        (user)=>{
        dispatch(accountLoaded(user))
    })
  }
}

const accountLoaded=(user)=>{
  return{
    type: "ACCOUNT_LOADED",
    value: user
  }
}

export const postNewAccount=(user)=>{
  return (dispatch)=>{
    fetch("/users",{
      method: 'post',
      body: JSON.stringify(user),
      headers:{
        'content-type': 'application/json'
      }
    })
    .then(res=>res.json())
    .then((user)=>{
      dispatch(accountLoaded(user))
    })
  }
}