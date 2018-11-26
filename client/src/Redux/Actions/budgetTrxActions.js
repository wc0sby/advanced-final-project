import { loginFailure, authStatus } from '../Actions/authenticationActions'
import { authVisible } from '../Actions/displayActions'


export const loadBudget=(month, year)=>{
  return (dispatch) =>{
    fetch(`/budget/${month}/${year}`,{headers: {
        authorization: localStorage.getItem("token"),
      }
    })
      .then(res => res.json()
        .then(body=>({status: res.status, body}))
      )
      .then(
        (budget)=>{
          const { body, status } = budget
          if (status === 200){
            dispatch(budgetLoaded(body))
          }else{
            dispatch(loginFailure(body.error, status))
            dispatch(authStatus('','failure'))
            dispatch(authVisible(true))
          }
    }).catch((err)=>err)
  }
}

const budgetLoaded=(budget)=>{
  return{
    type: "BUDGET_LOADED",
    value: budget
  }
}

export const postNewBudgetTrx=(budget)=>{
  return (dispatch)=>{
    fetch("/budget",{
      method: 'post',
      body: JSON.stringify(budget),
      headers:{
        'content-type': 'application/json',
        authorization: localStorage.getItem("token"),
      }
    })
    .then(res=>res.json())
    .then((budgetTrx)=>{
      console.log(budgetTrx)
      const dtVal = new Date(budgetTrx.postDate)
      dispatch(loadBudget(dtVal.getMonth(), dtVal.getFullYear()))
    })
  }
}

export const deleteBudgetTrx=(id)=>{
  return (dispatch)=>{
    fetch(`/budget/${id}`,{
      method: 'DELETE',
      headers: {
        authorization: localStorage.getItem("token"),
      }
    })
    .then(res=>res.json())
    .then((trx)=>{
      const dtVal = new Date()
      dispatch(loadBudget(dtVal.getMonth(), dtVal.getFullYear()))
    })
  }
}

export const postUpdateBudgetTrx=(main, id)=>{
  return (dispatch)=>{
    fetch(`/budget/${id}`,{
      method: 'put',
      body: JSON.stringify(main),
      headers:{
        'content-type': 'application/json',
        authorization: localStorage.getItem("token"),
      } 
    })
    .then(res=>res.json())
    .then((trx)=>{
      const dtVal = new Date()
      dispatch(loadBudget(dtVal.getMonth(), dtVal.getFullYear()))
    })
  }
}