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

export const postNewCashTrx=(cash)=>{
  return (dispatch)=>{
    fetch("/cash",{
      method: 'post',
      body: JSON.stringify(cash),
      headers:{
        'content-type': 'application/json'
      }
    })
    .then(res=>res.json())
    .then((cashTrx)=>{
      dispatch(loadCash(cashTrx))
    })
  }
}

export const deleteCashTrx=(id)=>{
  return (dispatch)=>{
    fetch(`/cash/${id}`,{
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then((trx)=>{
      dispatch(loadCash(trx))
    })
  }
}