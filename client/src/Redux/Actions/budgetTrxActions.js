export const loadBudget=()=>{
  return (dispatch) =>{
    fetch(`/budget`)
      .then(res => res.json())
      .then(
        (budget)=>{
        dispatch(budgetLoaded(budget))
    })
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
        'content-type': 'application/json'
      }
    })
    .then(res=>res.json())
    .then((budgetTrx)=>{
      console.log(budgetTrx)
      dispatch(loadBudget(budgetTrx))
    })
  }
}

export const deleteBudgetTrx=(id)=>{
  return (dispatch)=>{
    fetch(`/budget/${id}`,{
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then((trx)=>{
      dispatch(loadBudget(trx))
    })
  }
}