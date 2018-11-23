export const loadBudget=()=>{
  return (dispatch) =>{
    fetch(`/budget`,{headers: {
        authorization: localStorage.getItem("token"),
      }
    })
      .then(res => res.json())
      .then(
        (budget)=>{
        dispatch(budgetLoaded(budget))
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
      dispatch(loadBudget(budgetTrx))
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
      dispatch(loadBudget(trx))
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
      dispatch(loadBudget(trx))
    })
  }
}