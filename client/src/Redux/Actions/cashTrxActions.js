export const loadCash=()=>{
  return (dispatch) =>{
    fetch(`/cash`, {
      headers: {
         authorization: localStorage.getItem("token"),
       }
    })
      .then(res => res.json())
      .then(
        (cash)=>{
        dispatch(cashLoaded(cash))
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
      dispatch(loadCash(cashTrx))
    })
  }
}

export const deleteCashTrx=(id)=>{
  return (dispatch)=>{
    fetch(`/cash/${id}`,{
      method: 'DELETE',
      authorization: localStorage.getItem("token")
    })
    .then(res=>res.json())
    .then((trx)=>{
      dispatch(loadCash(trx))
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
      dispatch(loadCash(trx))
    })
  }
}