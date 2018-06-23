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