import { loginFailure, authStatus } from '../Actions/authenticationActions'
import { authVisible } from '../Actions/displayActions'

const handleErrors=(res, dispatch)=>{
  if(!res.ok){
    //TODO: Set Redux state to whatever the auth error is
    return({
        type: "TRX_ERROR",
        value: res.status
      }
    )
  }
  return res
}

export const loadMain=(month, year)=>{
  return (dispatch) =>{
    fetch(`/transaction/${month}/${year}`, {
      headers: {
         authorization: localStorage.getItem("token"),
       }
    })
      // .then((res)=>handleErrors(res, dispatch))
      .then(res => res.json()
        .then(body=>({status: res.status, body}))
      )
      .then(
        (transactions)=>{
          const { body, status } = transactions
          if (status === 200){
            dispatch(mainLoaded(body))
          }else{
            console.log(body.error, transactions)
            dispatch(loginFailure(body.error, status))
            dispatch(authStatus('','failure'))
            dispatch(authVisible(true))
          }
    }).catch((err)=>err)
  }
}

const mainLoaded=(transactions)=>{
  return{
    type: "TRANSACTIONS_LOADED",
    value: transactions
  }
}

//Post new transaction
export const postNewMainTrx=(main)=>{
  return (dispatch)=>{
    fetch("/transaction",{
      method: 'post',
      body: JSON.stringify(main),
      headers:{
        'content-type': 'application/json',
        authorization: localStorage.getItem("token"),
      } 
    })
    // .then((res)=>dispatch(handleErrors(res)))
    .then(res=>res.json())
    .then((trx)=>{
      const dtVal = new Date(trx.date)
      dispatch(loadMain(dtVal.getMonth(), dtVal.getFullYear()))
    })
  }
}

//Delete transaction
export const deleteMainTrx=(id)=>{
  return (dispatch)=>{
    fetch(`/transaction/${id}`,{
      method: 'DELETE',
      headers:{
        authorization: localStorage.getItem("token")
      }
    })
    .then(handleErrors)
    .then(res=>res.json())
    .then((trx)=>{
      const dtVal = new Date()
      dispatch(loadMain(dtVal.getMonth(), dtVal.getFullYear()))
    })
  }
}

export const postUpdateMainTrx=(main, id)=>{
  return (dispatch)=>{
    fetch(`/transaction/${id}`,{
      method: 'put',
      body: JSON.stringify(main),
      headers:{
        'content-type': 'application/json',
        authorization: localStorage.getItem("token"),
      } 
    })
    // .then((res)=>dispatch(handleErrors(res)))
    .then(res=>res.json())
    .then((trx)=>{
      const dtVal = new Date()
      dispatch(loadMain(dtVal.getMonth(), dtVal.getFullYear()))
    })
  }
}