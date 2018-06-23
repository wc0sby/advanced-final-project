export const loadCash=()=>{
  return (dispatch) =>{
    fetch(`/cash`)
      .then(res => res.json())
      .then(
        (cash)=>{
        dispatch(cashLoaded(cash))
    })
  }
}

const cashLoaded=(cash)=>{
  return{
    type: "CASH_LOADED",
    value: cash
  }
}

