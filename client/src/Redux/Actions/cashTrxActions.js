import { loginFailure, authStatus } from '../Actions/authenticationActions'
import { authVisible } from '../Actions/displayActions'

export const loadCash=(month, year)=>{
  return (dispatch) =>{
    fetch(`/cash/${month}/${year}`, {
      headers: {
         authorization: localStorage.getItem("token"),
       }
    })
      .then(res => res.json()
        .then(body=>({status: res.status, body}))
      )
      .then(
        (cash)=>{
        const { body, status } = cash
        if (status === 200){
          dispatch(cashLoaded(body))
        }else{
          dispatch(loginFailure(body.error, status))
          dispatch(authStatus('','failure'))
          dispatch(authVisible(true))
        }
  }).catch((err)=>err)
  }
}

const cashLoaded=(cash)=>{
  return{
    type: "CASH_LOADED",
    value: cash
  }
}

export const postNewCashTrx=(cash)=>{
  return (dispatch)=>{
    fetch("/cash",{
      method: 'post',
      body: JSON.stringify(cash),
      headers:{
        'content-type': 'application/json',
        authorization: localStorage.getItem("token")
      }
    })
    .then(res=>res.json())
    .then((cashTrx)=>{
      const dtVal = new Date(cashTrx.date)
      dispatch(loadCash(dtVal.getMonth(), dtVal.getFullYear()))
    })
  }
}

export const deleteCashTrx=(id)=>{
  return (dispatch)=>{
    fetch(`/cash/${id}`,{
      method: 'DELETE',
      headers:{
        authorization: localStorage.getItem("token")
      }
    })
    .then(res=>res.json())
    .then((trx)=>{
      const dtVal = new Date()
      dispatch(loadCash(dtVal.getMonth(), dtVal.getFullYear()))
    })
  }
}

export const postUpdateCashTrx=(main, id)=>{
  return (dispatch)=>{
    fetch(`/cash/${id}`,{
      method: 'put',
      body: JSON.stringify(main),
      headers:{
        'content-type': 'application/json',
        authorization: localStorage.getItem("token")
      } 
    })
    .then(res=>res.json())
    .then((trx)=>{
      const dtVal = new Date()
      dispatch(loadCash(dtVal.getMonth(), dtVal.getFullYear()))
    })
  }
}